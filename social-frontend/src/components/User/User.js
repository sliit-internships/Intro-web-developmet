import React, { Component } from 'react'
import Post from '../Post/Post'

import './userStyles.css';

export default class User extends Component {
    render() {
        return (
            <div className = "card user">
                <div className="card-header">{this.props.name}</div>
                <p>{this.props.address}</p>
                <button className="btn btn-danger" onClick={() => {
                    this.props.handleDelete(this.props.id)
                }}>Delete</button>               
            </div>               
    
        )
    }
}
