import React from 'react';
import { NavLink } from 'react-router-dom'

import HeaderModal from './HeaderModal';

import './header.css'
import companyLogo from'./companyLogo.png'

const Header = () => {
    return (
        <>
        <HeaderModal/>
        <div className='header-container'>
            <NavLink to='/'>
                <img src={companyLogo} alt='Here must be logo'style={{width: '76px', height: '120px', marginLeft: '144px'}}></img>
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
                    <a href='tel:+79137907997' className='styledLink styledLink-transparent'>+7 (913) 790-79-97</a>
                    <a href='mailto:gpsnsk.lab@ya.ru' className='styledLink styledLink-transparent'>gpsnsk.lab@ya.ru</a> 
                </div>
                {/* Кнопка, открывающая модальное окно */}
                <button type="button" class="btn btn-primary customButton" data-toggle='modal' data-target='#exampleModal'>Начать сотрудничество</button>
            </div>
        </div>
        </>
        
    );
}

export default Header;
