import React, { useState } from 'react'

function Calc() {
  const [display, setDisplay] = useState('0')
  const [formula, setFormula] = useState('')
  function handleClick(e) {
    setFormula((prevFormula) => prevFormula + e.target.outerText)
    switch (e.target.outerText) {
      case 'AC':
        setDisplay('0')
        setFormula('')
        break

      case '=':
        setDisplay(eval(formula))
        break

      default:
        setDisplay((prevDisplay) =>
          Number(prevDisplay)
            ? prevDisplay + e.target.outerText
            : e.target.outerText
        )
        break
    }
  }

  return (
    <div className='calc'>
      <div id='formula' className='formula'>
        {formula}
      </div>
      <div id='display' className='display'>
        <h2>{display}</h2>
      </div>
      <div className='btn-container'>
        <button onClick={(e) => handleClick(e)} id='clear'>
          AC
        </button>
        <button onClick={(e) => handleClick(e)} id='multiply'>
          *
        </button>
        <button onClick={(e) => handleClick(e)} id='divide'>
          /
        </button>
        <button onClick={(e) => handleClick(e)} id='seven'>
          7
        </button>
        <button onClick={(e) => handleClick(e)} id='eight'>
          8
        </button>
        <button onClick={(e) => handleClick(e)} id='nine'>
          9
        </button>
        <button onClick={(e) => handleClick(e)} id='subtract'>
          -
        </button>
        <button onClick={(e) => handleClick(e)} id='four'>
          4
        </button>
        <button onClick={(e) => handleClick(e)} id='five'>
          5
        </button>
        <button onClick={(e) => handleClick(e)} id='six'>
          6
        </button>
        <button onClick={(e) => handleClick(e)} id='add'>
          +
        </button>
        <button onClick={(e) => handleClick(e)} id='one'>
          1
        </button>
        <button onClick={(e) => handleClick(e)} id='two'>
          2
        </button>
        <button onClick={(e) => handleClick(e)} id='three'>
          3
        </button>
        <button onClick={(e) => handleClick(e)} id='zero'>
          0
        </button>
        <button onClick={(e) => handleClick(e)} id='equals'>
          =
        </button>
        <button onClick={(e) => handleClick(e)} id='decimal'>
          .
        </button>
      </div>
    </div>
  )
}

export default Calc
