import React, { useContext } from 'react'
import MyContext from '../utils/MyContext'
import PlayerCard from './PlayerCard';

export default function AllPlayerSection() {
    const {players} = useContext(MyContext);
    console.log(players)
  return (
    <div className='md:grid md:grid-cols-2 sm:justify-items-center lg:grid-cols-3 '>{
        players.map((player)=>{
            return <PlayerCard player={player} key={player.id}/>
        })
        }</div>
  )
}
