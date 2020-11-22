import React from 'react'
import { connect } from 'react-redux'

import { fetchQuiz } from '../actions'

export class App extends React.Component {
  
  handleAnswer(selected) {
    let result = 0
    console.log(selected)
    if((selected).isCorrect) {
      result++
    }
    console.log(result)
      return result
  }


  componentDidMount () {
    this.props.dispatch(fetchQuiz())
  
  }
  
  
  decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  answersArray (correct, incorrect) {
    console.log(correct)
    incorrect.push(correct)
    return incorrect
  }

  question = this.decodeHTML(this.props.question) 

  render () {
    return (
      <div className='app'>
        <h1>Quiz Time!</h1>
        <div class='question'><ul>
       
           {this.props.quiz.map((question, index) => (
            <li key={index}> {question.question} <div class='answers'>

           <button class='answerButton' onClick={this.handleAnswer}>{this.answersArray(question.correct_answer, question.incorrect_answers)[0]}</button>
           <button class='answerButton' onClick={this.handleAnswer}>{this.answersArray(question.correct_answer, question.incorrect_answers)[1]}</button>
           <button class='answerButton' onClick={this.handleAnswer}>{this.answersArray(question.correct_answer, question.incorrect_answers)[2]}</button>
           <button class='answerButton' onClick={this.handleAnswer}>{this.answersArray(question.correct_answer, question.incorrect_answers)[3]}</button>
 
             </div>
            </li>
          
          ))}
        </ul>
        </div>
           <div class='score'><h3>Your score is {this.result}</h3></div>
      </div>
    )
  }
}


function mapStateToProps (globalState) {
  return {
    quiz: globalState.questions
  }
}

export default connect(mapStateToProps)(App)
