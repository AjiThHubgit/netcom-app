import React from 'react';
import HeroSection from '../components/training-classes/HeroSection'
import LabModuleSection from '../components/training-classes/LabModuleSection';
import Card from '../components/training-classes/Card';
import InstructionNotes from '../components/training-classes/InstructionNotes';

const TrainingClasses = () => {

  return (
    <section className='ml-260'>
      <div className='success'>
        <HeroSection />
      </div>
      <Card />
      <LabModuleSection />
      <InstructionNotes />
    </section>
  )
}

export default TrainingClasses