import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <header id ="header">
                <a href="https://github.com/pierorolando1" className="logo" target="blank">Portafolio</a>
                <div className="toogle"></div>
                <ul>
                    <div>
                    <label  class="switch">
                        <input type="checkbox"  id="slider" />
                        <span class="slider round" id="switch"></span>            
                    </label>
                    </div>
                    <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Inicio</a></li>
                    <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Acerca mio</a></li>
                    <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Servicios</a></li>
                    <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Trabajos</a></li>
                    <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Equipo</a></li>
                </ul>
            </header>
        );
    }
}
export default Header;