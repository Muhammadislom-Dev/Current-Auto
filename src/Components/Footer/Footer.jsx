import '../Footer/Footer.css'
import current from '../../assets/img/current.jpg';
import Instagram from '../../assets/img/instagram.png';
import Youtube from '../../assets/img/4494467.png';
import Facebook from '../../assets/img/4628653.png';
import Linkedin from '../../assets/img/665212.png';

const Footer =()=>{
    return(
        <>
        <footer className="footer">
            <div className="container">
                <img src={current} alt="" className="footer-pic" />
                <div className="footer-page">
                    <img src={Facebook} alt="" className="footer-img" />
                    <img src={Instagram} alt="" className="footer-img" />
                    <img src={Youtube} alt="" className="footer-img" />
                    <img src={Linkedin} alt="" className="footer-img" />
                </div>
                <div className='footer-box'>
                    <h6 className='footer-number'>Phone: 855-438-3838</h6>
                    <h6 className="footer-type">300 E Ogden Ave Hinsdale, IL 60521</h6>
                    <h6 className="footer-type">Monday - Saturday: By Appointment Only <br /> Sunday: Closed</h6>
                    <h6 className='footer-types'>Copyright © 2022 Current Automotive</h6>

                    <p className="footer-text py-4">Current Automotive is not affiliated with Tesla, inc. <br />
                    The three lightning bolts logo is a registered trademark of Current Automotive.</p>
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#" className="footer-link">Privacy Policy</a></li>
                        <li className="footer-item"><a href="#" className="footer-link">Contact Us</a></li>
                        <li className="footer-item"><a href="#" className="footer-link">Sitemap</a></li>
                        <li className="footer-item"><a href="#" className="footer-link">Sitemap XML</a></li>
                    </ul>
                    <p className="footer-texts">Advanced Automotive Dealer Websites by <a href="#" className="footer-links"> Dealer Inspire</a></p>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer