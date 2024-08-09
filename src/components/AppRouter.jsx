import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import TrainingClass from '../pages/TrainingClasses';
import ELearning from '../pages/ELearning';
import CourseCatalog from '../pages/CourseCatalog';
import Resources from '../pages/Resources';
import TrainingCalendar from '../pages/TrainingCalendar';
import HelpCenter from '../pages/HelpCenter';
import Settings from '../pages/Settings';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/training-classes' element={<TrainingClass />} />
            <Route path='/e-learning' element={<ELearning />} />
            <Route path='/course-catalog' element={<CourseCatalog />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/training-calendar' element={<TrainingCalendar />} />
            <Route path='/help-center' element={<HelpCenter />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>
    )
}

export default AppRouter