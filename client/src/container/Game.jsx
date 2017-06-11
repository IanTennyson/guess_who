import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Filter from '../components/Filter'
import Drink from '../components/Drink'
import Result from '../components/Result'

class Game extends Component {
  constructor(){
    super();
    this.state = {
      drink: [
        {
          winner: false,
          name: "The Kraken",
          spirit: "Rum",
          src: "https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/092011/kraken_logo_new.png?itok=WMD7rhRo"
        },
        {
          winner: false,
          name: "Jameson",
          spirit: "Whiskey",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSxTdQ6dLLO0M3Wgryv5lxCYqDhNaL4I3DCAoMT9F3v1lRtHR"
        },
        {
          winner: false,
          name: "Sailor Jerry",
          spirit: "Rum",
          src: "http://europe.exposure.net/wp-content/uploads/2017/05/sailor-jerry-logo_200px.png"
        }
      ],
      result: null,
      correctAns: null,
      match: null
    }
    this.assignRandomWinner = this.assignRandomWinner.bind(this)
    this.checkWinner = this.checkWinner.bind(this);
    this.giveClue = this.giveClue.bind(this);
    this.assignRandomWinner();
  }

  assignRandomWinner(){
    const array = this.state.drink
    const randomWinner = array[Math.floor(Math.random() * array.length)];
    const randomWinnersIndex = array.indexOf(randomWinner)
    array[randomWinnersIndex].winner = true;
    this.state.correctAns = randomWinner
  }

  checkWinner(result){
    if(result === true){
      this.setState({result: "We Have A Winner!" })
    }else{
      this.setState({result: "Loser!" })
    }
  }

  giveClue(event){
    const chosenSpirit = event.target.value
    if(chosenSpirit === this.state.correctAns.spirit){
      if(this.state.match === null)
      this.setState({match: "Yes!"})
    }else{
      if(this.state.match === null)
      this.setState({match: "Nope!"})
    }
    
  }

  render() {
    return (
      <div className="page-div">
        <Header header="Guess Who?"/>
        <Filter clue={this.state.match} onSpiritSelected={this.giveClue}/>
        <Drink index="0" drinks={this.state.drink[0]} onNameClicked={this.checkWinner}/>
        <Drink index="1" drinks={this.state.drink[1]} onNameClicked={this.checkWinner}/>
        <Drink index="2" drinks={this.state.drink[2]} onNameClicked={this.checkWinner}/>
        <Result result={this.state.result} />
      </div>
    )
  }
}

export default Game
