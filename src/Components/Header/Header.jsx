import '../Header/Header.css'
import Current from '../../assets/img/current-logo-removebg-preview.png';

const Header = () =>{
 

    return(
       <>
<div className="header-input">
    <nav className="navbar navbar-expand-lg ">
        <div className="container">
             <img src={Current} alt="" className="header-pic" />
            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
             </button>
         <div className="collapse navbar-collapse align-items-center" id="navbarNav">
            <ul className="navbar-nav mx-5">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inventory</a>
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
            <li className="nav-item">
                <a className="nav-link ">More</a>
            </li>
            </ul>
         </div>
     </div>
    </nav>
    <section className="my-5 pb-5 header module-cover parallax  fullscreen">
        <div className="container">
            <div className="row py-5">
                <div className="col-md-12">
                    <h1 className="header-name m-b-20"><strong>Pre-owned Electric Vehicles. <br /> Buy Online. Get it Delivered.</strong></h1>
                    <p className="header-text m-b-40">We offer financing, accept all trades, and deliver anywhere in the Continental US.</p>
                    <button  className="header-button">VIEW ALL VEHISLEC</button>
                </div>
            </div>
            <div className="header-page row  my-5 py-5">
                <ul className="header-list">
                    <li className="header-item">
                        <a href="#" className="header-link"> How Does Shipping Work?</a>
                    </li>
                    <li className="header-item">
                        <a href="#" className="header-link">  Browse our Electric Vehicles</a>
                    </li>
                    <li className="header-item">
                        <a href="#" className="header-link"> Our Story</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</div>
   
       </> 
    )
}

export default Header;