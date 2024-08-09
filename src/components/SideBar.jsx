import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../assets/styles/sidebar.scss';
import { commonImgObj, sideMenuItems, helperMenuItems } from '../utils/constant';
import Title from './Title';

const SideBar = ({openMenu, setOpenMenu}) => {

	const { rightArrowIcon, arrowBackIcon } = commonImgObj;
	const navigate = useNavigate();
	console.log('sideMenuItems', sideMenuItems);
	const screenWidth = window.innerWidth;

	const handleOnClick = (id, path) => {
		const newArr = sideMenuItems.map((item) => {
			if (item.id === id) {
				item.active = true;
			} else {
				item.active = false;
			}

		});
		console.log(path);
		navigate(path);
		if (screenWidth < 768) {
			setOpenMenu(!openMenu);
		} else {
			setOpenMenu(openMenu);
		}
		return newArr;
	}

	return (
		<section className='sidebar__section' style={{backgroundColor: '#fff'}}>
			<div className='p-20 mt-15'>
				{
					sideMenuItems.map((item) => (
						<div onClick={() => handleOnClick(item.id, item.path)} className={`${item.active ? 'btn__primary' : ''} sidebar__item d-flex justify-between align-center`} key={item.id}>
							<div className='d-flex'>
								<img src={item.img} alt={item.title} />
								<Title title={item.title} />
							</div>
							{
								item.title === 'Course Catalog' &&
								<div className='d-flex'>
									<img src={rightArrowIcon} alt="rightArrowIcon" />
								</div>

							}
						</div>

					))
				}
			</div>
			<div style={{ position: 'relative' }}>
				<p style={{ borderBottom: ' 2px solid #E2E2E2' }}></p>
				<div className='d-flex justify-center align-center mob__hide' style={{ width: '25px', height: '25px', position: 'absolute', top: '-11px', right: '10px', background: '#ffff', borderRadius: '8px', border: '1px solid #E2E2E2' }}><img style={{ width: '16px' }} src={arrowBackIcon} alt="arrowBackIcon" /></div>
			</div>

			<div className='p-20'>
				{
					helperMenuItems.map((item) => (
						<div onClick={() => handleOnClick(item.id)} className={`${item.active ? 'btn__primary' : ''} sidebar__item d-flex justify-between align-center`} key={item.id}>
							<div className='d-flex'>
								<img src={item.img} alt={item.title} />
								<Title title={item.title} />
							</div>
							{
								item.title === 'Course Catalog' &&
								<div className='d-flex'>
									<img src={rightArrowIcon} alt="rightArrowIcon" />
								</div>

							}
						</div>
					))
				}
			</div>
		</section>
	)
}

export default SideBar