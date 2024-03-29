import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Table from './components/table';
import http from './services/httpService';
import config from './config.json';

class App extends Component {
  
  state = { 
    users : [],
    name : '',
    userName : '',
    email : '',
    city : '',
    phone : '',
    company : '',
    selectUser : ''
   }
  
   async componentDidMount(){
    const { data : users } = await http.get(config.apiEndPoint)
    this.setState({ users })
   }
  
   render() { 
    return ( 
      <div className='container'>
        <Header userData={this.state} 
                onNameChange={this.handleNameChange} 
                onUsernameChange={this.handleUsernameChange} 
                onEmailChange={this.handleEmailChange} 
                onCityChange={this.handleCityChange} 
                onPhoneChange={this.handlePhoneChange} 
                onCompanyChange={this.handleCompanyChange}
                onSubmit={this.handleSubmit}                 
                onUpdate={this.handleUpdate} 
                onDelete={this.handleDelete}/>
        <Table  userList={this.state.users}
                onSelect={this.handleSelect} 
/>
      </div>
     );
  }

  /* Input Field changes */
  handleNameChange = input => {
    this.setState({ name : input })
  }
  handleUsernameChange = input => {
        this.setState({ userName : input })
  }
  handleEmailChange = input => {
        this.setState({ email : input })
  }
  handleCityChange = input => {
        this.setState({ city : input })
  }
  handlePhoneChange = input => {
        this.setState({ phone : input })
  }
  handleCompanyChange = input => {
        this.setState({ company : input })
  }

  /*Submit Button */
  handleSubmit = async () => {
    const newObj = {
      name: this.state.name,
      username: this.state.userName,
      email: this.state.email,
      address: {
      city: this.state.city
      },
      phone: this.state.phone,
      company: {
      name: this.state.company
      }
      }
    const { data : user } = await http.post(config.apiEndPoint, newObj);
    const users = [user, ...this.state.users];
    this.setState({ 
      users,
      name : '',
      userName : '', // <= Bug: Not clearing field value.
      email : '',
      city : '',
      phone : '',
      company : '',
      selectUser : ''
     });

  }

  /* Select Row Data To Input Fields */
  handleSelect = user => {
    this.setState({ 
      name : user.name,
      userName : user.userName, // <= Bug: Not clearing field value.
      email : user.email,
      city : user.address.city,
      phone : user.phone,
      company : user.company.name,
      selectUser : user
     });
  }

  /* Update List Item */
  handleUpdate = async () => {
    const id = this.state.selectUser.id;
    const users = [...this.state.users];
    const index = users.indexOf(this.selectUser);
    const updatedObj = {
      name: this.state.name,
      username: this.state.userName,
      email: this.state.email,
      address: {
      city: this.state.city
      },
      phone: this.state.phone,
      company: {
      name: this.state.company
      }
      }
      users[index] = {...updatedObj};
      this.setState({ users })
      await http.put(config.apiEndPoint + '/' + id); // Bug : Not Updating
  }

  /* Delete List Item */
  handleDelete = () => {
    const id = this.state.selectUser.id;
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({ users });
  }

}
 
export default App;