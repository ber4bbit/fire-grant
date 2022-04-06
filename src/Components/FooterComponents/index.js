import React from "react";
import { NavLink } from "react-router-dom";
import WOW from 'wowjs';

import './footer.css';
import companyLogo from '../HeaderComponents/companyLogo.png';

class Footer extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();


        
            // document.querySelector('.header-container').classList.add('header-transparent');
            // document.querySelector('.customButton').classList.add('button-transparent');
            // document.querySelectorAll('.styledLink').forEach(element => {
            //     element.classList.add('styledLink-transparent');
            // });
            // window.addEventListener('scroll', () => {
            //     if (this.props.flag) {
            //     let scrollDistance = window.scrollY;
            //     let headerContainer = document.querySelector('.header-container');
            //     let links = document.querySelectorAll('.styledLink');
            //     let button = document.querySelector('.customButton');
    
    
            //     if (scrollDistance >= 100) {
            //         headerContainer.classList.remove('header-transparent');
            //         button.classList.remove('button-transparent');
            //         links.forEach(element => {
            //             element.classList.remove('styledLink-transparent');
            //         })
            //     }
            //     else {
            //         headerContainer.classList.add('header-transparent');
            //         button.classList.add('button-transparent');
            //         links.forEach(element => {
            //             element.classList.add('styledLink-transparent');
            //         })
            //     }
            // } else {

            //     document.querySelector('.header-container').classList.remove('header-transparent');
            //     document.querySelector('.customButton').classList.remove('button-transparent');
            //     document.querySelectorAll('.styledLink').forEach(element => {
            //         element.classList.remove('styledLink-transparent');
            //     });
            // }
            // })
        
    };

    render() {
    return (
        <div className="footer-container">
            <div className="footer-modal">
                <div>
                    <h1>Мы возьмем на себя все ваши заботы</h1>
                    <p>Попробуйте бесплатно 30 дней абсолютно безлимитного аутсорсинга и оцените <br/> уровень наших услуг</p>
                </div>
                <button type="button" class="btn btn-light" data-toggle='modal' data-target='#exampleModal'>Попробовать бесплатно</button>
            </div>
            <div className="footer">
                <div className="container" style={{marginLeft: '144px', paddingLeft: '0'}}>
                    <div className="row">
                        <div className="col-lg-5">
                            <img src={ companyLogo } alt="Here must be logo" style={{width: '76px', height: '120px'}}></img>
                            <p className="contact-text">Создание сайта - <a href="https://vk.com/ber4bbit" className="footerLink">https://vk.com/ber4bbit</a> или Whats`App/Telegram - +79994651942</p>
                        </div>
                        <div className="col-lg-7" style={{marginTop: '46px'}}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <p className="footer-title">О компании</p>
                                    <ul className="footer-submenu">
                                        <li><NavLink to='/about' className='footerLink'>О компании</NavLink></li>
                                        <li><NavLink to='/contacts' className='footerLink'>Наши контакты</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <p className="footer-title">Клиентам</p>
                                    <ul className="footer-submenu">
                                        <li><NavLink to='/userAgreement' className='footerLink'>Пользовательское соглашение</NavLink></li>
                                        <li><NavLink to='/privacy' className='footerLink'>Политика конфиденциальности</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Footer;
