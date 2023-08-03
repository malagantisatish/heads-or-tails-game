// Write your code here
import {Component} from 'react'
import './index.css'

const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

class CoinToss extends Component {
  state = {toss: headImgUrl, total: 0, head: 0, tail: 0}

  tossTheCoin = () => {
    const {total, head, tail} = this.state
    const generateRandomNumber = Math.ceil(Math.random() * 10)
    if (generateRandomNumber % 2 === 0) {
      this.setState({toss: headImgUrl, head: head + 1, total: total + 1})
    } else {
      this.setState({toss: tailImgUrl, tail: tail + 1, total: total + 1})
    }
  }

  render() {
    const {toss, total, head, tail} = this.state
    return (
      <div className="bg-container">
        <div className="head-or-toss">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={toss} className="toss-image-size" alt="toss result" />
          <button
            onClick={this.tossTheCoin}
            type="button"
            className="toss-button"
          >
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score">Total: {total}</p>
            <p className="score">Heads: {head}</p>
            <p className="score">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
