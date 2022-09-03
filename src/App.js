import './App.css';
import ReactPlayer from 'react-player'
import video from './assets/videos/360p.mp4'
import logo from './assets/images/logoStrans.png'

function App() {
  return (
    <div id='principal-container' className='principal-container'>
      <div className='videoContain'>

        <ReactPlayer
          url={video}
          playing
          loop
          muted
          width='100%'
          height='100%'
          playbackRate={0.4}
        />
      </div>


      <main>

        {/* <div className='effect-blur'></div> */}
        <nav>
          <div className='logo-principal'>
            <img src={logo} alt="Logo Soy un latino exitoso en USA" />
          </div>
            <ul>
              <li key='nav--quienes-somos'>Quiénes somos</li>
              <li key='nav--testimonios'>Testimonios</li>
              <li key='nav--galeria'>Galería</li>
              <li key='nav--contacto'>Contacto</li>
            </ul>
        </nav>



        <section>
          <header>
            <h1>Soy un latino exitoso en USA</h1>
            <p>Aplica aquí para que veas que es lo bueno</p>
            <form>
              <input type="text" />
              <button type='button'>Aplicar</button>
            </form>
            <div className='opcions'>
              <ul>
                <li key='form--option1'>Opción 1</li>
                <li key='form--option2'>Opción 2</li>
              </ul>
            </div>
          </header>
        </section>


        <footer>
          <div>Redes</div>
          <div>Dirección</div>
          <div>Desarrollo</div>
          <div>Logo</div>
        </footer>
      </main>
     

    </div>
  );
}

export default App;
