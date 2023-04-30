import { useState } from 'react'
import Logo from './assets/logo.svg'
import './App.css'

function App() {

  return (
    <div className="app">
      <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="empresaInfo">
            <h1>Pedro Link</h1>
            <p>descrição descrição descrição descrição descrição descrição 
              descrição descrição descrição descrição descrição descrição 
            </p>
          </div>
          <div className="sociais">
            <button className='btn instagram'><i class="fa-brands fa-instagram"></i> Instagram</button>
            <button className='btn spotfy'><i class="fa-brands fa-spotify"></i> Spotfy</button>
            <button className='btn facebook'><i class="fa-brands fa-facebook"></i> Facebook</button>
            <button className='btn telegram'><i class="fa-brands fa-telegram"></i> Telegram</button>
            <button className='btn tiktok'><i class="fa-brands fa-tiktok"></i> TikTok</button>
            <button className='btn youtube'><i class="fa-brands fa-youtube"></i> YouTube</button>
            <button className='btn twitter'><i class="fa-brands fa-twitter"></i> Twitter</button>
          </div>
          <div className="footer">
            <p>©Pedro Sena 2023</p>
          </div>
      </div>
    </div>
  )
}

export default App
