import React from 'react';

class Contact extends React.Component{
render(){
    return (
    <section className="contact">
        <div className="heading">
            <h2>Contactame</h2>
        </div>
        <div className="content">
            <div className="contactInfo">
                <h3>Contact Info</h3>
                <div className="contactInfoBx">
                    <div className="box">
                        <div className="text">
                            <p>rolandopiero63@gmail.com, <br/>Trujillo, Perú<br/>+51962791928</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="text">
                        </div>
                    </div>
                </div>
            </div>
            <div className="formBx">
                <ul>
                    <a href="#perico" rel="noopener noreferrer"><li><i class="fa fa-whatsapp" aria-hidden="true"></i></li></a>
                    <a href="#perico" rel="noopener noreferrer"><li><i class="fa fa-telegram" aria-hidden="true"></i></li></a>
                    <a href="#perico" rel="noopener noreferrer"><li><i class="fa fa-youtube-play" aria-hidden="true"></i></li></a>
                    <a href="#perico" rel="noopener noreferrer"><li><i class="fa fa-twitter" aria-hidden="true"></i></li></a>
                    <a href="#perico" rel="noopener noreferrer"><li><i class="fa fa-facebook-official" aria-hidden="true"></i></li></a>
                </ul>
            </div>
        </div>

    </section>
)}}

export default Contact
