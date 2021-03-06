import '../Section/Section.css'
import React  from 'react'
import Mouse from '../../assets/img/mouse.png'

const Section = () =>{
    return (
        <>
        <div className="section p-5">
            <div className="container">
            <div className="section_box col-md-12 my-5 py-5">
                    <h1 className="section-name m-b-20 mt-5 pt-5"><strong>Why switch to electric?</strong></h1>
                    <p className="section-texts m-b-40">When you switch to an electric vehicle your total cost of ownership <br /> goes down considerably..</p>
                </div>
                <div className="section-page py-5 row row-cols-1 row-cols-md-3 g-4">
                    <div  className="section-box col">
                       <ul className='section-list'>
                           <li className='section-item'>Save</li>
                           <li className='section-number'>$50</li>
                           <li className='section-item'>A MONTH*</li>
                       </ul>
                       <p className="section-text "> In Fuel Cost</p>
                    </div>
                    <div   className="col">
                        <img src={Mouse} alt="" className="section-img" />
                    </div>
                    <div   className="section-box col">
                       <ul className='section-list'>
                           <li className='section-item'>Save</li>
                           <li className='section-number'>$400</li>
                           <li className='section-item'>A YEAR*</li>
                       </ul>
                       <p className="section-text">  In Maintenance</p>
                    </div>
                </div>
                <div className="section-boxs">
                    <button className="section-btn">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section