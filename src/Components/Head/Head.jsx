import '../Head/Head.css'
import Batterycar from '../../assets/img/battery-car.jpg'

const Head =() =>{
    return(
        <>
         <div className="head">
           <div className="container">
                <h4 className="head-name">
                    Other Vehicles You May Lik
                </h4>
               <div className='head-page'>
               <img src={Batterycar} alt="" className="head-img" />
                 <p className="head-names">Pre-Owned 2017 FIAT 500e Battery <br /> Electric  84 mile range</p>
               </div>
               <h5 className='head-full'>Disclaimer:</h5>
               <p className='head-text'>Tax, Title and Tags not included in vehicle prices shown and must be paid by the purchaser. While great effort is made to ensure the accuracy of the information on this site, errors do occur so please verify information with a customer service rep. This is easily done by calling us at (855) 438-3838 or by visiting us at the store.</p>

               <p className='head-texts'>**With approved credit. Terms may vary. Monthly payments are only estimates derived from the vehicle price with a 72 month term, 5.9% interest and 20% downpayment.</p>
               <p className='head-texts'>
               *Number of views in last 30 days
               </p>
               <p className='head-texts'>† Based on 2014 EPA mileage ratings. Use for comparison purposes only. Your actual mileage will vary depending on how you drive and maintain your vehicle.</p>
               <h4 className="head-surname">Why Current Automotive</h4>
               <p className="head-texs">At Current Automotive, we are electric vehicle experts and we know the future of transportation is electric. Our team has been helping drive the transition to e-mobility for the last 10 years, and it remains our mission to be champions who help people make the switch to sustainable transportation. We pride ourselves on providing a fun, educational and no-pressure experience.</p>
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

export default Head;