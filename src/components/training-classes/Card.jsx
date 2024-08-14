import React from 'react';
import { commonImgObj, downloadCardObj } from '../../utils/constant';

const Card = () => {
    const { SharedImg } = commonImgObj;

    return (
        <div className='card-container'>
            {
                downloadCardObj.map((item, index) => (
                    <div key={index} className='card'>
                        <div className='card-content'>
                            <p className='card-title body__1'>{item.title}</p>
                            <p className='card-subtitle'>{item.subtitle}</p>
                            <div className='card-actions'>
                                <button className='action_btn cp'>{item.btnText}</button>
                                {item.sharedImgFlag &&
                                    <div className='shared-img'><img src={SharedImg} alt={item.title} className='cp' /></div>
                                }
                            </div>
                        </div>
                        <div className='card-image'>
                            <img src={item.img} alt={item.title} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;
