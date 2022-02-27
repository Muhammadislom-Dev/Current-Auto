import '../Current-page/Current-page.css'
import Logo from '../../assets/img/logos.png'

const Currentpage = () =>{
    return(
    <>
          {/* <div className="page">
            <div className="container-fluid">
            <div class="page_title row align-items-center g-5">
                <div class=" col-xl-7 col-lg-6 col-md-12 ">
                    <img src={Logo} alt="" class="page-img" />
                </div>
                <div class="col-xl-5 col-lg-6 col-md-12">
                    <div class="py-5 py-lg-0">
                        <h3 class="page-name display-5 fw-bold">Selling Your EV?
                        </h3>
                        <p class="page-text mb-4 lead">We’ll give you a fair price. Use our online trade-in estimator 
                         to get an idea of what your EV is worth.
                        </p>
                        <a href="#" className="page-links">MORE   INFO</a>
                    </div>
                </div>
            </div>
            </div>
        </div> */}

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
            {/* <div class="col-md-6 col-md-pull-6 col-sm-12 car-image no-padding fly-in-left">
                <img src={Logo} alt="Selling Your EV?" />
            </div> */}
        </div>
    </div>
</section>
    </>
    )
}
export default Currentpage