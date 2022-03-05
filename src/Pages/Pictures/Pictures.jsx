import Block from '../../Components/Block/Block'
import SwiperBox from '../../Components/SwiperBox/SwiperBox'
import Footer from '../../Components/Footer/Footer';
import Accordion from '../../Components/Accordion/Accordion';


import "swiper/css/bundle";
import Head from '../../Components/Head/Head';
import Select from '../../Components/Select/Select';


const Pictures =() =>{
    return(
        <>
        <Block />
        <SwiperBox />
        <Select />
        <Head />
        {/* <Accordion /> */}
        <Footer />
        </>
    )
}

export default  Pictures;