import React from 'react';
import about from '../assets/img/about.jpg';

const introText = {
	title: 'port developer',
	desc: ['talent is', 'found at the end of the', 'effort'],
};
const Intro = () => {
	return (
		<section id='intro'>
			<div className='intro_inner'>
				<h1 className='intro__title'>port developer</h1>
				<div className='intro__lines' aria-hidden='true'>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
				</div>
				<div className='intro__text'>
					<div className='text'>
						<div>{introText.desc[0]}</div>
						<div>{introText.desc[1]}</div>
						<div>{introText.desc[2]}</div>
					</div>

					<div className='img'>
						<img src={about} alt='어바웃' />
					</div>

					<div className='intro__lines bottom' aria-hidden='true'>
						<span className='line'></span>
						<span className='line'></span>
						<span className='line'></span>
						<span className='line'></span>
						<span className='line'></span>
						<span className='line'></span>
						<span className='line'></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
