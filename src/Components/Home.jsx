import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import logo_light from '../assets/logo-white.png'
import logo_dark from '../assets/logo-black.jpeg'
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toogle_light from '../assets/night.png'
import toogle_dark from '../assets/day.png'



const Home = ({tema, setTema}) => {

   const toogle_mode = () =>{
    tema == 'light' ? setTema('dark') : setTema('light');
   }

  return (
    <div className='navbar'>
        <img src={tema == 'light' ? logo_light : logo_dark } alt="" className={`logo ${tema}`}/>

        <ul>
            <li>HOME</li>
            <li>SOLUÇÕES</li>
            <li>SOBRE</li>
            <li>BLOG</li>
            <li>CONTATO</li>
        </ul>
     <div className='search-box'>  
        <input type="text" placeholder='O que procura?'/>
        <img src={tema == 'light' ? search_icon_light : search_icon_dark} alt="" />
     </div>
     <img  onClick={()=>{toogle_mode()}} src={tema == 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon'/>
    </div>
  )
}

export default Home
