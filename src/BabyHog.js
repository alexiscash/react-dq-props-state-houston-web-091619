import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 50
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  render() {
    let color;
    switch(this.props.eyeColor) {
      case 'blue':
        color = BlueBaby;
        break;
      case 'sun':
        color = SunBaby;
        break;
      case 'glowing':
        color = GlowingBaby;
        break;
      default:
        console.log('ayyy lmao');

    }
    return (
      <li className="hogbabies">
        <h1>{this.props.hog.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.hog.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>
          
        <button onClick={this.changeWeight} name="+">
          Increase Weight
        </button>
        <button onClick={this.changeWeight} name="-">
          Decrease Weight
        </button>

        <div className="hb-wrap">
          <img src={color} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
