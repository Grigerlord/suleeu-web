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
  return (
    // <div id='principal-container' className='principal-container'>
    //   <div className='videoContain'>

    //     <ReactPlayer
    //       url={video}
    //       playing
    //       loop
    //       muted
    //       width='100%'
    //       height='100%'
    //       playbackRate={0.4}
    //     />
    //   </div>


    //   <main>

    //     {/* <div className='effect-blur'></div> */}


    //     <nav>
    //       <div className='logo-principal'>
    //         <img src={logo} alt="Logo Soy un latino exitoso en USA" />
    //       </div>
    //         <ul>
    //           <li key='nav--quienes-somos'>Quiénes somos</li>
    //           <li key='nav--testimonios'>Testimonios</li>
    //           <li key='nav--galeria'>Galería</li>
    //           <li key='nav--contacto'>Contacto</li>
    //         </ul>
    //     </nav>



    //     <section>
    //       <header>
    //         <h1>Soy un latino exitoso en USA</h1>
    //         <p>Aplica aquí para que veas que es lo bueno</p>
    //         <form>
    //           <input type="text" />
    //           <button type='button'>Aplicar</button>
    //         </form>
    //         <div className='opcions'>
    //           <ul>
    //             <li key='form--option1'>Opción 1</li>
    //             <li key='form--option2'>Opción 2</li>
    //           </ul>
    //         </div>
    //       </header>
    //     </section>


    //     <footer>
    //       <div>Redes</div>
    //       <div>Dirección</div>
    //       <div>Desarrollo</div>
    //       <div>Logo</div>
    //     </footer>
    //   </main>
     

    // </div>
    <>
      {/* <video src="./assets/videos/360p.mp4" autoplay loop muted></video> */}
      
      {/* <div className='video-fondo'>
        <ReactPlayer
          url={video}
          playing
          loop
          muted
          width='100%'
          height='100%'
          playbackRate={0.1}
        />
      </div> */}

      <video preload='' autoPlay muted loop src={video} className='video-fondo'>
      </video>

      <main>


        <nav>
          <div className='nav--header'>


            <div className='aplicar--header'>
              <div>
                <label for='email'>
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
              <ul>
                <li><a href="">NOSOTROS</a></li>
                <li><a href="">VACANTES</a></li>
                <li><a href="">GALERÍA</a></li>
                <li>
                  <figure>
                    <a href="#"><img src={logo} alt="Logo soy un latino exitoso en USA" /></a>
                  </figure>
                </li>
                <li><a href="">REGALOS</a></li>
                <li><a href="">TESTIMONIOS</a></li>
                <li><a href="">CONTACTO</a></li>
              </ul>
            </div>

          </div>

        </nav>


        <section class="s1">

          
          <div class="form-principal--container">
            <header>
              <h1>SOY UN LATINO <br/> EXITOSO EN USA</h1>
            </header>
            <form>
              <label for="inputEmail-principal">
                <p>Ingresa tu @email si deseas formar parte de esta compañía</p> 
              </label>
                <div class="box-input--principal">
                  <input type="email" placeholder="soyunlatino@exitoso.usa" id="inputEmail-principal" />
                  <button type="button">APLICAR</button>
                </div>
            </form>
        </div>


        </section>



        <section class="s2">section 2</section>
        <section class="s3">section 3</section>
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
