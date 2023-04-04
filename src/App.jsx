import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div>
    {/* Header Section */}
    <Header></Header>
      <Outlet></Outlet>
    {/* Foooter Section  */}
    </div>
  );
};

export default App;