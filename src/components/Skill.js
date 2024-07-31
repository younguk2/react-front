import React from 'react';

const skillText = [
	{
		title: 'GIS를 이용한 활용',
		desc: 'GIS를 기반으로 다양한 가치를 창출해낸다.',
	},
	{
		title: 'PostgreSQL와 Node.js, React를 이용한 웹서비스',
		desc: '웹서비스를 기반으로한 다양한 서비스 제공',
	},
	{
		title: '더 나은 가치를 위한 한걸음',
		desc: '가치추구적 사고로 서비스를 더욱 발전시킨다.',
	},
];

const Skill = () => {
	return (
		<section id='skill'>
			<div className='skill__inner'>
				<h2 className='skill__title'>
					Project <em>나의 도전</em>
				</h2>
				<div className='skill__desc'>
					{skillText.map((skill, key) => (
						<div key={key}>
							<span>{key + 1}.</span>
							<h3>{skill.title}</h3>
							<p>{skill.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skill;
