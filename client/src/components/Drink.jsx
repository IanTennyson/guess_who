import React from 'react'

class Drink extends React.Component {
  constructor(props){
    super(props);
    // this.changeSrc = this.changeSrc.bind(this);
  }

render(){
  return (
  <div className="drinks-container">
    <input type="image" src={this.props.drinks.src} className="drink-img-btn" onClick={this.changeSrc.bind(this)} />
    <button className="drink-name-btn" key={this.props.drinks.index} value={this.props.drinks.winner} onClick={this.onDrinkNameClicked.bind(this)}>{this.props.drinks.name}</button>
  </div>
  )
}

onDrinkNameClicked(){
this.props.onNameClicked(this.props.drinks.winner)
}

changeSrc(event){
  const newSrc = "http://www.ediblegeography.com/wp-content/uploads/2010/08/Lips-that-touch-liquor.jpg"
  this.setState({src: newSrc});
  event.target.src = newSrc
}

}

export default Drink

