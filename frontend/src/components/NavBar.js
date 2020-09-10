import React from 'react'
import { connect } from 'react-redux'
//import { NavLink } from 'react-router-dom'
import Logout from './Logout'

//
const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar navbar navbar-expand-lg navbar-light bg-danger">
      { currentUser ? <strong>Welcome, {currentUser.attributes.name} from:
      {currentUser.attributes.hometown.city},
      {currentUser.attributes.hometown.state}</strong>
      : ""}
      {/* <NavLink exact activeClassName="active" to="/trips"  >My Trips</NavLink>
      <NavLink exact activeClassName="active" to="/trips/new" >New Trip</NavLink> */}
      { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout /></> : null}
    </div>
  )
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)