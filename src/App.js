import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Table from './components/table';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='container'>
        <Header />
        <Table />
      </div>
     );
  }
}
 
export default App;