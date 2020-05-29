import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    }

    render(){
        function showNextQuestion(){
            this.setState({quiz_position : this.state.quiz_position + 1})
        }
        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length ? true : false
        if(isQuizEnd){
            return(
                <QuizEnd />
            )
        } else{
            return(
                <div>
                    <div className = 'QuizQuestion'>
                        <QuizQuestion 
                            showNextQuestionHandler = {this.showNextQuestion}
                            quiz_question = {quizData.quiz_questions[this.state.quiz_position - 1]}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default Quiz;