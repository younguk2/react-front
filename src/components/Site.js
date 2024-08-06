import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, TileWMS } from 'ol/source';

const siteText = [
	{
		text: [],
		title: 'GIS를 이용한 사례1',
		code: '',
		image: '',
		view: '',
		info: ['', '', ''],
	},
	{
		text: [],
		title: 'GIS를 이용한 사례2',
		code: '',
		image: '',
		view: '',
		info: ['', '', ''],
	},
	{
		text: [],
		title: 'GIS를 이용한 사례3',
		image: '',
		code: '',
		view: '',
		info: ['', '', ''],
	},
	{
		text: [],
		title: 'GIS를 이용한 사례4',
		code: '',
		image: '',
		view: '',
		info: ['', '', ''],
	},
];

const Site = () => {
	const mapRefs = useRef([]);

	useEffect(() => {
		// mapRefs.current 배열 초기화
		mapRefs.current = mapRefs.current.slice(0, siteText.length);

		// siteText 길이 (4) 만큼만 지도 생성
		siteText.forEach((_, i) => {
			if (!mapRefs.current[i]) return;

			const map = new Map({
				target: mapRefs.current[i],
				layers: [
					new TileLayer({
						source: new OSM(),
					}),
					new TileLayer({
						source: new TileWMS({
							url: 'http://localhost:3004/MapPrimeServer/map/wms',
							params: {
								SERVICE: 'WMS',
								VERSION: '1.3.0',
								REQUEST: 'GetMap',
								LAYERS: 'younguk:seochogu_building',
								STYLES: 'test_style',
								CRS: 'EPSG:3857',
								WIDTH: 912,
								HEIGHT: 815,
								BBOX: '14111379.611,4498970.958,14158050.516,4537306.912',
								FORMAT: 'image/png',
							},
							serverType: 'geoserver',
						}),
					}),
				],
				view: new View({
					center: [14134699, 4518138],
					zoom: 13,
				}),
			});

			// map 객체를 ref에 저장하여 추후 접근 가능하게 함
			mapRefs.current[i].map = map;
		});

		// 컴포넌트가 언마운트될 때 지도를 정리
		return () => {
			mapRefs.current.forEach((mapRef) => {
				if (mapRef && mapRef.map) {
					mapRef.map.setTarget(null);
				}
			});
		};
	}, []);

	return (
		<section id='site'>
			<div className='site__inner'>
				<h2 className='site__title'>
					What? <em></em>
				</h2>
				<div className='site__wrap'>
					{siteText.map((site, key) => (
						<article className={`site__item s${key + 1}`} key={key}>
							<span className='num'>{key + 1}.</span>
							<div ref={(el) => (mapRefs.current[key] = el)} style={{ width: '80%', height: '50vh' }}></div>
							<div className='text'>
								<div>{site.text[0]}</div>
							</div>
							<h3 className='title'>{site.title}</h3>
							<div className='btn'></div>
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
