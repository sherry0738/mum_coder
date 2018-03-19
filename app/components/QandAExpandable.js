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
                <CardText expandable={true} > 
                  <ul class="list-unstyled">
                    <li class="media">
                      <img class="mr-3" src="https://conferencecloud-assets.s3.amazonaws.com/default_avatar.png" alt="user avatar" style={{ width:'10%',}}/>
                      <div class="media-body">
                        <h6 class="mt-0 mb-1">{this.userNameShow(item.user)} :</h6>
                        {item.answer}
                      </div>
                    </li>
                  </ul>
                </CardText>
              );
            })
          }
          <AnswerInput questionId={this.props.questionId} />
        </Card>
      </div>
    );
  }
}

export default QandAExpandable;