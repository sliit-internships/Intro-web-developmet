import React, { Component } from 'react'
import User from './components/User/User'
import axios from 'axios';
import { SERVER } from './constants';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      address:'',
      users : []
    }
  }


  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const fetchedUsers = await axios.get(`${SERVER}/api/user`);
    console.log(fetchedUsers);
    this.setState({
      users: fetchedUsers.data
    })
  }

  handleNameChangeEvent = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleAddressChangeEvent = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  handleOnClickSubmit = async () => {   

    await axios({
      url: `${SERVER}/api/user`,
      method: 'POST',
      params: {
        name : this.state.name,
        address :this.state.address
      }
      //you can use body here if you are accepting data from the request body
    });   
    
    this.setState({     
      name: '',
      address: ''
    });
    this.fetchUsers();
  }

  handleDeleteUser = async (id) =>{
    await axios.delete(`${SERVER}/api/user/${id}`);
    this.fetchUsers();    
  }

  render() {
    return (
      <>

    <div className="form">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleNameChangeEvent} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputaddress1" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleInputaddress1" value={this.state.address}
           aria-describedby="addressHelp" 
           onChange={this.handleAddressChangeEvent}/>
        </div>
        <button className="btn btn-primary" onClick={this.handleOnClickSubmit}>Submit</button>
    </div>
  

      {
       this.state.users.reverse().map(user => {
         return <User 
          name={user.name} 
          address={user.address}
          posts={user.posts}
          id={user.id}
          handleDelete={this.handleDeleteUser}
         />
       })
      }                
    </>
    )
  }
}

