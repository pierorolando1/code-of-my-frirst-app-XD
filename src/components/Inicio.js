import React from 'react';
import ParteUno from './ParteUno'
import Header from './Header'
import About from './About'
import Services from './Services'

class Inicio extends React.Component{
    render(){
        return (
        <>
            <Header/>
            <ParteUno/>
            <About/>
            <Services/>
        </>
        );
    }
}
export default Inicio;