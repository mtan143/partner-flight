import logo from './logo.svg';
import travelokabar from './img/travelokabar.png';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar/Index';
// import BasicTable from './BasicTable/Index';
import { Link, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import AddPage from './components/AddPage/add';
import ListPage from './components/ListPage/list';
import DoanhThu from './components/DoanhThu/DoanhThu';
// import Footer from './Footer/Index';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <h2 style={{ fontWeight: '500', textAlign: 'center' }}>MANAGEMENT PAGE</h2>

      <Routes>
        <Route exact path='/' element={<ListPage />} />
        <Route exact path="/add" element={<AddPage />} />
        <Route exact path="/list" element={<ListPage />} />
        <Route exact path="/doanhthu" element={<DoanhThu />} />
      </Routes>

      {/* <img src={travelokabar} alt='ảnh lỗi' style={{ height: '100px', width: '100%' }} /> */}
      {/* <Footer /> */}
    </div>

  );
}

export default App;
