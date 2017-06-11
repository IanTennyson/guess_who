import React from 'react'
import { render } from 'react-dom'
import Game from './container/Game'



window.onload = () => {
  render(
    <Game />,
    document.getElementById('app')
  )
}
