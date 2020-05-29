import React, {Component} from 'react'

class QuizQuestionButton extends Component {

    render(){
        function handleClick() {
            this.props.clickHandler(this.props.button_text)
        }

        return(
            <li>
                <button onClick = {this.handleClick}>
                    {this.props.button_text}
                </button>
            </li>
        )
    }
}

export default QuizQuestionButton;