import React from 'react';
import ParteUno from './ParteUno'
import Header from './Header'
import About from './About'
import Services from './Services'
import Trabajos from './Trabajos'
import Testimonial from './Testimonial'

class Inicio extends React.Component{
    render(){
        return (
        <>
            <Header/>
            <ParteUno/>
            <About />
            <Services/>
            <Trabajos/>
            <Testimonial/>
        </>
        );
    }
}
export default Inicio;