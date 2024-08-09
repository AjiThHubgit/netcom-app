import React, { useState } from 'react';

const InstructionNotes = () => {
    const [activeDay, setActiveDay] = useState('Day1'); // Default to Day1

    const handleToggle = (day) => {
        setActiveDay(day);
    };

    return (
        <div className='ml-30'>
            <div className='instruction__container' style={{padding: '20px'}}>
                <div className='card' style={{ display: 'block', padding: 0, border: '1px solid #E2E2E2' }}>
                    <div className='card-header' style={{borderBottom: '2px solid #E2E2E2', padding: '0 30px'}}>
                        <div>
                            <button
                                className={`${activeDay === 'Day1' ? 'active' : ''} para__semi__bold`}
                            >
                                Day1
                            </button>
                            <button
                                onClick={() => handleToggle('Day2')}
                                className={`${activeDay === 'Day2' ? 'active' : ''} para__semi__bold`}
                            >
                                Day2
                            </button>
                            <button
                                onClick={() => handleToggle('Day3')}
                                className={`${activeDay === 'Day3' ? 'active' : ''} para__semi__bold`}
                            >
                                Day3
                            </button>

                        </div>
                    </div>
                    <div className={`card-content ${activeDay === 'Day1' ? 'show' : 'hide'}`} style={{marginTop: '10px'}}>
                        <div className='content-border' style={{marginLeft: '30px'}}>
                            <p className='para__semi-regular' style={{color: '#181A53'}}>Course outline</p>
                            <ol className='content-list' style={{marginLeft: '30px', marginTop: '20px'}}>
                                <li className='para__regular'>Get Started with Cisco Command-Line Interface (CLI)</li>
                                <li className='para__regular'>Observe How a Switch Operates</li>
                                <li className='para__regular'>Perform Basic Switch Configuration</li>
                                <li className='para__regular'>Implement the Initial Switch Configuration</li>
                                <li className='para__regular'>Inspect TCP/IP Applications</li>
                                <li className='para__regular'>Configure an Interface on a Cisco Router</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className='card' style={{display: 'block', border: '1px solid #E2E2E2'}}>
                    <div className='card-content' style={{borderBottom: '2px solid #E2E2E2', paddingBottom: '25px'}}>
                        <div className='card-title mb-10'>
                        <p style={{ backgroundColor: 'lightgoldenrodyellow', color: '#000', padding: '3px', borderRadius: '4px', marginRight: '10px', display: 'inline-block' }} className='para__small'>Microsoft</p>
                        <p style={{ backgroundColor: '#bfacac', color: '#000', padding: '3px', borderRadius: '4px', marginRight: '10px', display: 'inline-block' }} className='para__small'>GTR</p>
                        </div>

                        <p className='card-subtitle mb-10 heading__semi'>DP-100T01: Designing and Implementing a Data Science Solution on Azure (Data Scientist)</p>
                        <div className='mb-10'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star half-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span style={{marginLeft: '15px'}}>3.5</span>
                        </div>

                        <div className='d-flex'>
                            <button className='start_button mr-10 heading__semi'>Starting in 7days</button>
                            <button className='register__btn'>Register</button>
                        </div>
                    </div>

                    <div className='card-content' style={{marginTop: '20px'}}>
                        <div className='card-title mb-10'>
                        <p style={{ backgroundColor: 'lightgoldenrodyellow', color: '#000', padding: '3px', borderRadius: '4px', marginRight: '10px', display: 'inline-block' }} className='para__small'>Microsoft</p>
                        <p style={{ backgroundColor: '#bfacac', color: '#000', padding: '3px', borderRadius: '4px', marginRight: '10px', display: 'inline-block' }} className='para__small'>GTR</p>
                        </div>
                        <p className='card-subtitle  mb-10 heading__semi'>DP-100T01: Designing and Implementing a Data Science Solution on Azure (Data Scientist)</p>
                        
                        <div className='mb-10'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star half-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span style={{marginLeft: '15px'}}>3.5</span>
                        </div>

                        <div className='d-flex'>
                            <button className='start_button mr-10 heading__semi'>Starting in 7days</button>
                            <button className='register__btn'>Register</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructionNotes;
