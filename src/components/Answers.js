import React from 'react';

const Answers = (props) => (
    <div>
        <ul className="answerList">   
            {props.answerArray.map((answers, index) => 
                <li className="fadeIn2" key={index}>
                    <label className="container">
                        <input 
                        onClick={props.handleAnswerSelected}
                        type="radio" 
                        name="choice"
                        value={index === props.correctAnswer}
                        />
                        {answers}
                    </label>
                </li>
            )}
        </ul>
    </div>
);
export default Answers;