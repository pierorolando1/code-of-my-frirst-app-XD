import React from 'react';

class About extends React.Component{
    render(){
        return (
    <>
    <section className="about" id="perico">
        <div className="heading">
            <h2 id="mariconsito">Acerca Mio</h2>
        </div>
        <div className="content">
            <div className="contentBx w50">
                <h3>Soy un Full Stack Developer.</h3>
                <p>Hola amigo o amiga, como va tu dia, soy un Desarrollador Full Stack con 14 años, soy un apasionado de la tecnologia desde muy pequeño, aprendi a programar a los 13 y me actualizo de novedades y nunca paro de aprender.
                    <br/>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </p>
            </div>
            <div className="w50">
                <img src="https://dummyimage.com/600x400/000/fff" alt="hola"/>
            </div>
        </div>
    </section>
    </>
    )}
}

export default About;