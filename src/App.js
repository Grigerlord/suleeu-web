import { React, useEffect } from 'react'
import './App.css';
// import ReactPlayer from 'react-player'
import video from './assets/videos/360p.mp4'
import logo from './assets/images/logoStrans.png'
import logoWords from './assets/images/logoWords.png'
import {
  FaClipboardCheck,
  FaInstagramSquare,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube } from 'react-icons/fa';

function App() {

  useEffect(() => {
    
    const logoP = document.querySelector('#imgPrincipal')
    const s2 = document.querySelector('.s2')
    const boxMenuHeader = document.querySelector('.box-menu--header')
    const ListMenuHeader = document.querySelector('#listMenuHeader')


    document.addEventListener('scroll', () => {
      let scroll = window.scrollY
      if(scroll === 0){
        boxMenuHeader.style.backgroundColor = '#ffffff00'
        logoP.style.width = '200px'
        logoP.style.height = '200px'
        ListMenuHeader.style.alignItems = 'flex-start'
      }else {
        boxMenuHeader.style.backgroundColor = '#00000065'
        logoP.style.width = '50px'
        logoP.style.height = '50px'
        ListMenuHeader.style.alignItems = 'center'
      }
    })

    //INTERSECTION OBSERVER
    // const cambiarLogoSize = (entradas, observador) => {
    //   entradas.forEach((entrada) => {
    //     if(entrada.isIntersecting){
    //       logoP.style.width = '80px'
    //       logoP.style.height = '80px'
    //       boxMenuHeader.style.backgroundColor = '#ffffff'
    //     }
    //   })
    // }
    // const observadorLogo = new IntersectionObserver(cambiarLogoSize, {
    //   root: null,
    //   rootMargin: '0px 0px 5px 0px',
    //   threshold: 0.1,
    // })
    // observadorLogo.observe(s2)

  }, [])
  


  return (
    <>

      <video preload='' autoPlay muted loop src={video} className='video-fondo'>
      </video>

      <main>


        <nav>
          <div className='nav--header'>


            <div className='aplicar--header'>
              <div>
                <label htmlFor='email'>
                  <span>
                    <FaClipboardCheck />
                  </span>
                </label>
                <input id='email' type="email" placeholder='Ingresa tu Email para APLICAR' />
              </div>

              <div className='redes--header'>
                <ul>
                  <li className='icoInstagram'> <FaInstagramSquare className='gradient' /> </li>
                  <li className='icoFacebook' > <FaFacebook /> </li>
                  <li className='icoTwitter'> <FaTwitter /> </li>
                  <li className='icoLinkedin'> <FaLinkedin /> </li>
                  <li className='icoYoutube'> <FaYoutube /> </li>
                </ul>
              </div>
            </div>


            <div className='box-menu--header'>
              <ul id='listMenuHeader'>
                <li><a href="">NOSOTROS</a></li>
                <li><a href="">VACANTES</a></li>
                <li><a href="">GALERÍA</a></li>
                <li>
                  <figure>
                    <a href="#"><img id="imgPrincipal" src={logo} alt="Logo soy un latino exitoso en USA" /></a>
                  </figure>
                </li>
                <li><a href="">REGALOS</a></li>
                <li><a href="">TESTIMONIOS</a></li>
                <li><a href="">CONTACTO</a></li>
              </ul>
            </div>

          </div>

        </nav>


        <section className="s1">

          
          <div className="form-principal--container">
            <header>
              <h1>SOY UN LATINO <br/> EXITOSO EN USA</h1>
            </header>
            <form>
              <label htmlFor="inputEmail-principal">
                <p>Ingresa tu @email si deseas hacer parte de nuestra compañía</p>
              </label>
                <div className="box-input--principal">
                  <input type="email" placeholder="soyunlatino@exitoso.usa" id="inputEmail-principal" />
                  <button type="button">APLICAR</button>
                </div>
            </form>
        </div>


        </section>

        <section className="s2">section 2</section>
        <section className="s3">section 3</section>
        <footer>
        <div>Redes</div>
           <div>Dirección</div>
           <div>Desarrollo</div>
           <div>Logo</div>
        </footer>
      </main>
    </>
  );
}

export default App;
