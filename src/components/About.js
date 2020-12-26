import React from 'react';

class About extends React.Component{
    render(){
        return (
    <>
    <section className="about">
        <div className="heading">
            <h2>Acerca Mio</h2>
        </div>
        <div className="content">
            <div className="contentBx w50">
                <h3>Soy un Full Stack Developer.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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