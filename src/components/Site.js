import React from 'react';
const siteText = [
	{
		text: ['make', 'site compliant with', 'WTMS'],
		title: 'GIS를 이용한 사례1',
		code: '',
		view: '',
		info: ['', '', ''],
	},
	{
		text: ['make', 'site compliant with', 'TMS'],
		title: 'GIS를 이용한 사례2',
		code: '',
		view: '',
		info: ['', '', ''],
	},
	{
		text: ['make', 'site compliant with', 'v-World'],
		title: 'GIS를 이용한 사례3',
		code: '',
		view: '',
		info: ['', '', ''],
	},
	{
		text: ['make', 'site compliant with', 'QGIS'],
		title: 'GIS를 이용한 사례4',
		code: '',
		view: '',
		info: ['', '', ''],
	},
];
const Site = () => {
	return (
		<section id='site'>
			<div className='site__inner'>
				<h2 className='site__title'>
					Why? <em>제작 이유</em>
				</h2>
				<div className='site__wrap'>
					{siteText.map((site, key) => (
						<article className={`site__item s${key + 1}`} key={key}>
							<span className='num'>{key + 1}.</span>
							<div className='text'>
								<div>{site.text[0]}</div>
								<div>{site.text[1]}</div>
								<div>{site.text[2]}</div>
							</div>
							<h3 className='title'>{site.title}</h3>
							<div className='btn'>
								<a href={site.code}>code</a>
								<a href={site.view}>view</a>
							</div>
							<div className='info'>
								<span>{site.info[0]}</span>
								<span>{site.info[1]}</span>
								<span>{site.info[2]}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Site;
