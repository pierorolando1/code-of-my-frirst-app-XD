import React from 'react';

class Trabajos extends React.Component{
    render(){
        return (
            <section className="work">
                <div className="heading">
                    <h2>Mis Proyectos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="content">
                    <div className="workBx">
                        <div className="imgcontent">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Baby.tux.sit-black-800x800.png" alt="Chambita"/>
                        </div>
                    </div>
                    <div className="workBx">
                        <div className="imgcontent">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Baby.tux.sit-black-800x800.png" alt="Chambita"/>
                        </div>
                    </div>
                    <div className="workBx">
                        <div className="imgcontent">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Baby.tux.sit-black-800x800.png" alt="Chambita"/>
                        </div>
                    </div>
                    <div className="workBx">
                        <div className="imgcontent">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Baby.tux.sit-black-800x800.png" alt="Chambita"/>
                        </div>
                    </div>
                </div>
                <div className="heading">
                    <a className="btn" href="https://github.com/pierorolando1" rel="noopener noreferrer">Ver Más</a>
                </div>
            </section>
        )
    }
}
export default Trabajos;