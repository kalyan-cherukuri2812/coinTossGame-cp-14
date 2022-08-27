import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, status: true}

  tossCoinClick = () => {
    this.setState(prevState => ({total: prevState.total + 1}))

    const toss = Math.floor(Math.random() * 2)
    console.log(toss)
    if (toss === 0) {
      this.setState(prev => ({heads: prev.heads + 1}))
      this.setState({status: true})
    } else {
      this.setState(prev => ({tails: prev.tails + 1}))
      this.setState({status: false})
    }
  }

  render() {
    const {total, heads, tails, status} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img
            className="img"
            src={
              status === true
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            alt="toss result"
          />
          <button className="btn" type="button" onClick={this.tossCoinClick}>
            Toss Coin
          </button>
          <div className="sub">
            <p className="p2">Total: {total}</p>
            <p className="p2">Heads: {heads}</p>
            <p className="p2">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
