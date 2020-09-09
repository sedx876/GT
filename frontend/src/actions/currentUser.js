export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

export const login = credentials => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/login', {
      method: "POST",
      headers: {
        "Content_Type": "application/json"
      },
      body: JSON.stringify({username: "sedx", password: "password"})
    })
  }
}

// export const login = (credentials, history) => {
//   return dispatch => {
//     return fetch("http://localhost:3001/api/v1/login", {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(r => r.json())
//       .then(response => {
//         if (response.error) {
//           alert(response.error)
//         } else {
//           dispatch(setCurrentUser(response.data))
//           dispatch(getMyTrips())
//           dispatch(resetLoginForm())
//           history.push('/')
//         }
//       })
//       .catch(console.log)
//   }
// }