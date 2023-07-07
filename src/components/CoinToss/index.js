// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {headCount: 0, tailCount: 0, totalCount: 0, toss: 'head'}

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
      }))
      this.setState({toss: 'head'})
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
      }))
      this.setState({toss: 'tail'})
    }
    this.setState(prevState => ({
      totalCount: prevState.totalCount + 1,
    }))
  }

  render() {
    const {headCount, tailCount, totalCount, toss} = this.state

    let tossImage
    if (toss === 'head') {
      tossImage = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
          className="toss-img"
        />
      )
    } else {
      tossImage = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
          className="toss-img"
        />
      )
    }

    return (
      <div className="app-cont">
        <div className="app-sub-cont">
          <h1 className="main-head">Coin Toss Game</h1>
          <p className="main-text">Heads (or) Tails</p>
          <div className="img-cont">{tossImage}</div>
          <button type="button" onClick={this.onTossCoin} className="toss-btn">
            Toss Coin
          </button>
          <div className="count-cont">
            <p className="count-text">Total: {totalCount}</p>
            <p className="count-text">Heads: {headCount}</p>
            <p className="count-text">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
