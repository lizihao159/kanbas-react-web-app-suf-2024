import { FaPlus } from "react-icons/fa6";
import QuestionEditor from "./QuestionEditor";

export default function Questions() {
    return (
        <div id="wd-quizzes-question" className="text-nowrap">

            <div className="text-center">
                <button id="wd-add-questionn-btn" className="btn btn-lg btn-secondary me-1"
                    data-bs-toggle="modal" data-bs-target="#wd-add-question-dialog">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    New Question
                </button>
            </div>
            <QuestionEditor />

        </div>
    );
}