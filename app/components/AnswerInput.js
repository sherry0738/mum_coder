import React from 'react'
import './AnswerInput.scss'

export default class AnswerInput extends React.Component {

    constructor(props) {
        super(props)
        this.ansInputTextChange = this.ansInputTextChange.bind(this)
        this.emailForAIChange = this.emailForAIChange.bind(this)
        this.state = {
            answer: '',
            emailForAnsInput: '',
            maxTextLength: 400
        }
        // This binding is necessary to make `this` work in the callback
        this.handleAnswerClick = this.handleAnswerClick.bind(this);
    }

    handleAnswerClick(event) {

        let serviceUrl = 'http://localhost:3000/details'
        //let serviceUrl = 'http://ec2-13-211-164-23.ap-southeast-2.compute.amazonaws.com:3000/details'
        fetch(serviceUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.emailForAnsInput,
                username: this.state.emailForAnsInput,
                answer: this.state.answer,
                id: this.props.questionId
            })
        }).then(res => {

                //console.log(res);
            })
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
        console.log("answering");
    }
    render() {
        // const maxTextLength = this.state.maxTextLength
        // const answer = this.state.answer

        //const emailForAnsInput = this.state.emailForAnsInput
        const { maxTextLength, answer } = this.state  // maping the stucture
        const isDisabled = answer.length <= 0 || answer.length > maxTextLength
        const charsLeft = maxTextLength - answer.length
        const spanClass = charsLeft < 20 ? 'answerInput_span--warning' : ''

        return (
            <div className="answerInput">
                <input
                    className="ansInputEmail_textarea"
                    placeholder="email"
                    onChange={this.emailForAIChange}></input>
                <textarea
                    className="answerInput_textarea"
                    placeholder="answer this question here ..."                 
                    onChange={this.ansInputTextChange}></textarea>
                <footer className="answerInput_footer">
                    <span className={spanClass} className="answerInput_count">{charsLeft}</span>
                   
                    {/* <span className="answerInput_span--warning">{maxTextLength - answer.length}</span> */}
                    <button onClick={this.handleAnswerClick} disabled={isDisabled} className="answerInput_save" >Submit</button>
                </footer>
            </div>
        )
    }
}

