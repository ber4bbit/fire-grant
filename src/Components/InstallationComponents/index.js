import React from 'react';

import carAdv from './images/carAdv.svg';
import certifiedAdv from './images/certifiedAdv.svg';
import documentAdv from './images/documentAdv.svg';
import installAdv from './images/installAdv.svg';
import resourcesAdv from './images/resourcesAdv.svg';
import roubleAdv from './images/roubleADv.svg';
import installationText from './images/installationText.svg';
import competenciesLogo from './images/competenciesLogo.jpg';
import electricalCircuit from './images/electricalCircuit.svg';
import fiberCable from './images/fiberCable.svg';
import systemControl from './images/systemControl.svg';
import cctv from './images/cctv.svg';

import './installation.css'

const Installation = () => {

    return (
        <>
        <div className="about-container">
            <div className="text-container wow animate__animated animate__fadeInUp">
                    <p className="main-text">Проектирование и монтаж сетей</p>
                    <p className="secondary-text">Проверенные временем решения по монтажу кабельных
                     сетей, реализованные профессионалами с использованием актуальных технологий</p>
                    <div className="modal-container">
                        <button type="button" className="btn btn-primary customButton" data-toggle='modal' data-target='#exampleModal'>Оформить заявку</button>
                        <p>Бесплатный выезд для проведения изысканий</p>
                    </div>
                </div>
        </div>
        <div className="installation-advantages">
            <div className="container  wow animate__animated animate__fadeInUp">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="advantage-img">
                            <img alt="Here must be installation icon" src={ installAdv } style={{ width: '32px' }}/>
                        </div>
                        <p className="advantage-text">Монтаж большинства существующих<br/> кабельных сетей</p>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="advantage-img">
                            <img alt="Here must be installation icon" src={ carAdv } style={{ width: '32px' }}/>
                        </div>
                        <p className="advantage-text">Бесплатный выезд на объект для <br/>проведения изысканий</p>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="advantage-img">
                            <img alt="Here must be installation icon" src={ certifiedAdv } style={{ width: '32px' }}/>
                        </div>
                        <p className="advantage-text">Уверенная гарантия на все выполненные<br/> работы до нескольких лет</p>
                    </div>
                    <div className="col-lg-4 col-sm-6" style={{ marginTop: '18px' }}>
                        <div className="advantage-img">
                            <img alt="Here must be installation icon" src={ resourcesAdv } style={{ width: '32px' }}/>
                        </div>
                        <p className="advantage-text">Поставка материалов и оборудования в<br/> рамках любого проекта</p>
                    </div>
                    <div className="col-lg-4 col-sm-6" style={{ marginTop: '18px' }}>
                        <div className="advantage-img">
                            <img alt="Here must be installation icon" src={ documentAdv } style={{ width: '32px' }}/>
                        </div>
                        <p className="advantage-text">Изготовление рабочей документации по<br/> проекту (опционально)</p>
                    </div>
                    <div className="col-lg-4 col-sm-6" style={{ marginTop: '18px' }}>
                        <div className="advantage-img">
                            <img alt="Here must be installation icon" src={ roubleAdv } style={{ width: '32px' }}/>
                        </div>
                        <p className="advantage-text">Идем навстречу в организационных и <br/>финансовых вопросах</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="installation-text">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <img src={ installationText } alt="Here must be installation icon" style={{ opacity: '0.5' }}/>
                    </div>
                    <div className="col-xl-8">
                        Монтаж СКС (монтаж ЛВС или монтаж ВОЛС) имеет ряд особенностей, от соблюдения которых напрямую 
                        зависит стабильная работа всего предприятия.
                        <br/>
                        <br/>
                        При монтаже СКС в строящемся здании или на улице необходимо предусмотреть множество факторов, 
                        таких как масштабируемость кабельной сети, сохранность коммуникаций от внешних воздействий и 
                        безопасный доступ к ним.
                        <br/>
                        <br/>
                        Если же монтаж СКС осуществляется в готовых помещения с завершенной отделкой, следует организовать 
                        безопасный монтаж кабелей, не повредив эстетически и физически состояние помещений, что удается 
                        далеко не всем исполнителям.
                        <br/>
                        <br/>
                        Доверить монтаж СКС можно только квалифицированным и опытным специалистам. В противном случае, вместо 
                        реализации необходимых задач, окупающей затраты на проектирование и установку, предприятие ожидают 
                        дополнительные расходы на ремонт сложной системы и отделочные работы.
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
        <div className="competencies-container">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <h2 className="competencies-title">Наши компетенции</h2>
                        <img alt="Here must be competencies logo" src={ competenciesLogo } style={{ width: '500px', marginLeft: '-50px' }}/>
                    </div>
                    <div className="col-xl-6 wow animate__animated animate__fadeInRight">
                        <div className="row">
                            <div className="col-md-6">
                                <img alt="Here must be installation SCS logo" src={ installationText } className="competence-img"/>
                                <h5 className="competence-title">Монтаж СКС и ЛВС</h5>
                                <h6 className="competence-subtitle">СТРУКТУРИРОВАННЫХ КАБЕЛЬНЫХ СИСТЕМ</h6>
                                <p className="competence-description">
                                Эстетично выполним монтаж локальной сети в офисе или на производстве: 
                                от монтажа кабель-каналов до сборки серверных шкафов.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img alt="Here must be installation SCS logo" src={ electricalCircuit } className="competence-img"/>
                                <h5 className="competence-title">Монтаж ЭС и ЭО</h5>
                                <h6 className="competence-subtitle">ЭЛЕКТРИЧЕСКИХ СЕТЕЙ</h6>
                                <p className="competence-description">
                                Аккуратно обеспечим объект энергией: от установки электрических розеток
                                 до расключения распределительных щитов.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img alt="Here must be installation SCS logo" src={ fiberCable } className="competence-img"/>
                                <h5 className="competence-title">Монтаж ВОЛС</h5>
                                <h6 className="competence-subtitle">ВОЛОКОННО-ОПТИЧЕСКИХ СЕТЕЙ</h6>
                                <p className="competence-description">
                                Построим канал связи со скоростью света для самых требовательных узлов: от соединения
                                 распределенных точек в одном сооружении до линий протяженностью больше нескольких километров.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img alt="Here must be installation SCS logo" src={ systemControl } className="competence-img"/>
                                <h5 className="competence-title">Монтаж и настройка СКУД</h5>
                                <h6 className="competence-subtitle">СИСТЕМ БЕЗОПАСНОГО ДОСТУПА</h6>
                                <p className="competence-description">
                                Организуем контролируемый доступ на предприятие: от установки считывателей и ограждающих устройств
                                 до настройки сложных систем учета рабочего времени и видеофиксации.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img alt="Here must be installation SCS logo" src={ cctv } className="competence-img"/>
                                <h5 className="competence-title">Монтаж и настройка СВ</h5>
                                <h6 className="competence-subtitle">СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ</h6>
                                <p className="competence-description">
                                Создадим круглосуточный визуальный контроль процессов и имущества: от бюджетных аналоговых решений до
                                 цифровых систем с серверным программным обеспечением.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="installationModal-container">
                                    <h5 className="competence-title">Вам нужно составить смету<br/> на монтаж или 
                                    необходимо выполнить изыскания?</h5>
                                    <button type="button" class="btn btn-primary installation-btn" data-toggle='modal' data-target='#exampleModal'>Оформить заявку</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Installation;
