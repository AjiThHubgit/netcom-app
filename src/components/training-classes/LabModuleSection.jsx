import React from 'react';

const LabModuleSection = () => {
    return (
        <div className='lab-module-container'>
            <div className='lab-module-card'>
                <div className='lab-module-text'>
                    <p className='lab-module-title'>Access <br /> lab module</p>
                </div>
                <div className='lab-module-input-section'>
                    <div>
                        <p className='lab-module-label'>Lab module</p>
                        <div className='lab-module-input-wrapper'>
                            <input className='lab-module-input' type="text" />
                            <button className='action_btn lab-module-btn'>Access LAB</button>
                        </div>
                        <p className='lab-module-expiration'>Expires in 180 Days (Valid till: Mon, 20 Sep 2023)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LabModuleSection;
