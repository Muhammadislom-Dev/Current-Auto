import '.././Page/Page.css'
import Car from '../../assets/img/car.jpg'

const Page = () =>{

    return(
        <>
        <div className="page">
            <div className="container">
            <div class="row align-items-center g-0">
                <div class="col-xl-5 col-lg-6 col-md-12">
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
                <div class=" col-xl-7 col-lg-6 col-md-12 text-lg-end text-center">
                    <img src={Car} alt="" class="page-pic" />
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Page