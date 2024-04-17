import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LearningPage from './routes/learning-page/learning-page.route';
import Deutschkurse from './routes/deutschkurse/deutschkurse.route';
import Donate from './routes/donate/donate.route';
import Event from './routes/event/event.route';
import Education from './routes/education/education.route';
import Motion from './routes/motion/motion.route';
import Meeting from './routes/meeting/meeting.route';
import Bfd from './routes/bfd/bfd.route';
import Sprachcafe from './routes/sprachcafe/sprachcafe.route';
import DanceAcademy from './routes/dance-academy/dance-academy.route';
import Team from './routes/team/team.route';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/learning-page' element={<LearningPage/>} />
        <Route path='/deutschkurse' element={<Deutschkurse/>} />
        <Route path='/donate' element={<Donate/>} />
        <Route path='/aktuelles' element={<Event/>} />
        <Route path='/bildung' element={<Education/>} />
        <Route path='/bewegung' element={<Motion/>} />
        <Route path='/begegnung' element={<Meeting/>} />
        <Route path='/bundesfreiwilligendienst' element={<Bfd/>} />
        <Route path='/sprachcafe' element={<Sprachcafe/>} />
        <Route path='/tanzen' element={<DanceAcademy/>} />
        <Route path='/team' element={<Team/>} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
