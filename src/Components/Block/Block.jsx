import '../Block/Block.css'
import { Link } from 'react-router-dom';
import Current from '../../assets/img/current-logo-removebg-preview.png';

const Block =() =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg ">
        <div className="container">
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
                </ul>
            </div>
        </div>
        </nav>
        </>
    )
}
export default Block;