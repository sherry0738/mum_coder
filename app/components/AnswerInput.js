import React from 'react'
import './AnswerInput.scss'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class AnswerInput extends React.Component {
    constructor(props) {
        super(props);
        this.ansInputTextChange = this.ansInputTextChange.bind(this)
        this.emailForAIChange = this.emailForAIChange.bind(this)
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            answer: '',
            emailForAnsInput: '',
            maxTextLength: 400,
            open: false
        };

    };
    handleOpen(event) {
        this.setState({
            open: true
        });
    };

    handleClose(event) {
        this.setState({
            open: false
        });
    };

    handleSubmit(event) {
        //console.log('working');
        //let serviceUrl = 'http://localhost:3000/details'
        const reqBody = {
            email: this.state.emailForAnsInput,
            username: this.state.emailForAnsInput,
            answer: this.state.answer,
            id: this.props.questionId
        };
        //console.log(reqBody);
        let serviceUrl = 'http://ec2-13-211-123-215.ap-southeast-2.compute.amazonaws.com:3000/details'
        fetch(serviceUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        }).then(res => {
            console.log(res);
        })
        this.setState({
            open: false
        });
    }

    ansInputTextChange(event) {
        this.setState({
            answer: event.target.value
        })
        //console.log(this.state.answer)
    }
    emailForAIChange(event) {
        this.setState({
            emailForAnsInput: event.target.value
        })
        console.log(this.state.emailForAnsInput)
    }

    answerQue(event) {
        console.log("typing");
    }

    render() {
        const { maxTextLength,answer } = this.state;
        const isDisabled = answer.length <= 0 || answer.length > maxTextLength;
        const charsLeft = maxTextLength - answer.length;
        const spanClass = charsLeft < 20 ? 'answerInput_span--warning' : '';
        const actions = [ 
        <FlatButton label = "Cancel" primary = { true } onClick = { this.handleClose } />, 
        <FlatButton label = "Submit"  primary = { true } disabled = { isDisabled } onClick = { this.handleSubmit } />
        ];
        return ( <div>
            <RaisedButton  label = "Post Answer"  onClick = { this.handleOpen } /> 
            <Dialog title = "Write your answer here: "  actions = { actions } modal = { true } open = { this.state.open }
            onRequestClose = { this.handleClose } >
            <span style={{padding:'10px'}}>Your email:</span>
            <textarea className = "ansInputEmail_textarea"
            placeholder = "Your email"
            onChange = { this.emailForAIChange} > </textarea>
           
            <span style={{padding:'8px'}}>Your answer:</span>
            <textarea className = "answerInput_textarea"
            placeholder = ""
            onChange = { this.ansInputTextChange } > 
            </textarea> 
            <span style={{padding:'8px'}} className = {spanClass} > { charsLeft} </span> 
            </Dialog> 
            </div>
        );
    };
};

//export default AnswerInput;