import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import { Link, withRouter } from 'react-router'

import { getUsers } from '../../../actions/userActions'

class Home extends Component {

  componentWillMount() {
    this.props.getUsers()
  }

  render() {
    return (
      <div>
        Render
      </div>
    )
  }
}

export default connect(
  state => ({
    users: state.userStore.users
  }),
  {
    getUsers
  }
)(withRouter(Home))
