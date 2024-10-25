import React, { useContext, useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MyContext from "../utils/MyContext";
import AllPlayerSection from "./AllPlayerSection";
import SelectedPlayers from "./SelectedPlayers";

export default function Main() {
  const { alignment, handleChange,selectedPlayers  } = useContext(MyContext);

  return (
    <div className="w-full   pb-56">
      <div className="space-y-4 sm:flex justify-between items-center ">
      
            {alignment === 'available_players' ?  <h1 className="text-2xl font-bold">Available Players</h1> :  <h1 className="text-2xl font-bold">Selected Players ({selectedPlayers.length}/6)</h1>}
                <div>
                <ToggleButtonGroup
                    color="primary"
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
                        "&.Mui-selected": {
                      background: 'linear-gradient(to right, #fb7185, rgba(255, 255, 0, 0.5))',
                        fontWeight: "bold",
                        color: "black",
                        border: '2px solid black',
                       
                    
                        borderRadius: "10px 0 0 10px", // Ensures selected state maintains border-radius
                        },
                    }}
                    >
                    Available
                    </ToggleButton>

                    <ToggleButton
                    value="selected_players"
                    sx={{
                        textTransform: "none", // Prevents uppercase text
                        borderRadius: "0 10px 10px 0", // Applies right-side border radius
                        "&.Mui-selected": {
                      background: 'linear-gradient(to right, #fb7185, rgba(255, 255, 0, 0.5))',
                        fontWeight: "bold",
                        color: "black",
                        border: '2px solid black',
                       
                        borderRadius: "0 10px 10px 0", // Ensures selected state maintains border-radius
                        },
                    }}
                    >
                    Selected ({selectedPlayers.length})
                    </ToggleButton>
                </ToggleButtonGroup>
                </div>
      </div>
      {alignment === "available_players" ? (
        <AllPlayerSection />
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
}
