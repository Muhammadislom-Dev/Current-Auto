import './Header.css'

import Current from '../../assets/img/current-logo-removebg-preview.png';
import { Link } from 'react-router-dom';
import Bolt from '../../assets/img/blue-bolt.png';
import Cal from '../../assets/img/calls.png'


const Header = () =>{


    return(
       <>  
        <video autoPlay muted className="header-video" id="myVideo">
    <source
      src="https://3a73912591e33a34c7ec-0b2c97842f44191203c9b45228f673bc.ssl.cf1.rackcdn.com/currentautomotive/home-video.mp4"
      type="video/mp4" />
  </video>
           <div className="header-section">
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <img src={Current} alt="" className="header-pic" />
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse align-items-center" id="navbarNav">
                    <ul className="navbar-nav mx-5">
                    <li className="nav-item">
                        <Link to="/inventory" className="nav-link"  href="#">Inventory</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Why Electric</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Charging</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ">We Buy EVs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ">EV Education</a>
                    </li>
                    <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Blog</a></li>
                                <li><a class="dropdown-item" href="#">Our Story</a></li>
                                <li><a class="dropdown-item" href="#">Shipping</a></li>
                                <li><a class="dropdown-item" href="#">We Bus Teslas</a></li>
                                <li><a class="dropdown-item" href="#">We Buy Mach-Es</a></li>
                                <li><a class="dropdown-item" href="#">We Buy All EVs and PHEVs</a></li>
                                <li><a class="dropdown-item" href="#">Value Your Gas Trade-in</a></li>
                            </ul>
                        </li>
                    <li className="nav-items">
                        <a href="#" className="nav-link"><img src={Cal} alt="" className="header-picture" />+998997783606</a>
                    </li>
                    </ul>
                </div>
            </div>
            </nav>
            <div className="my-5 pb-5 header module-cover parallax  fullscreen">
                <div className="container">
                    <div  className="header_page row py-5">
                        <div className="col-md-12">
                            <h1 className="header-name"><strong>Pre-owned Electric Vehicles. <br /> Buy Online. Get it Delivered.</strong></h1>
                            <p className="header-text ">We offer financing, accept all trades, and deliver anywhere in the Continental US.</p>
                            <button  className="header-button">VIEW ALL VEHISLEC</button>
                        </div>
                    </div>
                    <div className="header-pages row  ">
                        <ul className="header-list">
                            <li className="header-item">
                                <a href="#" className="header-link"> <img className='bolt' src={Bolt} alt="" />  How Does Shipping Work?</a>
                            </li>
                            <li className="header-item">
                                <a href="#" className="header-link"> <img className='bolt' src={Bolt} alt="" /> Browse our Electric Vehicles</a>
                            </li>
                            <li className="header-item">
                                <a href="#" className="header-link"><img className='bolt' src={Bolt} alt="" />  Our Story</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
 
       </> 
    )
}

export default Header;