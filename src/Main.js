import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpacesList from './SpacesList'
import {SPACE_CREATED, SPACE_UPDATED, SPACE_DELETED, APP_CREATED} from './actionTypes'

function mapStateToProps(state) {
  return {
    spaces: state.spaces,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      SPACE_CREATED: (space) => {
        dispatch({type: 'SPACE_CREATED', space: space})
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpacesList)