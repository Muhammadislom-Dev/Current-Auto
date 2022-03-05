import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import Current from '../../assets/img/current-logo-removebg-preview.png';
import Call from '../../assets/img/3059457.png'
import Card from '../../assets/img/card.png'

const Navbar =()=>{
    return(
        <>
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <Link to="/" className="navbar-link" > <img src={Current} alt="" className="header-pic" /> </Link>
            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
             </button>
            <div className="collapse navbar-collapse align-items-center" id="navbarNav">
                <ul className="navbar-nav mx-5">
                <li className="navbar-item">
                    <a className="navbar-link"  href="#">Inventory</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link" href="#">Why Electric</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link" href="#">Charging</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link" href='#'>We Buy EVs</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link"  href='#'>EV Education</a>
                </li>
                <li class="navbar-item dropdown">
                    <a class="navbar-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                <li className="navbar-item">
                    <a href="#" className="navbar-links"><img src={Call} alt="" className="navbar-picture" />+998997783606</a>
                </li>
                <li className="navbar_item">
                  <a href="#" className="navbar_link">AVAILABLE CARS</a>    
                </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="weight p-4">
        <div className="container">
        <div className="navbar-page">
              <div class="form-floating mb-3">
                <input type="search" class="form-control" id="floatingInput" placeholder='search' />
                <label className='label px-2 ' for="floatingInput" > <img src={Card} alt="" className='card' />  Search by year, make, model, feature...</label>
              </div>
            </div>
        </div>
    </div>
        </>
    )
} 
export default Navbar;