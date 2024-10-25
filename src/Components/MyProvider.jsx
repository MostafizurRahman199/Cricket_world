import React, { useEffect, useState } from 'react'
import MyContext from '../utils/MyContext'
import { toast } from 'react-toastify';

export default function MyProvider({children}) {
    const [price, setPrice] = useState(100);
    const [alignment, setAlignment] = useState('available_players');
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const handlePlayerSelect = (player)=>{
        const check = selectedPlayers.find((item)=>{
            if(item.id === player.id){
                return true;
            }else{
                return false;
            }
        })

        if(check){
            toast.error("You have already selected this player");
        }else{
            if(player.price <= price &&  selectedPlayers.length < 6){

                toast.success(`Congrats! ${player.name} Successfully selected`);
                setPrice(price - parseFloat(player.price));
                setSelectedPlayers([...selectedPlayers, player]);
            }
            else if( selectedPlayers.length >= 6){
                toast.error('You can not selected more than six players');

            }
            if(price < player.price){
                toast.error('You do not have enough money to select this player.');
            }
        }
    }

    const handleRemovePlayer = (player) => {
       
        const filteredPlayers = selectedPlayers.filter((item) => item.id !== player.id);
        setSelectedPlayers(filteredPlayers);
        setPrice((previousPrice)=> (previousPrice + parseFloat(player.price)));
        toast.warning(`Player removed`);
        
       
    };

    useEffect(()=>{
        fetch('players.json')
        .then(response => response.json())
        .then(data => setPlayers(data))
    },[])


const addCoin = ()=>{
   
    setPrice(price + 5000);
}

  return (
    <MyContext.Provider value={{price, addCoin, alignment, handleChange, players, selectedPlayers, handlePlayerSelect, handleRemovePlayer}}>
            {children}
    </MyContext.Provider>
  )
}
