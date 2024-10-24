import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import MyProvider from './Components/MyProvider'
import Banner from './Components/Banner'

function App() {
  

  return (
  <div  className='w-10/12 mx-auto'>
   <MyProvider>
        <Navbar/>
        <Banner/>
   </MyProvider>
  </div>
  )
}



export default App
