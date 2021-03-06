import React from 'react';
import './Header.css'

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            menuStatus: 'drop-down-menu'
        }
    }

    handleClick = () => {
        if(this.state.menuStatus === 'drop-down-menu-closed'){
            this.setState({menuStatus: 'drop-down-menu-open'})
        }else{
            this.setState({menuStatus: 'drop-down-menu-closed'})
        }
    }

    render(){
        return(
            <div>
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
                </head>
                <body>
                    <header>
                        <h2 id='start-bootstrap'>Start BootStrap</h2>
                        <ul id='site-nav'>
                            <li className='menu-text'>Service</li>
                            <li className='menu-text'>Portfolio</li>
                            <li className='menu-text'>About</li>
                            <li className='menu-text'>Team</li>
                            <li className='menu-text'>Contact</li>
                            <li>
                                <img
                                    onClick={this.handleClick}
                                    src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                                    alt='Menu icon'
                                />
                            </li>
                            <ul className={this.state.menuStatus}>
                                <li>Service</li>
                                <li>Portfolio</li>
                                <li>About</li>
                                <li>Team</li>
                                <li>Contact</li>
                            </ul>
                        </ul>
                    </header>
                    <section id='welcome-section'>
                        <p id='welcome-studio'>Welcome To Our Studio!</p>
                        <p id='nice-to-meet-you'>IT'S NICE TO MEET YOU!</p>
                        <div id='tell-me-more'>TELL ME MORE</div>
                    </section>
                    <section id='services-section'>
                        <p id='services-message'>Services</p>
                        <p id='lorem-message'>Lorem ipsum yadda yadda yadda</p>
                    </section>
                </body>
            </div>
        )
    }
}
