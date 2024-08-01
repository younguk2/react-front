import React, { useState } from 'react';

const headerNav = [
	{
		title: '개요',
		url: '#intro',
	},
	{
		title: '목표',
		url: '#skill',
	},
	{
		title: '협업',
		url: '#site',
	},
	{
		title: '지도',
		url: '#port',
	},
	{
		title: '연락',
		url: '#contact',
	},
];
const Header = () => {
	const [show, setShow] = useState(false);
	const toggleMenu = () => {
		setShow((prevShow) => !prevShow);
	};
	return (
		<header id='header' role='banner'>
			<div className='header__inner'>
				<div className='header__logo'>
					<a href='/'>
						나의 지도서비스 <em>AllForland</em>
					</a>
				</div>
				<nav className={`header__nav ${show ? 'show' : ''}`} role='navigation' aria-label='메인 메뉴'>
					<ul>
						{headerNav.map((nav, key) => (
							<li key={key}>
								<a href={nav.url}>{nav.title}</a>
							</li>
						))}
					</ul>
				</nav>
				<div className='header__nav__mobile' id='headerToggle' aria-controls='primary-menu' aria-expanded={show ? 'true' : 'false'} role='button' tabIndex='0' onClick={toggleMenu}>
					<span></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
