import React, { Component } from 'react'
import './styles/App.css'
import Login from './components/Login'
import Logout from './components/Logout'
import MyTrips from './components/MyTrips.js'
import NavBar from './components/NavBar.js'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"
import MainContainer from './components/MainContainer'
import Signup from './components/Signup.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import "bootswatch/dist/solar/bootstrap.min.css";

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
      <NavBar />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/logout' component={Logout}/>
        <Route exact path='/trips' component={MyTrips}/>
        <Route exact path='/signup' component={Signup}/>
        <MainContainer />
      </div>
    )
  }
  
//   render(){
//     const { loggedIn, trips } = this.props
//     return (
//       <div className="App">
//         { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
//         <Switch>
//           <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
//           <Route exact path='/login' component={Login}/>
//           <Route exact path='/trips' component={MyTrips}/>
//           <Route exact path='/trips/new' component={NewTripFormWrapper}/>
//           <Route exact path='/trips/:id' render={props => {
//               // I need to get ???
//               const trip = trips.find(trip => trip.id === props.match.params.id)
//               console.log(trip)
//               return <TripCard trip={trip} {...props}/>
//             }
//           }/>
//           <Route exact path='/trips/:id/edit' render={props => {
//               // I need to get ???
//               const trip = trips.find(trip => trip.id === props.match.params.id)
//               // dispatch updateForm -> trip
//               return <EditTripFormWrapper trip={trip} {...props}/>
//             }
//           }/>
//         </Switch>
//       </div>
//     );

//   }
// }

}
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    trips: state.myTrips
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App)