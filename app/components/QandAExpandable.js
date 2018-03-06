import React from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import AnswerInput from './AnswerInput'
//import Button from "material-ui/Button";
import './QandAExpandable.scss'

class QandAExpandable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnswers: null
    };
  }
  render() {
    return (
      <div>
      <h5>Recent Asked Questions</h5>
      <Card className="card_panel">
        <CardHeader
          title= {`Question:  ${this.props.question.title}`}
          subtitle={`Description: ${this.props.question.description} (${this.props.question.answer.length} answers)`}
          actAsExpander={true}
          showExpandableButton={true}
          style={{
            fontSize: '40px',
          }}
        />
        {/* <CardActions expandable={true}>
          <FlatButton>Answer this question</FlatButton>

        </CardActions> */}

        {
          this.props.cardAnswers.map((item, index) => {
            return (

              <CardText expandable={true} > {item.user}: {item.answer} </CardText>

            )
          })}
        <AnswerInput questionId={this.props.questionId} />
      </Card>
      </div>
    );
  }
}


export default QandAExpandable;