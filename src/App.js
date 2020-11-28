import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Table from './components/table';
import http from './services/httpService';
import config from './config.json';

class App extends Component {
  
  state = { 
    users : []
   }
  
   async componentDidMount(){
    const { data : users } = await http.get(config.apiEndPoint)
    this.setState({ users })
   }
  
   render() { 
    return ( 
      <div className='container-fluid pl-5 pr-5'>
        <Header />
        <Table userList={this.state.users}/>
      </div>
     );
  }
}
 
export default App;