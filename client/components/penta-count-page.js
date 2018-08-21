import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPentasListThunk } from '../store'
import { VictoryChart, VictoryPolarAxis, VictoryTheme, VictoryArea } from 'victory'


class AllPentas extends Component {

  async componentDidMount() {
    if (this.props.pentasList.length === 0) {
      await this.props.getPentasListThunk()
    }
  }

  render(){
    // if(this.props.pentasList.length > 0) {
    //   console.log(this.props.pentasList[0].content)
    // }
    let homumList = this.props.pentasList
    let likeCount = 0
    for(let i = 0; i < homumList.length; i++){
      if(homumList[i].likers.length){
        likeCount += homumList[i].likers.length
      }
    }
    console.log(homumList.length, likeCount)
    return(
      <div>
        <VictoryChart polar
        theme={VictoryTheme.material}
        >
          <VictoryPolarAxis dependentAxis
          style={{ axis: { stroke: "none" } }}
          tickFormat={() => null}
          />
          <VictoryPolarAxis/>
          <VictoryArea
             data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 }
            ]}
            // labels={(datum) => datum.x}
    style={{
      data: { fill: "#c43a31" },
    }}
  />
</VictoryChart>
<VictoryChart>
  <VictoryArea
    data={[
      { x: 1, y: 2, y0: 0 },
      { x: 2, y: 3, y0: 1 },
      { x: 3, y: 5, y0: 1 },
      { x: 4, y: 4, y0: 2 },
      { x: 5, y: 6, y0: 2 }
    ]}
  />
</VictoryChart>
      </div>
    )
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
