import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import "./QuestionEditor.css";

export default function FillInBlankAns() {
    const [array, setArray] = useState([" "]);
    const addElement = () => {
        setArray([...array, " "]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-add-question-array-state-variables">
            <ul className="list-group">
                <div className="row">
                    {array.map((item, index) => (
                        <div key={index} >
                            <li className="list-group-item col-12 mb-2 ms-5">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label className="d-flex align-items-center mb-0">
                                        Possible Answer:
                                        <input type="text" className="form-control ms-2" style={{ width: '200px' }} />
                                    </label>
                                    <FaTrash
                                        className="ms-2"
                                        onClick={() => deleteElement(index)}
                                        id="wd-add-question-delete-element-click"
                                    />
                                </div>
                            </li>
                        </div>
                    ))}
                </div>
            </ul>

            <button className="btn btn-success mb-2 float-end"
                onClick={addElement}>Add Another Answer</button>
        </div>
    );
}