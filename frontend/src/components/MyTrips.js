import React from 'react'
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'

const MyTrips = props => {
  const tripCards = props.trips.length > 0 ?
    props.trips.map(t => (<p key={t.id} className="card text-white bg-primary mb-12">
    {t.attributes.name}<br />
    From:{t.attributes.start_date}  To:{t.attributes.end_date}
    {/* <Link to={`/trips/${t.id}`}>{t.attributes.name}</Link> */}
    </p>)) :
    null

  return tripCards
}

// we provide mapStateToProps to Redux in order to tell Redux:
// "Excuse me Redux, would you please provide use access to your state
// so that we may pick and choose the pieces of state we would like availble
// to this particular component as props."

const mapStateToProps = state => {
  return {
    trips: state.myTrips
  }
}

export default connect(mapStateToProps)(MyTrips)