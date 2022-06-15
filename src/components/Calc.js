import React from 'react'

function Calc() {
  return (
    <div className='calc'>
      <div className='btn-container'>
        <div className='display'>0</div>
        <button id='zero'>0</button>
        <button id='one'>1</button>
        <button id='two'>2</button>
        <button id='three'>3</button>
        <button id='four'>4</button>
        <button id='five'>5</button>
        <button id='six'>6</button>
        <button id='seven'>7</button>
        <button id='eight'>8</button>
        <button id='nine'>9</button>
        <button id='add'>+</button>
        <button id='subtract'>-</button>
        <button id='multiply'>x</button>
        <button id='divide'>/</button>
        <button id='decimal'>.</button>
        <button id='clear'>C</button>
      </div>
    </div>
  )
}

export default Calc