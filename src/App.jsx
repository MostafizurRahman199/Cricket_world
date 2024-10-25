import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import MyProvider from './Components/MyProvider'
import Banner from './Components/Banner'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {
  

  return (
<>
<div  className='w-10/12 mx-auto'>
   <MyProvider>
        <Navbar/>
        <Banner/>
        <Main/>
   </MyProvider>
  </div>
        <Footer/>
</>
  )
}



export default App
