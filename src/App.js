import React, { Component } from 'react'
import gh from './gh.png'
import './App.css'
import { Button } from 'react-materialize'
import QuestionsList from './api/questions'
import Question from './components/Question'



class App extends Component {
  componentWillMount() {
    console.log("Component Mounted");
    this.setState({
      questions_list: QuestionsList,
      current_question: 0,
      current_score: 0,
      question_text: QuestionsList[0].question_text
    });
  }

  componentDidMount() {
    console.log(this.state.current_score)
    console.log(this.state.questions_list[0].question_text);
  }

  gotoNextQuestion(event) {
    this.setState({
      current_question: this.state.current_question + 1
    }, function () {
      console.log(this.state.current_question)
      console.log(this.state.question_text)
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className="container">

            {
              this.state.questions_list.map(question => {
                if (this.state.current_question === question.id) {
                  return <Question key={question.id} text={this.state.question_text} current_question={this.state.current_question} {...this.props} />
                }
              })
            }

            <Button className="btn" onClick={this.gotoNextQuestion.bind(this)}>Next</Button>
          </div>
        </div>
      </div>
    );
  }
}


// Answer Component
const AnswerCard = (props) => {
    <div>{props.text}</div>
}


export default App;
