import React from "react";

import './periodic.css';
import settingPC from './images/settingPC.svg';
import settingPrinter from './images/settingPrinter.svg';
import settingWiFi from './images/settingWiFi.svg';
import settingRouter from './images/settingRouter.svg';
import settingEmail from './images/settingEmail.svg';
import settingPhone from './images/settingPhone.svg';
import settingServer from './images/settingServer.svg';
import settingCloudDB from './images/settingCloudDB.svg';
import moreServices from './images/moreServices.svg';

const PeriodicServices = () => {

    return (
        <div className="periodic-container">
            <div className="text-container wow animate__animated animate__fadeInUp">
                <p className="main-text">Периодические услуги для вашего бизнеса</p>
                <p className="secondary-text">Вы можете заказать услуги наших первоклассных специалистов и 
                получить безупречное решение задач, не прибегая к безлимитному сопровождению</p>
                <button type="button" className="btn btn-primary periodic-button" data-toggle='modal' data-target='#exampleModal' >Оформмить заявку</button>
            </div>
            <section className="services">
                <div className="container" style={{ paddingLeft: '0', marginLeft: '144px' }}>
                    <div className="row no-gutters">
                        <div className="col-xl-7 col-md-6">
                            <div className="service wow animate__animated animate__fadeInUp" style={{ marginRight: '36px' }}>
                                <img src={ settingPC } alt="Настройка компьютера или ноутбука" />
                                <div className="service-text">
                                    <h3 className="service-title">Настройка компьютера или ноутбука</h3>
                                    <p className="service-description">Аккуратно переустановим Windows с сохранением данных или <br/>
                                    заставим технику работать быстрее с помощью <br/>современных решений.</p>
                                    <p className="service-price">От 4000 ₽</p>
                                </div>
                                <button type="button" className="btn btn-primary service-button" data-toggle='modal' data-target='#exampleModal'>Оформить заявку</button>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6">
                            <div className="service wow animate__animated animate__fadeInUp">
                                <div className="service-img">
                                <img src={ settingPrinter } alt="Настройка компьютера или ноутбука" />
                                </div>
                                <div className="service-text">
                                    <h3 className="service-title">Настройка принтера или МФУ</h3>
                                    <p className="service-description">Избавим от зависаний при печати и научим<br/> устройство 
                                    сканировать в электронную почту<br/> или сетевую папку.</p>
                                    <p className="service-price">От 2000 ₽</p>
                                </div>
                                <button type="button" className="btn btn-primary service-button" data-toggle='modal' data-target='#exampleModal'>Оформить заявку</button>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6">
                            <div className="service wow animate__animated animate__fadeInUp" style={{ marginRight: '36px', marginTop: '24px' }}>
                                <img src={ settingWiFi } alt="Настройка компьютера или ноутбука"/>
                                <div className="service-text">
                                    <h3 className="service-title">Настройка Интернета и WiFi</h3>
                                    <p className="service-description">Подключим и настроим оборудование для работы 
                                    Интернета на всех компьютерах и мобильных устройствах в офисе.</p>
                                    <p className="service-price">От 2000 ₽</p>
                                </div>
                                <button type="button" className="btn btn-primary service-button" data-toggle='modal' data-target='#exampleModal'>Оформить заявку</button>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-6">
                            <div className="service wow animate__animated animate__fadeInUp" style={{ marginTop: '24px' }}>
                                <img src={ settingRouter } alt="Настройка компьютера или ноутбука" />
                                <div className="service-text">
                                    <h3 className="service-title">Настройка маршрутизатора</h3>
                                    <p className="service-description">Организуем сложные системы связи - объединение филиалов <br/>
                                    компании, удаленный доступ к офису или <br/> туннелирование трафика.</p>
                                    <p className="service-price">От 6000 ₽</p>
                                </div>
                                <button type="button" className="btn btn-primary service-button" data-toggle='modal' data-target='#exampleModal'>Оформить заявку</button>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-6">
                            <div className="service wow animate__animated animate__fadeInUp" style={{ marginTop: '24px', marginRight: '36px' }}>
                                <img src={ settingPhone } alt="Настройка компьютера или ноутбука"/>
                                <div className="service-text">
                                    <h3 className="service-title">Настройка IP-телефонии</h3>
                                    <p className="service-description">Подберем лучший вариант провайдера IP-телефонии, настроим виртуальную 
                                    АТС (голосовое меню, запись разговоров или виртуальный факс), телефоны <br/> в офисе и 
                                    звонки у мобильных сотрудников.</p>
                                    <p className="service-price">От 2000 ₽</p>
                                </div>
                                <button type="button" className="btn btn-primary service-button" data-toggle='modal' data-target='#exampleModal'>Оформить заявку</button>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6">
                            <div className="service wow animate__animated animate__fadeInUp" style={{ marginTop: '24px' }}>
                                <img src={ settingEmail } alt="Настройка компьютера или ноутбука"/>
                                <div className="service-text">
                                    <h3 className="service-title">Настройка корпоративной электронной почты</h3>
                                    <p className="service-description">Поможем с выбором красивого доменного имя, подключим облачную электронную 
                                    почту для организаций и<br/> настроим на рабочих местах.</p>
                                    <p className="service-price">От 5000 ₽</p>
                                </div>
                                <button type="button" className="btn btn-primary service-button" data-toggle='modal' data-target='#exampleModal'>Оформить заявку</button>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6">
                            <div className="service wow animate__animated animate__fadeInUp" style={{ marginTop: '24px', marginRight: '36px' }}>
                                <img src={ settingServer } alt="Настройка компьютера или ноутбука" />
                                <div className="service-text">
                                    <h3 className="service-title">Настройка серверов</h3>
                                    <p className="service-description">Поможем с подбором решения, поставим <br/> оборудование и 
                                    настроим сервисы. В<br/> нужный  бюджет и нужные сроки.</p>
                                    <p className="service-price">От 30 000 ₽</p>
                                </div>
                                <button type="button" className="btn btn-primary service-button" data-toggle='modal' data-target='#exampleModal'>Оформить заявку</button>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-6">
                            <div className="service wow animate__animated animate__fadeInUp" style={{ marginTop: '24px'}}>
                                <img src={ settingCloudDB } alt="Настройка компьютера или ноутбука" />
                                <div className="service-text">
                                    <h3 className="service-title">Настройка корпоративного облачного хранилища файлов</h3>
                                    <p className="service-description">Подберем сервис хранения файлов в облаке под ваши задачи <br/> и 
                                    настроим нужный доступ на <br/> нужных устройствах.</p>
                                    <p className="service-price">От 5000 ₽</p>
                                </div>
                                <button type="button" className="btn btn-primary service-button" data-toggle='modal' data-target='#exampleModal'>Оформить заявку</button>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-6">
                            <div className="service wow animate__animated animate__fadeInLefttBig" style={{ marginTop: '24px', marginRight: '36px' }}>
                                <img src={ moreServices } alt="Настройка компьютера или ноутбука" style={{ marginRight: '24px' }}/>
                                <div className="service-text">
                                    <h3 className="service-title" style={{ fontSize: '22px', marginBottom: '24px' }}>Если в текущем списке вы не нашли<br/> необходимой услуги, пожалуйста, <br/>
                                    заполните форму запроса.</h3>
                                </div>
                                <button type="button" className="btn btn-primary service-button" data-toggle='modal' data-target='#exampleModal'>Заполнить форму</button>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6">
                            <div className="service wow animate__animated animate__fadeInUp" style={{ marginTop: '24px' }}>
                                <div className="service-text">
                                    <h3 className="service-title">Или воспользуйтесь всеми услугами в комплексе</h3>
                                    <p className="service-description">Посмотрите на преимущества безлимитного 
                                    сопровождения с бесплатным пробным периодом.</p>
                                </div>
                                <button type="button" className="btn btn-primary service-button" data-toggle='modal' data-target='#exampleModal'>Узнать больше</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PeriodicServices;
