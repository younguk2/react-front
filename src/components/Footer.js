import React from 'react';

const footerText = [
	{
		title: 'youtube',
		desc: '올포랜드 유튜브에 오시면 더 자료를 볼 수 있습니다.',
		link: '',
	},
	{
		title: 'github',
		desc: '깃헙에 오시면 더 많은 소스를 볼 수 있습니다.',
		link: 'https://github.com/younguk2/react-front',
	},
	{
		title: 'company',
		desc: '올포랜드에 홈페이지에 오시면 더 많은 정보를 볼 수 있습니다.',
		link: '',
	},
	{
		title: 'home',
		desc: '집가고 시퍼',
		link: '',
	},
	{
		title: 'status',
		desc: '피곤해',
		link: '',
	},
	{
		title: 'please',
		desc: '살려줘',
		link: '',
	},
	{
		title: 'wants',
		desc: '달달한거 땡기네',
		link: '',
	},
];
const Footer = () => {
	return (
		<footer id='footer' role='contentinfo'>
			<div className='footer__inner'>
				<div className='footer__text'>
					<span>ALlForLand</span>
					<span>© webs</span>
				</div>
				<div className='footer__info'>
					<div className='left'>
						<div className='title'>
							<a href='/'>sign up</a>
						</div>
						<p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
					</div>
					<div className='right'>
						<h3>social</h3>
						<ul>
							{footerText.map((footer, key) => (
								<li key={key}>
									<a href={footer.link}>{footer.title}</a>
									<em>{footer.desc}</em>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='footer__right'>
					© 2024 neostory
					<br />이 사이트는 리액트를 이용하여 제작하였습니다.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
