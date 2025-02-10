import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LearningPage from './routes/learning-page/learning-page.route';
import Deutschkurse from './routes/deutschkurse/deutschkurse.route';
import Donate from './routes/donate/donate.route';
import Event from './routes/event/event.route';
import Bfd from './routes/bfd/bfd.route';
import Sprachcafe from './routes/sprachcafe/sprachcafe.route';
import DanceAcademy from './routes/dance-academy/dance-academy.route';
import Team from './routes/team/team.route';
import Datenschutz from './routes/datenschutz/datenschutz.route';
import ProjectsPage from './routes/projects-page/projects-page.route';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/learning-page' element={<LearningPage/>} />
        <Route path='/deutschkurse' element={<Deutschkurse/>} />
        <Route path='/donate' element={<Donate/>} />
        <Route path='/aktuelles' element={<Event/>} />
        <Route path='/bundesfreiwilligendienst' element={<Bfd/>} />
        <Route path='/sprachcafe' element={<Sprachcafe/>} />
        <Route path='/tanzen' element={<DanceAcademy/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/datenschutz' element={<Datenschutz/>} />
        <Route path='/projects' element={<ProjectsPage/>} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
