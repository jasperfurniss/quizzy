import React, { Component } from 'react'
import QuestionsList from '../api/questions'

// Question Component
class Question extends Component {
  render() {
    const {question} = this.props;
    return(
      <div className="card">
        <div className="card-content">
          <h1>{question.question_text}</h1>
          <h4>
            <ul>
              {QuestionsList.filter((item, index) =>
             (item.id == 0)).map(item =>
                  <li key={item.id}>{item.question_text}</li>)}
            </ul>
          </h4>
        </div>
      </div>
    );
  }
}

export default Question;
