import React, { useState } from 'react'
import MyContext from '../utils/MyContext'
import { toast } from 'react-toastify';

export default function MyProvider({children}) {
    const [price, setPrice] = useState(100);



const addCoin = ()=>{
   
    setPrice(price + 1000);
}

  return (
    <MyContext.Provider value={{price, addCoin}}>
            {children}
    </MyContext.Provider>
  )
}
