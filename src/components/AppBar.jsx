import React from 'react';

import '../assets/styles/appbar.scss';
import { commonImgObj } from '../utils/constant';

const AppBar = ({openMenu, setOpenMenu}) => {
	const { companyLogo, searchImg, notificationImg, cartImg, profileImg, downArrowIcon, menuIcon, closeIcon } = commonImgObj;

	const handleOnClick = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<section className='appbar__section'>
			<div className='appbar__container d-flex justify-between'>
				<div className='d-flex gap-110'>
					<div className='d-flex align-center'><img src={companyLogo} alt="NetCom Logo" /></div>
					<div className='d-flex align-center portrait__hide' style={{ border: '1px solid #E2E2E2', borderRadius: '8px', padding: '5px 10px' }}>
						<img style={{ marginRight: '10px' }} src={searchImg} alt="searchImg" />
						<input style={{ width: '380px', height: '25px', border: 'none', outline: 'none' }} type="search" placeholder='Search' />
					</div>
				</div>
				<div className={`d-flex align-center gap-30 mob__hide ${openMenu ? 'mob__show' : ''}`}>
					<div><img src={notificationImg} alt="notificationImg" /></div>
					<div><img src={cartImg} alt="cartImg" /></div>
					<div className='d-flex align-center'>
						<img src={profileImg} alt="profileImg" /> <span className='para__semi__bold ml-10'>R. Spencer</span>
						<div className='profile__down_icon ml-15'><img src={downArrowIcon} alt="downArrowIcon" /></div>
					</div>
				</div>
				<div onClick={handleOnClick} className='mob__show'>
					<img src={!openMenu ? closeIcon : menuIcon} alt="menuIcon" />
				</div>
			</div>
		</section>
	);
};

export default AppBar;
