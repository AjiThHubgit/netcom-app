import React, {useState} from 'react';

const LabModuleSection = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div className='lab-module-container'>
            <div className='lab-module-card'>
                <div className='lab-module-text w-20' style={{textAlign: 'center'}}>
                    <p className='lab-module-title'>Access lab module</p>
                </div>
                <div className='lab-module-input-section w-80'>
                    <div style={{width: '100%'}}>
                        <p className='lab-module-label'>Lab module</p>
                        <div className='lab-module-input-wrapper'>
                            <select className='lab-module-input' id="options" value={selectedOption} onChange={handleChange} style={{width: '80%'}}>
                                <option value="option0">01 Exploring the Lab Environment</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </select>
                            <button className='action_btn lab-module-btn cp'>Access LAB</button>
                        </div>
                        <p className='lab-module-expiration'>Expires in 180 Days (Valid till: Mon, 20 Sep 2023)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LabModuleSection;
