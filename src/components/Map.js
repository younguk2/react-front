import React from 'react';
import port01 from '../assets/img/port01.jpg';
import port02 from '../assets/img/port02.jpg';
import port03 from '../assets/img/port03.jpg';
import port04 from '../assets/img/port04.jpg';
import port05 from '../assets/img/port05.jpg';
import port06 from '../assets/img/port06.jpg';
import port07 from '../assets/img/port07.jpg';
import port08 from '../assets/img/port08.jpg';
import port09 from '../assets/img/port09.jpg';
import port10 from '../assets/img/port10.jpg';

const portText = [
	{
		num: '01',
		title: '네이버 지도',
		desc: 'EPSG 5179 좌표계를 사용한 한국인들이 가장 많이 사용하는 지도',
		img: port01,
		code: 'https://map.naver.com/p/',
		view: 'https://map.naver.com/p/',
		name: '',
	},
	{
		num: '02',
		title: '카카오 지도',
		desc: 'EPSG 5181 중부 원점 좌표계를 사용한 카카오 지도',
		img: port02,
		code: 'https://map.kakao.com/?q=',
		view: 'https://map.kakao.com/?q=',
		name: '',
	},
	{
		num: '03',
		title: '서울시 S-Map',
		desc: '',
		img: port03,
		code: 'https://smap.seoul.go.kr/',
		view: 'https://smap.seoul.go.kr/',
		name: '',
	},
	{
		num: '04',
		title: 'v-World',
		desc: '',
		img: port04,
		code: 'https://map.vworld.kr/map/dtkmap.do?mode=MAPW201',
		view: 'https://www.vworld.kr/dev/v4dv_opnws3dmap2guide_s001.do',
		name: '',
	},
];
const Map = () => {
	return (
		<section id='port'>
			<div className='port__inner'>
				<div className='port__title'>
					Map <em>지도</em>
				</div>
				<div className='port__wrap'>
					{portText.map((port, key) => (
						<article className={`port__item p${key + 1}`} key={key}>
							<span className='num'>{port.num}.</span>
							<a href={port.code} target='_blank' className='img' rel='noreferrer'>
								<img src={port.img} alt={port.name} />
							</a>
							<h3 className='title'>{port.title}</h3>
							<p className='desc'>{port.desc}</p>
							<a href={port.view} target='_blank' className='site' rel='noreferrer'>
								해당 지도 API 보기
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Map;
