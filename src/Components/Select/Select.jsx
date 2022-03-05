import '../Select/Select.css'

const Select =() =>{
    return(
        <>
        <div className="select">
          <div className="container">
              <h4 className='select-name'>Basic Info</h4>
             <div className="select-page">
                 <ul className="select-list">
                   <li className="select-item">
                     <p className="select-names">Body: <b>4D Hatchback</b></p>   
                    </li>
                    <li className="select-item">
                     <p className="select-names">Mileage:  <b>39,621</b></p>   
                    </li>
                    <li className="select-item">
                     <p className="select-names">HWY: <b>109 MPG †</b></p>   
                    </li>
                    <li className="select-item">
                     <p className="select-names">City: <b>128 MPG †</b></p>   
                    </li>
                  </ul>
                  <ul className="select-list">
                   <li className="select-item">
                     <p className="select-names">Exterior: <b>Titanium Metallic</b></p>   
                    </li>
                    <li className="select-item">
                     <p className="select-names">Interior: <b>Dark Pewter W/Electric Blue Trim</b></p>   
                    </li>
                    <li className="select-item">
                     <p className="select-names">Engine: <b>Electric Drive Unit</b></p>   
                    </li>
                    <li className="select-item">
                     <p className="select-names">Trans: <b>1-Speed Automatic</b></p>   
                    </li>
                  </ul>
              </div>    
          </div>    
        </div>

        <div className="option">
          <div className="container">
              <h5 className="option-name">Estimate your monthly savings*</h5>
               <div className="option-page">
                  <div className="option-select">
                    <input type="number"  className='option-input' /> 
                    <p className='option-names'>Miles Driven Daily</p>   
                  </div>
                  <div className="option-number">
                      <ul className='option-list'>
                           <li className='option-item'>You Save</li>
                           <li className='option-numbers'>$0.00</li>
                           <li className='option-item'>PER MONTH*</li>
                       </ul>  
                  </div>
                  <div className="option-select">
                    <input type="number"  className='option-input' />
                    <p className='option-names'>Miles Driven Daily</p>    
                  </div>
                </div>   
          </div>    
        </div>
        </>
    )
}

export default Select