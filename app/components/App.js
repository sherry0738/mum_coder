import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import QandAExpandable from './QandAExpandable'

import QueInput from './QueInput'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ""
    }
  }

  componentDidMount() {
    //let serviceUrl = 'http://localhost:3000/details'
    let serviceUrl = 'http://ec2-13-211-123-215.ap-southeast-2.compute.amazonaws.com:3000/details'
    fetch(serviceUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({ questions: res.questions })
        console.log(res);
      })
  }

  render() {
    const questions = this.state.questions;
    const answerInputs = this.state.answerInputs

    if (questions) {
      return (
        <MuiThemeProvider>
          <div className="app-container">
            <QueInput />
            <hr />
          </div>
          <h3>Recent Asked Questions</h3>
          {
            questions.map(question => {
              return (
                <div>
                  <QandAExpandable cardTitleText={question.title} questionId={question.id} question={question} cardAnswers={question.answers}></QandAExpandable>
                  <br />
                </div>
              )
            })
          }
        </MuiThemeProvider>
      );
    } else {
      return <div>loading...</div>
    }

  }

}


// function mapStateToProps(state) {
//   console.info(state)
//   return {
//     meetups: state.meetups,
//     meetup: state.meetup,
//     route: state.route,
//     session: state.session,
//     isFetching: state.isFetching
//   }
// }

export default App;



// return <div>
//      <AnswerTexter />
//      {answerTexters.map(function(answerTexter, index) {
//        return <p key={index}>{answerTexter}</p>
//        })}
//      {/* {answerTexters.map(answerTexter, index)} => <p key={index}>{answerTexter}</p> */}

//      </div>