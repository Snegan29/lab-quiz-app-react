import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='body'>
        <h1 className='result'>Result</h1>
        <div className='content'>
            <p>You exceeded my exectations!.</p>
            <h1>Your Score is 110%</h1>
            <div className='flex'>
                <p>Total Number of Queation</p>
                <p>100</p>
            </div>
            <div className='flex'>
                <p>Number of Attempted Questions</p>
                <p>100</p>
            </div>
            <div className='flex'>
                <p>Number of Correct Questions</p>
                <p>100+20</p>  
            </div>
            <div className='flex'>
                <p>Number of Wrong Answers</p>
                <p>32° Fahrenheit</p>
            </div>
        </div>
        <div>
            <button className='playagain'>Play Again</button>
            <button className='backtohome'>Back to Home</button>
        </div>
      </div>
    )
  }
}

