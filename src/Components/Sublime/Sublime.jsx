import '../Sublime/Sublime.css'
import Spark from '../../assets/img/spark.jpg'
import { Link } from 'react-router-dom'

const Sublime =()=> {
    return(
        <>
        <div className="sublime">
            <div className="container">
                <div className="sublime-left">
                <h1 className="sublime-name">Results Found:</h1>
                <ul className="sublime-list">
                    <li className="sublime-item">Sort By:</li>
                    <li class="sublime-item dropdown">
                    <a class="sublime-link dropdown-toggle" href="#" id="sublimeDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Highest Mileage
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="sublimeDropdownMenuLink">
                        <li><a class="dropdown-items" href="#">Recommended</a></li>
                        <li><a class="dropdown-items" href="#">Lowest Price</a></li>
                        <li><a class="dropdown-items" href="#">Hights Price</a></li>
                        <li><a class="dropdown-items" href="#">Lowest Milliage</a></li>
                        <li><a class="dropdown-items" href="#">Hights Milliage</a></li>
                    </ul>
                </li>
                </ul>
                </div>
                <div className="sublime-box">
                    {
                        Array.from(new Array(16)).map(e => (
                            <div className="sublime-card">
                                <Link to="/pictures">
                                    <img src={Spark} className="card-img-top" />
                                </Link>
                                <div className="card-body">
                                    <ul className="sublime-title">
                                        <li className="sublime-items">
                                        <p className="card-title">Pre-Owned 2016</p>
                                        </li>
                                        <li className="sublime-items">
                                        <p className="card-text">Tesla Model S 70D AWD Highway Autopilot | 240 miles range </p>
                                        </li>
                                        <li className="sublime-items">
                                        <p className="sublime-media">Stock:C1780PA</p> 
                                        </li>
                                    </ul>
                                </div>
                                <div className="sublime-skill">
                                    <p className="sublime-price">Price</p>
                                    <p className="sublime-number">$13 890</p>
                                </div>
                                <div className="sublime_page">
                                    <p className="sublime-mile">Mileage: 39,621</p>
                                    <p className="sublime-mile">Exterior: Titanium Metallic</p>
                                    <p className="sublime-mile">Interior: Dark Pewter W/Electric Blue Trim</p>
                                </div>
                            </div>
                    ))
                    }
                </div>
            </div>
        </div>

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

export default Sublime;