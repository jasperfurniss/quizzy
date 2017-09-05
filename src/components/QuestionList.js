class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: QuestionsList
    }
  }

  render() {
    return (
      <div>
        {boxscore}
        <QuestionList setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} {...this.state}/>
        {results}
      </div>
    );
  }
}


import React from 'react';
import Question from './Question.js';

class QuestionList extends React.Component {
  render() {
    return(
      <div className="questions">
        {
          this.props.questions.map(question => {
            if (this.props.current === question.id) {
              return <Question question={question} key={question.id} {...this.props}/>
            }
          })
        }
      </div>
    );
  }
}

export default QuestionList;
