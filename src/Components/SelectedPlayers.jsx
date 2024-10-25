import React, { useContext } from 'react'
import MyContext from '../utils/MyContext'

import SelectedCard from './SelectedCard';


import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function SelectedPlayers() {
    
const {selectedPlayers, alignment, handleChange} = useContext(MyContext);

  return (
    <div className='flex flex-col justify-center gap-4 my-8'>
        {
            selectedPlayers.map((player)=><SelectedCard player={player}/>)
        }

        <div className='w-fit p-2  rounded-xl border-2 border-[#fb7185]'>
        <ToggleButtonGroup
                    color="warning"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                     <ToggleButton
    value="available_players"
    sx={{
      textTransform: "none", // Prevents uppercase text
      borderRadius: "10px 0 0 10px", // Applies left-side border radius
     background: 'linear-gradient(to right, #fb7185, rgba(255, 255, 0, 0.5))',
      fontWeight: "bold",
      border: '2px solid white',
      color: "black",
      borderRadius: "10px", // Ensures selected state maintains border-radius
      '&:hover': {
        backgroundColor: '#FFD700', // Deep yellow on hover
      },
      '&.Mui-selected': {
        backgroundColor: 'yellow',
      },
    }}
  >
    Add More Player
  </ToggleButton>

                 
                </ToggleButtonGroup>
        </div>
    </div>
  )
}
