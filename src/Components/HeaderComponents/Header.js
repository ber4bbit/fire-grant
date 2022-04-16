import React from 'react';
import { NavLink } from 'react-router-dom'

import './header.css'
import companyLogo from'./companyLogo.png'
import logo from './logo.svg'

class Header extends React.Component {

    componentDidMount() {
        const burgerBtn = document.querySelector('.burger-btn');
        const burgerMenu = document.querySelector('.burger-menu');
        burgerBtn.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            burgerBtn.classList.toggle('active')
        })
    }

    render() {
        return (
            <>
            <div className='header-container'>
                <NavLink to='/'>
                    <img src={logo} alt='Here must be logo' style={{width: '76px', height: '120px', marginLeft: '144px'}}></img>
                </NavLink>
                <nav className='header-container__nav-menu'>
                    <ul className='menu'>
                        <li><NavLink to='/' className='styledLink'>Безлимитное сопровождение</NavLink></li>
                        <li><NavLink to='/periodicServices' className='styledLink'>Периодические услуги</NavLink></li>
                        <li><NavLink to='/installation' className='styledLink'>Проектирование и монтаж сетей</NavLink></li>
                        <li><NavLink to='/about' className='styledLink'>О компании</NavLink></li>
                    </ul>
                </nav>
                <div className='header-rightSide'>
                    <div className='links-container'>
                        <a href='tel:+79137907997' className='styledLink'>+7 (913) 790-79-97</a>
                        <a href='mailto:gpsnsk.lab@ya.ru' className='styledLink'>gpsnsk.lab@ya.ru</a> 
                    </div>
                    {/* Кнопка, открывающая модальное окно */}
                    <button type="button" class="btn btn-primary customButton" data-toggle='modal' data-target='#exampleModal'>Начать сотрудничество</button>
                </div>
                <div className="burger-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                <div className="burger-menu">
                    <nav>
                        <ul className="burger-list">
                            <li><NavLink to='/' className='burger-link'>Безлимитное сопровождение</NavLink></li>
                            <li><NavLink to='periodicServices' className='burger-link'>Периодические услуги</NavLink></li>
                            <li><NavLink to='installation' className='burger-link'>Проектирование и монтаж сетей</NavLink></li>
                            <li><NavLink to='about' className='burger-link'>О компании</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            </>
        );
    }
}

export default Header;
