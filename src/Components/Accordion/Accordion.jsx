import React from "react"
import './Accordion.css'
import PlusIcon from '../../assets/img/down.png'
 
const Accordion = (props) => {

    const [selected, setSelected] = React.useState(null);

    function toggler(i){
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }

    return(
        <ul className={`faq_list  ${props.className ? props.className : ""}`}>
            {props.faqs.map( (element, i) => {

                return(
                    <li key={i} className="faq_list__item" onClick={() => toggler(i)}>
                        <div className="text_wrap faq_list__item__question_wrapper">
                            <h4 className="faq_header">
                                {element.question}
                            </h4>
                            <span className={`icon ${selected === i ? 'closer' : 'opener'}`}><img className="accordion-pic" src={PlusIcon} alt="" /></span>
                        </div>
                        <div className={`text_wrap ${selected === i ? 'faq_list__item__answer_wrapper show' : 'faq_list__item__answer_wrapper'}`}>
                            <p className="faq_text">
                                {element.answer}
                            </p>
                        </div>
                    </li>
                )
            }) 
            }
        </ul>
    )
}

export default Accordion