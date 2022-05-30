import logo from './logo.svg';
import travelokabar from './img/travelokabar.png';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar/Index';
// import BasicTable from './BasicTable/Index';
import { Link, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import AddPage from './components/AddPage/add';
import DoanhThu from './components/DoanhThu/DoanhThu';
import Statistics from './components/Statistics';
import Login from './components/Login/Login';
import GroupRegister from './components/Register/GroupRegister';
// import Footer from './Footer/Index';


function App() {
  return (
    <div className="App">
      

      
      <Routes>
        
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<GroupRegister />} />
        <Route exact path="/add" element={<>
          <ResponsiveAppBar />
      <h2 style={{ fontWeight: '500', textAlign: 'center' }}>MANAGEMENT PAGE</h2>
          <AddPage />
        </>}/>
        <Route exact path="/doanhthu" element={<>
          <ResponsiveAppBar />
      <h2 style={{ fontWeight: '500', textAlign: 'center' }}>MANAGEMENT PAGE</h2>
          <DoanhThu />
        </>} />
        <Route exact path="/thongke" element={<>
          <ResponsiveAppBar />
      <h2 style={{ fontWeight: '500', textAlign: 'center' }}>MANAGEMENT PAGE</h2>
          <Statistics />
        </>} />
      </Routes>

      {/* <img src={travelokabar} alt='ảnh lỗi' style={{ height: '100px', width: '100%' }} /> */}
      {/* <Footer /> */}
    </div>

  );
}

export default App;
