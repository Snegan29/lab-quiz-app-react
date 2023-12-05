import React, { Component } from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
      <div className='body'>
        <div className='content'>
            <h1>Question</h1>
            <p className='questionNo'>1 of 15</p>
            <p >What do you think of your height?</p>
            <div className='answerBtns'>
                <button> I'm satisfied</button>
                <button>I need a lil' more</button>
                <button>Not mentioning</button>
                <button>Don't Know</button>
            </div>
            <div className='buttons'>
                <button className='prevBtn'>Prev</button>
                <button className='nextBtn'>Next</button>
                <button className='quitBtn'>Quit</button>
            </div>
        </div>
      </div>
    )
  }
}
