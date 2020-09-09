import React, { Component } from 'react'
import './styles/App.css'
import Login from './components/Login'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <>
      <Login />
      <Logout />
      </>
    )
  }
}


const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    //trips: state.myTrips
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App)