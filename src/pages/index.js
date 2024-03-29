import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import team from '../assets/images/codebase_development_team.png'
import pic02 from '../assets/images/prototype_icon.png'
import pic03 from '../assets/images/build_icon.png'
import pic04 from '../assets/images/launch_icon.png'

import andriodIcon from '../assets/images/flutter_andriod.png'
import iosIcon from '../assets/images/flutter_ios.png'
import webIcon from '../assets/images/flutter_web.png'
import windowsIcon from '../assets/images/flutter_windows.png'
import macIcon from '../assets/images/flutter_macos.png'
import embedIcon from '../assets/images/flutter_embedded.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Codebase - Flutter Cross-Development Studio";

        return (
            <Layout>
                <Helmet 
                    title={siteTitle} 
                
                
                
                />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>We bring your great ideas to life.</h2>
                            </header>
                            <p>Our team is creative, skilled, and building with the latest cross-platform technology that can bring your project to life on all major platforms.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={team} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                    <div className="col-6">
                            <ul className="major-icons">
                                <li><span ><img src={andriodIcon} alt="Mac OS"/></span></li>
                                <li><span ><img src={iosIcon} alt="Mac OS"/></span></li>
                                <li><span ><img src={webIcon} alt="Mac OS"/></span></li>
                                <li><span ><img src={windowsIcon} alt="Mac OS"/></span></li>
                                <li><span ><img src={macIcon} alt="Mac OS"/></span></li>
                                <li><span ><img src={embedIcon} alt="Mac OS"/></span></li>
                            </ul>
                        </div>
                    <div className="col-6">
                            <header className="major">
                                <h2>You can target all major platforms</h2>
                            </header>
                            <p>Developing in Flutter, Google's cross-platform UI toolkit, creates native apps for iOS, Android and now able to reach the desktop, web and even bedded devices, all from a single codebase. All at a silky smooth 60fps, which means your customers will have a great user experience.</p>
                        </div>
                        

                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>We take care of every aspect of your project</h2>
                            </header>
                            <p>Let us help you get from concept to completion</p>
                        </div>

                        <div className="col-4">
                            <span className="image icon"><img src={pic02} alt="" /></span>
                            <h3>Wireframe & Prototype</h3>
                            <p>Our in-house Designer will help you take your idea and design a graphical wireframe and prototype that will allow user experience testing without investing a lot of time and resources.</p>

                        </div>
                        <div className="col-4">
                            <span className="image icon"><img src={pic03} alt="" /></span>
                            <h3>Coding sprints</h3>
                            <p>Your graphical prototype will be used to as a blueprint, allowing our team to build fully-functional product, looking and feeling exactly right.</p>
     
                        </div>
                        <div className="col-4">
                            <span className="image icon"><img src={pic04} alt="" /></span>
                            <h3>Test & Launch</h3>
                            <p>We will meticulously test your project's code as well as its functionality on various devices to ensure your product provides a great user experience.</p>

                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special" >
                    <div className="container">
                        <header className="major">
                            <h2>Interesting in talking more about your project?</h2>
                        </header>
                        <p>Contact us to recieve a free quote and timeline for your project</p>

                        <div className="largeform">
                        <form 
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            
                            >
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />
                        <div className="field half first">
                        <label htmlFor="message"></label>
                            <input type="text" name="name" id="name" placeholder="Name"/>
                        </div>
                        <div className="field half">
                        <label htmlFor="message"></label>
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </div>
                        <div className="field small">
                            <label htmlFor="message"></label>
                            <textarea name="message" id="message" rows="6" placeholder="Comments"/>
                        </div>
                        <ul className="actions">
                            <li>
                            <input type="submit" value="Send Message" className="special" />
                            </li>
                            <li> <input type="reset" value="Clear" /></li>
                        </ul>
                        </form>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;