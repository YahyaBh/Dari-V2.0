import './App.scss';
import Logo from './Assets/logo_1 1.png'
import Cousc from './Assets/dari-couscous.png'
import CouscM from './Assets/couscous-dari-m.png'
import RightA from './Assets/angle-left.png'
import LeftA from './Assets/angle-right.png'
import Orna from './Assets/OrnamentHeader.jpg'
import OrnaSec2 from './Assets/OrnamentSec2.png'
import WingL from './Assets/pngwing-left.png'
import WingR from './Assets/pngwing-right.png'
import Mar1 from './Assets/MAR1.png'
import VectorWave from './Assets/VectorWave.png'
import Choumicha from './Assets/Choumicha.png'
import SBL1 from './Assets/SBL.png'
import SharpWave from './Assets/sharp-wave.png'
import bigSBL from './Assets/bigSBL.png'
import ContactOrma from './Assets/contact-Orma.png'



import { MdArrowOutward } from "react-icons/md";

function App() {
  return (
    <div>

      <div id='header'>
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


        </header>
        <img src={Orna} alt='Orna' className='Orna' />

      </div>


      <div className='gen-container'>
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

              <div className='card'>

                <img src={CouscM} alt="couscous-m" />

                <h3>Couscous Complete</h3>
                <p>Riche en fibres, le couscous complet DARI est apprécié pour sa saveur et sa légèreté. Il peut aussi être utilisé dans ...</p>

                <button className='btn'>30,00 DH</button>

              </div>

              <div className='card'>

                <img src={CouscM} alt="couscous-m" />

                <h3>Couscous Complete</h3>
                <p>Riche en fibres, le couscous complet DARI est apprécié pour sa saveur et sa légèreté. Il peut aussi être utilisé dans ...</p>

                <button className='btn'>30,00 DH</button>

              </div>

              <div className='card'>

                <img src={CouscM} alt="couscous-m" />

                <h3>Couscous Complete</h3>
                <p>Riche en fibres, le couscous complet DARI est apprécié pour sa saveur et sa légèreté. Il peut aussi être utilisé dans ...</p>

                <button className='btn'>30,00 DH</button>

              </div>

              <div className='card'>

                <img src={CouscM} alt="couscous-m" />

                <h3>Couscous Complete</h3>
                <p>Riche en fibres, le couscous complet DARI est apprécié pour sa saveur et sa légèreté. Il peut aussi être utilisé dans ...</p>

                <button className='btn'>30,00 DH</button>

              </div>

              <div className='card'>

                <img src={CouscM} alt="couscous-m" />

                <h3>Couscous Complete</h3>
                <p>Riche en fibres, le couscous complet DARI est apprécié pour sa saveur et sa légèreté. Il peut aussi être utilisé dans ...</p>

                <button className='btn'>30,00 DH</button>

              </div>

            </div>

          </div>

        </section>

        <img src={OrnaSec2} alt='Orna2' className='Orna2' />

      </div>



      <div className='news'>

        <div className='top'>
          <img src={RightA} alt='Right-a' />
          <h3>L’actualité de <span>Dari</span></h3>
          <img src={LeftA} alt='Left-a' />
        </div>




        <div className='cards'>

          <div className='card'>

            <img src={Mar1} alt="Morocco-dari " />

            <div className='bottom-cont'>
              <h3>DARI : Partenaire Officiel et Fournisseur Officiel</h3>
              <p>Riche en fibres, le couscous complet DARI est apprécié pour sa saveur et sa légèreté. Il peut aussi être utilisé dans ...</p>

              <button className='btn'>Show More <MdArrowOutward /></button>

            </div>
          </div>


          <div className='card'>

            <img src={Mar1} alt="Morocco-dari " />

            <div className='bottom-cont'>
              <h3>DARI : Partenaire Officiel et Fournisseur Officiel</h3>
              <p>Riche en fibres, le couscous complet DARI est apprécié pour sa saveur et sa légèreté. Il peut aussi être utilisé dans ...</p>

              <button className='btn'>Show More <MdArrowOutward /></button>

            </div>
          </div>


          <div className='card'>

            <img src={Mar1} alt="Morocco-dari " />

            <div className='bottom-cont'>
              <h3>DARI : Partenaire Officiel et Fournisseur Officiel</h3>
              <p>Riche en fibres, le couscous complet DARI est apprécié pour sa saveur et sa légèreté. Il peut aussi être utilisé dans ...</p>

              <button className='btn'>Show More <MdArrowOutward /></button>

            </div>
          </div>
        </div>


        <img src={VectorWave} alt='VectorWave' className='VectorWave' />

      </div>


      <div className='choumicha'>
        <div className='container'>
          <div className='left'>
            <img src={Choumicha} alt="choumicha" />
          </div>

          <div className='right'>

            <img src={SBL1} alt="SBL1" />
            <img src={SBL1} alt="SBL2" className='SBL2' />
            <h2>Original recipes <br /> by <span>Choumicha</span></h2>
            <p>Choumicha Chaf' née en 1972 à Had Kourt, au Maroc, est une productrice-animatrice marocaine d’émissions culinaires sur la chaîne 2M ainsi que sur sa propre chaîne YouTube, et propriétaire d’un restaurant</p>
            <button>Show More <MdArrowOutward /></button>

          </div>
        </div>

        <img src={SharpWave} alt='SharpWave' className='sharp-wave' />
      </div>


      <div className='contact'>

        <div className='top'>
          <img src={bigSBL} alt='Right-a' className='bigSBL-l' />
          <h3><span>Contact</span> us</h3>
          <img src={bigSBL} alt='Left-a' className='bigSBL-r' />
        </div>


        <div className='mid'>


          <form>
            <div className='inputs'>

              <div className='contain-inp'>
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className='contain-inp'>
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div className='contain-inp'>
              <label>Email Address</label>
              <input type="email" />
            </div>
            <div className='contain-inp'>
              <label>Message</label>
              <textarea ></textarea>
            </div>
            <button className='btn'>Send</button>
          </form>

          <img src={ContactOrma} alt="ContactOrma" className='ContactOrma' />
        </div>

      </div>




      <footer>
        <div className='container'>

          <div className='section'>
            <img src={Logo} alt="logo" />
            <p>Dari Couspate, ou Dari Couspâtes, est une entreprise agroalimentaire marocaine fondée en 1995 par Mohamed Khalil.</p>
          </div>

          <div className='section'>
            <h4>ABOUT US</h4>
            <ul>
              <li>HOME</li>
              <li>PRODUCTS</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>

          <div className='section'>
          <h4>ABOUT US</h4>
            <ul>
              <li>HOME</li>
              <li>PRODUCTS</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>

          <div className='section'>
          <h4>ABOUT US</h4>
            <ul>
              <li>HOME</li>
              <li>PRODUCTS</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>


  );
}

export default App;
