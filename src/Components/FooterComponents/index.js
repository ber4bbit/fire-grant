import React from "react";
import { NavLink } from "react-router-dom";
import WOW from 'wowjs';

import HeaderModal from '../Modals/HeaderModal';
import PeriodicModal from "../Modals/PeriodicModal";

import './footer.css';
import companyLogo from '../HeaderComponents/companyLogo.png';
import NoteBookModal from "../Modals/NoteBookModal";
import PrinterModal from "../Modals/PrinterModal";
import EthernetModal from "../Modals/EthernetModal";
import RouterModal from "../Modals/RouterModal";
import PhoneModal from "../Modals/PhoneModal";
import EmailModal from "../Modals/EmailModal";

class Footer extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();        
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
            {/* Модальные окна */}
            <HeaderModal/>
            <PeriodicModal/>
            <NoteBookModal/>
            <PrinterModal/>
            <EthernetModal/>
            <RouterModal/>
            <PhoneModal/>
            <EmailModal/>
        </div>
        );
    }
}

export default Footer;
