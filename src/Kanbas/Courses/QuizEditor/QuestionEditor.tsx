import { useState } from "react";
import QuestionTextEditor from "./QuestionTextEditor";
import "./QuestionEditor.css";
import { LuArrowBigRight } from "react-icons/lu";
import FillInBlankAns from "./FillInBlankAns";
import MCQAns from "./MCQAns";

export default function QuestionEditor() {
    const [questionType, setQuestionType] = useState("Multiple Choice");

    function getQuestionType() {
        switch (questionType) {
            case "0":
                return <div id="wd-quizzes-multiple-choice-question">
                    Enter your questions and multiple answers, then select the correct answer.
                    <QuestionTextEditor />
                    <h1 style={{ fontSize: "2rem" }}>Answers:</ h1>
                    <div className="col-8">
                        <MCQAns />
                    </div>

                </div>;
            case "1":
                return <div id="wd-quizzes-true-false-question">
                    Enter your question text, then select if True or False is the correct answer
                    <QuestionTextEditor />
                    <h1 style={{ fontSize: "2rem" }}>Answers:</h1>
                    <div className="form-check">
                        <input className="form-check-input wd-quizzes-add-question-custom-radio"
                            type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label wd-quizzes-add-question-custom-label"
                            htmlFor="flexRadioDefault1">
                            <LuArrowBigRight className="wd-add-question-custom-arrow" />
                            True
                        </label> </div>
                    <div className="form-check">
                        <input className="form-check-input wd-quizzes-add-question-custom-radio"
                            type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label wd-quizzes-add-question-custom-label"
                            htmlFor="flexRadioDefault2">
                            <LuArrowBigRight className="wd-add-question-custom-arrow" />
                            False
                        </label>
                    </div>

                </div>;
            case "2":
                return <div id="wd-quizzes-fill-in-the-blank-question">
                    Enter your question text, then define all possible correct answers for the blank.<br />
                    Students will see the question followed by a small text box to type their answer.
                    <QuestionTextEditor />
                    <h1 style={{ fontSize: "2rem" }}>Answers:</h1>
                    <div className="col-8">
                        <FillInBlankAns />
                    </div>
                </div>;
        }
    }

    return (

        <div id="wd-add-question-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Add Question </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="clearfix">
                            <div className=" d-inline me-3 float-start">
                                <select className="form-select">
                                    <option selected>Easy Question</option>
                                    <option value="1">Medium Question</option>
                                    <option value="2">Difficul Question</option>

                                </select>
                            </div>
                            <div className="d-inline me-1 float-start">
                                <select className="form-select"
                                    onClick={(e: any) => {
                                        setQuestionType(e.target.value);
                                    }}>
                                    <option value="0" selected >Multiple Choice</option>
                                    <option value="1">True/False</option>
                                    <option value="2">Fill in the Blank</option>
                                </select>
                            </div>
                            <div className="d-flex me-1 float-end align-items-center">
                                <label className="mb-0 me-1">Points</label>
                                <input type="number" className="ms-2 form-control" style={{ width: '100px' }} />
                            </div>
                        </div>
                        <div className="col" id="wd-quizzes-question-editor-body">
                            <hr />
                            {getQuestionType()}
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel </button>
                        <button type="button" data-bs-dismiss="modal" className="btn btn-danger">
                            Add Question </button>
                    </div>
                </div>
            </div>
        </div>
    );
}