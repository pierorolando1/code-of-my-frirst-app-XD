import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <header id ="header">
                <a href="https://github.com/pierorolando1" className="logo" target="blank">Portafolio</a>
                <div className="toogle"></div>
                <div>
                        <label  class="switch" id="yanosequeponer">
                            <input type="checkbox"  id="slider" />
                            <span class="slider round" id="switch"></span>            
                        </label>
                    </div>
                <ul>
                    <li><a href="#perico" rel="noopener noreferrer">Inicio</a></li>
                    <li><a href="https://reactjs.org" rel="noopener noreferrer">Acerca de mi</a></li>
                    <li><a href="https://reactjs.org" rel="noopener noreferrer">Servicios</a></li>
                    <li><a href="https://reactjs.org" rel="noopener noreferrer">Trabajos</a></li>
                    <li><a href="https://reactjs.org" rel="noopener noreferrer">Equipo</a></li>
                </ul>
            </header>
        );
    }
}
export default Header;