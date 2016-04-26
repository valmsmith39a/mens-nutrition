import React from 'react';
import Navbar from './navbar/index';
import MainPage from  './main/index';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className='container-fluid'>
          <Navbar />
          <MainPage />
        </div>
      </div>
    );
  }
}
