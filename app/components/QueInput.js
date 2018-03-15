import React from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
//import MenuItem from 'material-ui/Menu/MenuItem';
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
//import FlatButton from "material-ui/FlatButton";
import TextField from 'material-ui/TextField';
import './QueInput.scss'
import RaisedButton from 'material-ui/RaisedButton';



export default class QueInput extends React.Component {

  constructor(props) {
    super(props)
    this.titleTextChange = this.titleTextChange.bind(this)
    this.emailForQIChange = this.emailForQIChange.bind(this)
    this.desTextChange = this.desTextChange.bind(this)
    this.state = {
      queTitle: '',
      emailForQueInput: '',
      queDescription: ''

    }
    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }
  handleQuestionClick(event) {

    let serviceUrl = 'http://localhost:3000/question'
    //let serviceUrl = 'http://ec2-13-211-123-215.ap-southeast-2.compute.amazonaws.com:3000/question'
    fetch(serviceUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.emailForQueInput,
        username: this.state.emailForQueInput,
        title: this.state.queTitle,
        description: this.state.queDescription
      })
    }).then(res => {

      //console.log(res);
    })
  }
  titleTextChange(event) {
    this.setState({
      queTitle: event.target.value
    })
    console.log(this.state.queTitle)
  }
  emailForQIChange(event) {
    this.setState({
      emailForQueInput: event.target.value
    })
    console.log(this.state.emailForQueInput)
  }

  desTextChange(event) {
    this.setState({
      queDescription: event.target.value
    })
    console.log(this.state.queDescription)
  }

  render() {
    return (
      <div className="queInput-textField-container">
        <Card className="queInput-card-panel">
          <CardHeader
            title="Got a question? Post it here"
            actAsExpander={true}
            showExpandableButton={true}
            className="queInput-cardHeader-title"
            titleStyle={{
              fontSize: '20px',
              color: 'green',
            }}
          />
          <CardText expandable={true} >
            <form>
              <div className="textfield-grid-container">
                <div>
                  <TextField
                    id=""
                    label=""
                    hintText="Question Title"
                    errorText="This field is required"
                    className="queTitle-textField"
                    value={this.state.queTitle}
                    onChange={this.titleTextChange}
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="multiline-flexible"
                    label="Multiline"
                    hintText="Question Descrition"
                    errorText="This field is required"
                    value={this.state.queDescription}
                    onChange={this.desTextChange}
                    className="queDescription-textField"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="required"
                    label="Required"
                    hintText="email"
                    errorText="This field is required"
                    defaultValue=""
                    onChange={this.emailForQIChange}
                    className="queInputEmail-textField"
                    margin="normal"
                  />
                </div>
                <div>
                  <RaisedButton className="queInput-Btn"
                    onClick={this.handleQuestionClick}
                    style={{ width: 50, marginRight: 5 }}>Save
              </RaisedButton>
                </div>
              </div>
            </form>
          </CardText>
        </Card>
      </div>
    );
  }
}

//         QueInput.propTypes = {
//           classes: PropTypes.object.isRequired,
// };

//export default withStyles(styles)(QueInput);
