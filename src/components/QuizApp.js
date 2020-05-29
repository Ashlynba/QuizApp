import React from 'react';
import Answers from './Answers';
import Header from './Header';
import Question from './Question';
import Result from './Result';
import quizQuestions from '../api/quizQuestions';

export default class QuizApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.setNextQuestion = this.setNextQuestion.bind(this);
        this.state = {
            counter: 0,
            correct: 0,
            questionId: 1,
            choice: '',
            quizResult: '',
            answerOptions: [],
            showComponent: true
        };
    }
    componentDidMount() {
        this.setState({
            question: quizQuestions[this.state.counter].question,
            answerOptions : quizQuestions[this.state.counter].answers
        });
    }
    handleAnswerSelected(e) {
        e.preventDefault();
        if(e.currentTarget.value === "true") {
            this.updateScore();
        }
        //console.log(e.currentTarget.value);
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
          } else {
            this.renderResult();  
          }
    }
    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        })
    }
    updateScore() {
        this.setState((prevState) => {
            return {
                correct: prevState.correct + 1
            };
        });
    }
    renderResult() {
        this.setState((prevState) => {
            return {
                showComponent: false
            }
        }) 
    }
    render() {
        return (
            <div>
                <Header />
                {
                    this.state.showComponent ?
                    <Question question={this.state.question} />
                     : <Result numCorrect={this.state.correct}/>
                }
                {
                    this.state.showComponent ?
                    <Answers 
                    handleAnswerSelected={this.handleAnswerSelected}
                    correctAnswer={quizQuestions[this.state.counter].correctAnswer}   
                    answerArray={this.state.answerOptions} 
                    /> : <p onClick={() => window.location.reload(false)} style={{cursor:'pointer'}}>Play Again?</p> 
                }
            </div>
        );
    }
}