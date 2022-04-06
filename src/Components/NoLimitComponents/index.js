import { React, useState } from "react";
import { CSSTransition } from "react-transition-group";

import expArrow from '../FooterComponents/expArrow.png';

import 'animate.css'
import './noLimit.css'

const NoLimit = () => {
    
    const [showFirst, setShowFirst] = useState(false);
    const [showSec, setShowSec] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [showFourth, setShowFourth] = useState(false);
    const [showFifth, setShowFifth] = useState(false);

    return (
        <>
            <div className="about-container">
                <div className="text-container wow animate__animated animate__fadeInUp">
                    <p className="main-text">Лучшее решение для вашего бизнеса</p>
                    <p className="secondary-text">Качественно новый уровень ИТ-аутсорсинга, обеспечивающий комплексную 
                    поддержку бизнеса, создавая эффект присутствия штатного сотрудника</p>
                    <div className="modal-container">
                        <button type="button" className="btn btn-primary customButton" data-toggle='modal' data-target='#exampleModal'>Попробовать бесплатно</button>
                        <p>Бесплатный пробный период 30 дней</p>
                    </div>
                </div>
            </div>
            <div className="footer-faq">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '24px' }}>
                        <div className="small title">
                            Ответим на все вопросы
                        </div>
                        <div className="subTitle">
                        Часто Задаваемые Вопросы (FAQ)
                        </div>
                    </h2>
                    <div className="question wow animate__animated animate__fadeInUp">
                        <div className="question-title">
                            <img src={expArrow} alt="Here must be expand arrow" style={{ width: '25px', height: '25px' }} onClick={ () => setShowFirst(!showFirst) }/>
                            <p onClick={ () => setShowFirst(!showFirst) }>Что такое ИТ-аутсорсинг?</p>
                        </div>
                        <CSSTransition in={showFirst} timeout={300} classNames='alert' unmountOnExit>
                            <div className="question-body">
                                <p>
                                ИТ-аутсорсинг (англ. IT outsourcing) — передача работ по поддержке, обслуживанию и модернизации ИТ-инфраструктуры в 
                                руки компании, для которой выполнение подобных работ — профильное направление деятельности.
                                </p>
                            </div>
                        </CSSTransition>
                    </div>
                    <div className="question wow animate__animated animate__fadeInUp">
                        <div className="question-title">
                            <img src={expArrow} alt="Here must be expand arrow" style={{ width: '25px', height: '25px' }} onClick={ () => setShowSec(!showSec) }/>
                            <p onClick={ () => setShowSec(!showSec) }>Что входит в договор?</p>
                        </div>
                        <CSSTransition in={showSec} timeout={300} classNames='alert' unmountOnExit>
                            <div className="question-body">
                                <p>
                                Мы выполняем все функции системного администратора, располагая возможностью удовлетворить дополнительные потребности вашей 
                                компании в гарантийном и постгарантийном ремонте техники, поставке новой и подержанной техники, созданию 
                                проводных и беспроводных сетей, систем видеонаблюдения и систем контроля доступа и размещению серверов.
                                </p>
                            </div>
                        </CSSTransition>
                    </div>
                    <div className="question wow animate__animated animate__fadeInUp">
                        <div className="question-title">
                            <img src={expArrow} alt="Here must be expand arrow" style={{ width: '25px', height: '25px' }} onClick={ () => setShowThird(!showThird) }/>
                            <p onClick={ () => setShowThird(!showThird) }>Какие ограничения по договору?</p>
                        </div>
                        <CSSTransition in={showThird} timeout={300} classNames='alert' unmountOnExit>
                            <div className="question-body">
                                <p>
                                В нашем формате предоставления услуги при заключении договора вы получаете аналог штатного сотрудника - 
                                безлимитное взаимодействие по всем вопросам в оптимальные временные рамки.
                                </p>
                            </div>
                        </CSSTransition>
                    </div>
                    <div className="question wow animate__animated animate__fadeInUp">
                        <div className="question-title">
                            <img src={expArrow} alt="Here must be expand arrow" style={{ width: '25px', height: '25px' }} onClick={ () => setShowFourth(!showFourth) }/>
                            <p onClick={ () => setShowFourth(!showFourth) }>Как меняется стоимость договора?</p>
                        </div>
                        <CSSTransition in={showFourth} timeout={300} classNames='alert' unmountOnExit>
                            <div className="question-body">
                                <p>
                                Стоимость договора напрямую зависит от количества техники. Расчёт стоимости можно сделать 
                                самостоятельно, используя тарифы на главной странице.
                                </p>
                            </div>
                        </CSSTransition>
                    </div>
                    <div className="question wow animate__animated animate__fadeInUp">
                        <div className="question-title">
                            <img src={expArrow} alt="Here must be expand arrow" style={{ width: '25px', height: '25px' }} onClick={ () => setShowFifth(!showFifth) }/>
                            <p onClick={ () => setShowFifth(!showFifth) }>Что такое пробный период?</p>
                        </div>
                        <CSSTransition in={showFifth} timeout={300} classNames='alert' unmountOnExit>
                            <div className="question-body">
                                <p>
                                Если вы сомневаетесь в том, подходит ли вам такой формат взаимодействия - мы предоставляем 
                                вам возможность не оплачивать первый месяц оказания услуг по договору, если вы вдруг передумаете.
                                </p>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </>
    );
}


export default NoLimit;
