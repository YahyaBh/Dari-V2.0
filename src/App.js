import './App.scss';
import Logo from './Assets/logo_1 1.png'
import Cousc from './Assets/dari-couscous.png'
import CouscM from './Assets/couscous-dari-m.png'
import RightA from './Assets/angle-left.png'
import LeftA from './Assets/angle-right.png'
import Orna from './Assets/OrnamentHeader.jpg'
import WingL from './Assets/pngwing-left.png'
import WingR from './Assets/pngwing-right.png'


function App() {
  return (
    <div>

      <header>
        <nav>
          <ul>
            <div>
              <li>
                <img src={Logo} alt="logo" />
              </li>
            </div>
            <div className='sections'>
              <li>HOME</li>
              <li>PRODUCTS</li>
              <li>ABOUT US</li>
              <li>CONTACT</li>
            </div>

            <div>
              <li>
                <select name="language" >
                  <option value={"English"} defaultValue={"English"}>ENG</option>
                  <option value={"Arabic"}>AR</option>
                  <option value={"French"}>FR</option>
                </select>
              </li>
            </div>
          </ul>
        </nav>


        <section>
          <div className='top'>
            <h2>
              Discover Our New<br />
              <span>Couscous</span> Recipes
            </h2>

            <p>
              Check our new series of cousous original recipes prepared by the <br />
              famous Chef Choumicha
            </p>
          </div>


          <div className='images-couscous'>

            <div className='gen-c'>
              <img src={RightA} alt="right" className='right-a' />
              <div className='couscours-mid'>
                <img src={Cousc} alt="couscous" className='left-c' />
                <img src={Cousc} alt="couscous" className='right-c' />
                <img src={Cousc} alt="couscous" />
              </div>
              <img src={LeftA} alt="left" className='left-a' />

            </div>
          </div>

        </section>


        <img src={Orna} alt='Orna' className='Orna' />
      </header>



      <section>

        <div className='top'>

          <img src={WingL} alt='WingL' className='Wing-Left' />
          <h3>Une Vaste Gamme De<br />
            <span>Couscous Premium</span></h3>
          <img src={WingR} alt='WingR' className='Wing-Right' />

        </div>



        <div className='center'>


          <div className='cards'>


            <div className='card'>

              <img src={CouscM} alt="couscous-m" />

              <h3>Couscous Complete</h3>
              <p>Riche en fibres, le couscous complet DARI est apprécié pour sa saveur et sa légèreté. Il peut aussi être utilisé dans ...</p>

              <button className='btn'>30,00 DH</button>

            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default App;
