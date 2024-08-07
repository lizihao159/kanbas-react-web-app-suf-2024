import { useState } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import "./QuestionEditor.css";

export default function MCQAns() {
    const [answers, setAnswers] = useState([{ value: '', isEditable: false }]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleInputChange = (event: any, index: number) => {
        const newAnswers = [...answers];
        newAnswers[index].value = event.target.value;
        setAnswers(newAnswers);
    };

    const toggleEditability = (index: number) => {
        const newAnswers = [...answers];
        newAnswers[index].isEditable = !newAnswers[index].isEditable;
        setAnswers(newAnswers);
    };

    const addAnswer = () => {
        setAnswers([...answers, { value: '', isEditable: true }]);
    };

    const deleteAnswer = (index: number) => {
        const newAnswers = answers.filter((_, i) => i !== index);
        setAnswers(newAnswers);
    };

    const handleRadioChange = (index: any) => {
        setSelectedAnswer(index);
    };

    return (
        <div id="wd-add-question-array-state-variables">
            <ul className="list-group">
                <div className="row">
                    {answers.map((answer, index) => (
                        <div key={index} >
                            <li className="list-group-item col-12 mb-2 ms-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gridRadios"
                                            id={`MCQ-ans-${index}`}
                                            value={answer.value}
                                            checked={selectedAnswer === index}
                                            onChange={() => handleRadioChange(index)}

                                        />
                                        <label className="form-check-label ms-2 mb-0" htmlFor={`MCQ-ans-${index}`}>
                                            Possible Answer
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control ms-2"
                                            style={{ width: '200px' }}
                                            value={answer.value}
                                            onChange={(event) => handleInputChange(event, index)}
                                            readOnly={!answer.isEditable}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <FaPencil
                                            className="ms-2"
                                            onClick={() => toggleEditability(index)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <FaTrash
                                            className="ms-2"
                                            onClick={() => deleteAnswer(index)}
                                            id="wd-add-question-delete-element-click"
                                        />
                                    </div>
                                </div>
                            </li>
                        </div>
                    ))}
                </div>
            </ul>

            <button className="btn btn-success mb-2 float-end"
                onClick={addAnswer}>Add Another Answer</button>
        </div>
    );


}