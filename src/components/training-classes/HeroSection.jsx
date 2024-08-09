import React from 'react';
import { trainingClassObj, commonImgObj } from '../../utils/constant';
import Card from './Card';

const HeroSection = () => {

  const { breadcrumbsItems, subtitleHighlight, title, completeDetails, previewStatus, toggleBtnLists } = trainingClassObj;
  const {downArrowIcon} = commonImgObj;
  console.log('trainingClassObj', trainingClassObj);
  return (
    <div className='p-20 text-white ml-30' style={{paddingBottom: '120px',}}>
      <div className='para__small mt-10'>
        <p>{breadcrumbsItems.backText} <span>/</span> {breadcrumbsItems.content}</p>
      </div>
      <div className='d-flex mt-30'>
        {
          subtitleHighlight.map((list, ind) => (
            <p style={{ backgroundColor: list.color, color: '#000', padding: '3px', borderRadius: '4px', marginRight: '10px' }} className='para__small' key={ind}>{list.name}</p>
          ))
        }
      </div>
      <h2 className='mt-20 w-70'>{title}</h2>
      <div className='mt-20'>
        <p>{completeDetails.date}<span><img style={{ marginLeft: '25px', position: 'relative',top: '6px'}} src={completeDetails.img} alt="date" /></span> <span style={{ textDecoration: 'underline' }}>{completeDetails.userName}</span></p>
      </div>
      <div className='mt-20'>
        <div className='d-flex align-center'><img src={previewStatus.img} alt="previewStatus" /> <span style={{ color: '#71FF9D' }} className='para__regular ml-10'>{previewStatus.text}</span></div>
      </div>
      <div className='mt-30 para__regular d-flex flex-wrap gap-20'>
        {
          toggleBtnLists.map((list) => (
            <div key={list.id}>
              <button style={{display: 'flex'}} className={list.active ? 'action_btn' : 'action_outline__btn'}>{list.title} {list.drowArrowFlag === true ? <img src={downArrowIcon} alt="downArrowIcon" /> : ''  }</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HeroSection