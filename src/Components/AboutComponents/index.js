import React from 'react';

import './about.css'

import briefcase from './images/briefcase.svg';

const About = () => {
    // setFlag();

    return (
        <>
            <div className="about-top"></div>
            <div className="about-description wow animate__animated animate__fadeInUp">
                <div className="container">
                    <h2 className="about-title">
                        <h5>О компании</h5>
                        <h3>Информация о нашей компании</h3>
                    </h2>
                    <h6 className="about-text">
                    Компания IT TO BE основана в 2013 году. Со дня основания мы понимаем, что сейчас, когда 
                    граница между бизнесом и ИТ уже стерта, нашим клиентам приходится уделять огромное внимание 
                    технологиям. Для современного бизнеса недостаточно «просто решить задачу», «просто 
                    автоматизировать процесс» или «просто поставить оборудование». Поэтому каждый день нашего 
                    существования мы стремимся усилить положительные и нивелировать отрицательные стороны ИТ-аутсорсинга 
                    для наших клиентов.
                    </h6>
                </div>
            </div>
            <div className="about-features wow animate__animated animate__fadeInRight">
                <div className="container">
                    <div className="principals item">
                        <h3>Принципы:</h3>
                        <ul className="features-list">
                            <li>Честность перед собой и перед клиентом</li>
                            <li>Реальное понимание клиента и его проблем</li>
                            <li>Не допускать критической ситуации для клиента</li>
                        </ul>
                    </div>
                    <div className="goals item">
                        <h3>Цели:</h3>
                        <ul className="features-list">
                            <li>Создание эффекта присутствия штатного сотрудника</li>
                            <li>Использование стратегии win - win в сотрудничестве</li>
                            <li>Обеспечение контроля в областях, поддающихся контролю</li>
                        </ul>
                    </div>
                    <div className="principals item">
                        <h3>Неприятие:</h3>
                        <ul className="features-list">
                            <li>Оставлять клиента в непонятной ситуации</li>
                            <li>Перекладывать ответственность на обстоятельства</li>
                            <li>Использовать решения в ИТ не так, как предполагал вендор</li>
                        </ul>
                    </div>
                    <img alt="Here must be briefcase logo" src={ briefcase } className="features-img wow animate__animated animate__fadeInRight"/>
                </div>
            </div>
            <div className="contacts-container">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="contacts">
                                <h2 className="contacts-title">Наши контакты</h2>
                                <div className="contact">
                                    <p className="contact-title">Телефон</p>
                                    <a href="tel:+79137907997" className="contact-link">+7 (913) 790-79-97</a>
                                </div>
                                <div className="contact">
                                    <p className="contact-title">Электронная почта</p>
                                    <a href="mailto:gpsnsk.lab@ya.ru" className="contact-link">gpsnsk.lab@ya.ru</a>
                                </div>
                                <div className="contact">
                                    <p className="contact-title">Наименование</p>
                                    <p className="contacts-text">ООО "СпецТорг"</p>
                                </div>
                                <div className="contact">
                                    <p className="contact-title">ИНН</p>
                                    <p className="contacts-text">5403046222</p>
                                </div>
                                <div className="contact">
                                    <p className="contact-title">КПП</p>
                                    <p className="contacts-text">540301001</p>
                                </div>
                                <div className="contact">
                                    <p className="contact-title">ОГРН</p>
                                    <p className="contacts-text">1185476100215</p>
                                </div>
                                <div className="contact">
                                    <p className="contact-title">Адрес</p>
                                    <p className="contacts-text">118547630087, г. Новосибирск, ул. Немировича-Данченко, д. 122, оф. 4046100215</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="map">
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A72ba3cc8c0210074cded3266626c63c5a9e925578b3af11a64aa4419868a9144&amp;source=constructor" width="895" height="720" frameborder="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default About;
