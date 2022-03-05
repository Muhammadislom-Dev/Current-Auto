import '.././Page/Page.css'
import Aos from "aos"
import "aos/dist/aos.css"
import Car from '../../assets/img/car.jpg'
import React , { useEffect } from 'react'

const Page = () =>{
    useEffect(() =>{
        Aos.init({});
    }, []);
    return(
        <>
        <div className="page">
            <div className="container">
            <div class=" row align-items-center g-0">
                <div data-aos="fade-right" data-aos-duration="1000"  class="col-xl-5 col-lg-6 col-md-12">
                    <div class="py-5 py-lg-0">
                        <h3 class="page-name display-5 fw-bold">Get Charged.
                        </h3>
                        <p class="page-text mb-4 lead">
                        Find out how to charge an Electric Vehicle <br />
                        either on the road or at your home.
                        </p>
                        <a href="#" className="page-links">MORE   INFO</a>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1200"  class=" col-xl-7 col-lg-6 col-md-12 text-lg-end text-center">
                    <img src={Car} alt="" class="page-pic" />
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Page