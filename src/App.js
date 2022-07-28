import React from 'react';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import SideNavbar from './Pages/SideNavbar/SideNavbar';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';
// import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import AllProjects from './Pages/AllProjects/AllProjects';

const App = () => {
  return (
    <>
      <SideNavbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/resume' element={ <Resume /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
        <Route path='/allProjects' element={ <AllProjects /> } />
        {/* <Route path='/contact' element={ <Contact /> } /> */}
        <Route path='/login' element={ <Login /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
    </>
  )
}

export default App;