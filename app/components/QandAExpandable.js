import React from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import AnswerInput from './AnswerInput'
import './QandAExpandable.scss'

class QandAExpandable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnswers: null
    };
  };

  userNameShow(user) {
    return user ? user : "guest";
  };

  render() {

    return (
      <div>

        <Card className="card_panel">
          <CardHeader
            title={`Question:  ${this.props.question.title} (${this.props.question.answers.length} answers)`}
            subtitle={`Description: ${this.props.question.description}`}
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{
              fontSize: '18px',
            }}
          />
          {
            this.props.cardAnswers.map((item, index) => {

              return (
                <CardText expandable={true} > {this.userNameShow(item.user)}:  {item.answer}

                </CardText>
              )
            })
          }
          <AnswerInput questionId={this.props.questionId} />
        </Card>
      </div>
    );
  }
}

export default QandAExpandable;