import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Donate from './routes/donate/donate.route';
import Event from './routes/event/event.route';
import Bfd from './routes/bfd/bfd.route';
import Sprachcafe from './routes/sprachcafe/sprachcafe.route';
import DanceAcademy from './routes/dance-academy/dance-academy.route';
import Team from './routes/team/team.route';
import Datenschutz from './routes/datenschutz/datenschutz.route';
import ProjectsPage from './routes/projects-page/projects-page.route';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import BildungPage from './routes/bildung-page/bildung-page.route';
import ConceptPage from './routes/concept-page/concept-page.route';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/bildung' element={<BildungPage/>} />
        <Route path='/concept-page' element={<ConceptPage/>} />
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
