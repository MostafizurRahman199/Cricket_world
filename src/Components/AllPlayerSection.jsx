import React, { useContext } from 'react'
import MyContext from '../utils/MyContext'
import PlayerCard from './PlayerCard';

export default function AllPlayerSection() {
    const {players} = useContext(MyContext);
    console.log(players)
  return (
    <div className='md:grid grid-cols-3 justify-center items-center'>{
        players.map((player)=>{
            return <PlayerCard player={player} key={player.id}/>
        })
        }</div>
  )
}
