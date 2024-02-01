import React from 'react';
import { useEffect, useState } from 'react'
import { Routes } from 'react-router-dom';
import Home from './Components/Home';

function app() {
const tema_atual = localStorage.getItem('tema_atual');
  const [tema, setTema] = useState(tema_atual? tema_atual : 'light')

  useEffect(()=>{
    localStorage.setItem('tema_atual', tema)
  })
  return (
    
    
    <div className={`container ${tema}`}>
      <Home tema={tema} setTema={setTema}/>
    </div>
    
    
  )
}

export default app
