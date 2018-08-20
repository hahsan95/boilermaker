import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPentasListThunk } from '../store'

class AllPentas extends Component {

  async componentDidMount() {
    if (this.props.pentasList.length === 0) {
      await this.props.getPentasListThunk()
    }
  }

}

const mapStateToProps = (store) => {
  return {
    pentasList: store.allPentas.pentasList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPentasListThunk: () => dispatch(getPentasListThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPentas)
