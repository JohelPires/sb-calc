import React, { useState } from 'react'

function Calc() {
  const [display, setDisplay] = useState('0')
  const [formula, setFormula] = useState('')

  // essa variavel marca o final da formula, após o sinal de igual ter sido clicado e o resultado mostrado.
  const [endCalc, setEndCalc] = useState(false)
  //   let endCalc = false

  // MUDAR O SWITCH PARA IFs:

  function handleClick(e) {
    const d = e.target.outerText
    if (endCalc) {
      setDisplay('')
      setFormula('')
      setEndCalc(false)
    }
    if (d === '.' && formula.includes('.')) {
      return
    } else if (formula !== '0') {
      setFormula((prevFormula) => prevFormula + d)
    } else {
      setFormula(d)
    }
    if (Number(d) || d === '0') {
      display === '0' ||
      display === '+' ||
      display === '-' ||
      display === '/' ||
      display === '*'
        ? setDisplay(d)
        : setDisplay((prevDisplay) => prevDisplay + e.target.outerText)
    } else if (d === 'AC') {
      setDisplay('0')
      setFormula('')
    } else if (d === '+' || d === '-' || d === '*' || d === '/') {
      setDisplay(d)
    } else if (d === '=' && display !== '0') {
      setEndCalc(true)
      setDisplay(eval(formula))
      setFormula((prevFormula) => prevFormula + eval(formula))
    } else if (d === '.') {
      if (!display.includes('.')) {
        display === '+' || display === '-' || display === '/' || display === '*'
          ? setDisplay(d)
          : setDisplay((prevDisplay) => prevDisplay + e.target.outerText)
      }
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
