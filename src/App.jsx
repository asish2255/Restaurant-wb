import { useState } from 'react'

import './App.css'

function App() {

  return (

    <div className='App'>

      <header>
        <h1>Restaurant Website</h1>
        <nav>
          <ul>

            <li><a href='home'>Home</a></li>
            <li><a href='about'>About</a></li>
            <li><a href='menu'>Menu</a></li>
            <li><a href='contact'>Contact</a></li>

          </ul>
        </nav>
      </header>

      <section className='about'>

        <h2>ABOUT</h2>
        <p>This restaurent is a place where you can experience food from all over the world.We have an experience of more than 5 decade in the industry.
          If you try our food once you will come back again
        </p>

      </section>

      <section className='menu'>

        <h2>MENU</h2>
        <ul>
          <li>Butter chicken  : Made with natural butter and chicken grown in our own farm</li>
          <li>Mutton mandi : Made with 100% authentic ingredients exported from middle east</li>
          <li>Chicken biriyani : The best biriyani made with organic ingredients</li>
        </ul>

      </section>

      <footer>
        <h3>Contact : restaurant123@gmail.com</h3>
      </footer>



    </div>
  
   )
}

export default App ;
