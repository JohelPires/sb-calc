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
      if (d === '+' || d === '-' || d === '*' || d === '/') {
        setFormula(display)
        setDisplay(d)
      } else {
        setDisplay('')
        setFormula('')
      }
      setEndCalc(false)
    }
    // if (d === '.' && formula.includes('.')) {
    //   return
    // } else if (formula !== '0') {
    //   setFormula((prevFormula) => prevFormula + d)
    // } else {
    //   setFormula(d)
    // }
    if (Number(d) || d === '0') {
      display === '0' ||
      display === '+' ||
      display === '-' ||
      display === '/' ||
      display === '*'
        ? setDisplay(d)
        : setDisplay((prevDisplay) => prevDisplay + e.target.outerText)
      setFormula((prevFormula) => prevFormula + d)
    } else if (d === 'AC') {
      setDisplay('0')
      setFormula('')
    } else if (d === '+' || d === '*' || d === '/') {
      // Multiple operations clicked consecutively? choose the last:

      if (
        formula[formula.length - 1] === '+' ||
        formula[formula.length - 1] === '-' ||
        formula[formula.length - 1] === '*' ||
        formula[formula.length - 1] === '/'
      ) {
        const updateFormula = formula.slice(0, -1) + d
        console.log(updateFormula)

        setFormula(updateFormula)
      } else {
        setFormula((prevFormula) => prevFormula + d)
      }
      setDisplay(d)
    } else if (d === '-') {
      if (
        formula[formula.length - 1] === '+' ||
        formula[formula.length - 1] === '-' ||
        formula[formula.length - 1] === '*' ||
        formula[formula.length - 1] === '/'
      ) {
        const updateFormula = formula + d

        setFormula(updateFormula)
      } else {
        setFormula((prevFormula) => prevFormula + d)
      }
      setDisplay(d)
    } else if (d === '=' && display !== '0') {
      setEndCalc(true)
      setDisplay(eval(formula))
      setFormula((prevFormula) => prevFormula + '=' + eval(formula))
    } else if (d === '.') {
      if (!display.includes('.')) {
        if (
          display === '+' ||
          display === '-' ||
          display === '/' ||
          display === '*'
        ) {
          setDisplay(d)
        } else {
          setDisplay((prevDisplay) => prevDisplay + e.target.outerText)
          setFormula((prevFormula) => prevFormula + d)
        }
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
