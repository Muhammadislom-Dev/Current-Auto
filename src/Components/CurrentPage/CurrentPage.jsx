import './Current-page.css';
import Logo from '../../assets/img/logos.png';
import Cars from '../../assets/img/icon-car.png';
import Compyuter from '../../assets/img/icon-compyuter.png';
import CarIcon from '../../assets/img/cars-icon.png'
import Mobil2 from '../../assets/img/mobil2.png'
import Mobil from '../../assets/img/mobil.jpg'
import Mobil1 from '../../assets/img/mobil1.jpg'
import Mobil4 from '../../assets/img/mobil4.jpg'

const Currentpage = () =>{
    return(
    <>
        <section class="info-section plug p-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-md-pull-6 col-sm-12 car-image no-padding fly-in-left">
                        <img className='img' src={Logo} alt="Selling Your EV?" />
                    </div>
                    <div class="col-sm-12 col-md-push-6 col-md-6 text-center fly-in-right">
                        <div class="flex">
                            <div class="section-info">
                                <h2 class="big">Selling Your EV?</h2>
                                <p class="content_ content-margin">Well give you a fair price. Use our online trade-in estimator <br /> to get an idea of what your EV is worth.</p>
                                <a href="/sell-your-ev/" class="arrow-link">
                                    GET APPRAISED
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="box">
            <div className="container">
                <div className="box-page">
                    <h1 className='box-names'>How easy is it?</h1>
                    <p className="box-texts">Simple! Just find your car and use our online <br /> system to complete the purchase.</p>
                    <p className="box-texts">No need to even leave the house!</p>
                </div>
                <div className="box_page">
                    <ul className="box-list">
                        <li className="box-item">
                            <img src={Cars} alt="" className="box-pic" />
                        </li>
                        <li className="box-item">
                            <p className="box-name">1. Find Your Vehicle</p>
                        </li>
                        <li className="box-item">
                            <p className="box-text">Browse hand-picked pre-owned electric vehicles.</p>
                        </li>
                    </ul>
                    <ul className="box-list">
                        <li className="box-item">
                            <img src={Compyuter} alt="" className="box-pics" />
                        </li>
                        <li className="box-item">
                            <p className="box-name">2. Purchase Online</p>
                        </li>
                        <li className="box-item">
                            <p className="box-text">Chat, finance, and sign.</p>
                        </li>
                    </ul>
                    <ul className="box-list">
                        <li className="box-item">
                            <img src={CarIcon} alt="" className="box-pic" />
                        </li>
                        <li className="box-item">
                            <p className="box-name">3. Get it delivered!</p>
                        </li>
                        <li className="box-item">
                            <p className="box-text">We’ll bring the vehicle to you where ever you are.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="media">
            <div className="container">
                <h1 className='media-name'>Available Electric Vehicles</h1>
                <p className="media-text">Select a model to view our current inventory.</p>
                <div className="media-page">
                    <div className="media-box">
                        <img src={Mobil2} alt="" className="media-pic" />
                        <h4 className="media-names">TESLA MODEL X</h4>
                        <a href="#" className="media-link">ELECTRIC</a>
                    </div>
                    <div className="media-box">
                        <img src={Mobil2} alt="" className="media-pic" />
                        <h4 className="media-names">TESLA MODEL S</h4>
                        <a href="#" className="media-link">ELECTRIC</a>
                    </div>
                    <div className="media-box">
                        <img src={Mobil} alt="" className="media-pic" />
                        <h4 className="media-names">CHEVY BOLT</h4>
                        <a href="#" className="media-link">ELECTRIC</a>
                    </div>
                    <div className="media-box">
                        <img src={Mobil1} alt="" className="media-pic" />
                        <h4 className="media-names">PORSCHE TAYCAN</h4>
                        <a href="#" className="media-link">ELECTRIC</a>
                    </div>
                    <div className="media-box">
                        <img src={Mobil4} alt="" className="media-pic" />
                        <h4 className="media-names">TESLA MODEL 3</h4>
                        <a href="#" className="media-link">ELECTRIC</a>
                    </div>
                    <div className="media-box">
                        <img src={Mobil2} alt="" className="media-pic" />
                        <h4 className="media-names">TESLA MODEL X</h4>
                        <a href="#" className="media-link">ELECTRIC</a>
                    </div>
                </div>
                <div className="media-button">
                    <button className="media-btn">VIEW ALL VEHISLEC</button>
                </div>
            </div>
        </section>

        <aside className="aside">
            <div className="container">
                <h2 className='aside-name'>Have a question?</h2>
                <div className="aside-page">
                    <button className="aside-btn">
                        CHAT WITH US NOW  
                    </button>
                </div>
            </div>
        </aside>
    </>
    )
}
export default Currentpage