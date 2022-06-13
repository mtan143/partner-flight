import logo from './logo.svg';
import travelokabar from './img/travelokabar.png';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar/Index';
// import BasicTable from './BasicTable/Index';
import { Link, Route, Routes } from 'react-router-dom';
import { Component, useEffect } from 'react';
import AddPage from './components/AddPage/add';
import DoanhThu from './components/DoanhThu/DoanhThu';
import Statistics from './components/Statistics';
import Login from './components/Login/Login';
import GroupRegister from './components/Register/GroupRegister';
import FlightCode from './components/FlightCode/index';
import Tickets from './components/Tickets/index';
import Footer from './components/Footer';
// import Footer from './Footer/Index';


function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route exact path='/tickets' element={<>
          <ResponsiveAppBar />
      <h2 style={{ fontWeight: '500', textAlign: 'center',margin: '25px 0' }}>MANAGEMENT PAGE</h2>
          <Tickets />
        </>} />
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<GroupRegister />} />
        <Route excat path='/flightcode' element={<FlightCode/>}/>
        <Route exact path="/add" element={<>
          <ResponsiveAppBar />
      <h2 style={{ fontWeight: '500', textAlign: 'center', margin: '25px 0' }}>MANAGEMENT PAGE</h2>
          <AddPage />
        </>}/>
        <Route exact path="/doanhthu" element={<>
          <ResponsiveAppBar />
      <h2 style={{ fontWeight: '500', textAlign: 'center', margin: '25px 0' }}>MANAGEMENT PAGE</h2>
          <DoanhThu />
        </>} />
        <Route exact path="/thongke" element={<>
          <ResponsiveAppBar />
      <h2 style={{ fontWeight: '500', textAlign: 'center' , margin: '25px 0'}}>MANAGEMENT PAGE</h2>
          <Statistics />
        </>} />
      </Routes>
      {/* { localStorage.getItem("code") === null ? <></> :  <Footer />} */}
    </div>

  );
}

export default App;
