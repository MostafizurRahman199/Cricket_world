import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function SelectedCard({player}) {

  return (
    <div className='flex justify-between items-center border-2 rounded-xl p-4'>
        <div className='flex  item-center gap-2'>
        <div className=''>
            <img className='w-20 h-20 object-cover rounded-xl' src={player.image} alt="" />
        </div>
        <div className='flex flex-col justify-around items-start'>
            <h2 className='text-xl font-bold'>{player.name}</h2>
            <h2>{player.role}</h2>
        </div>
        </div>
        <div>
            <button className='btn'><DeleteForeverIcon style={{color:"red"}}/></button>
        </div>
    </div>
  )
}
