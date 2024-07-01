import React, { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { deleteAssignment } from "./assignmentsReducer";
import './index.css';

interface RootState {
  assignmentsReducer: {
    assignments: Array<Assignment>;
  };
}

interface Assignment {
  course: string;
  title: string;
  _id: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  editing: boolean;
}

interface AssignmentsProps {
  courseId: string;
}

const Assignments: React.FC<AssignmentsProps> = ({ courseId }) => {
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
  };

  const handleEditAssignment = (assignment: Assignment) => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
  };

  const filteredAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === courseId && assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="row mb-3">
        <div className="col-3">
          <div className="input-group">
            <span className="input-group-text wd-input-logo wd-input-group-search-assignment" id="assignment-search-icon">
              <GoSearch />
            </span>
            <input
              type="text"
              className="form-control wd-input-textbar"
              placeholder="Search for Assignment"
              aria-label="Search for assignment"
              aria-describedby="assignment-search-icon"
              value={searchTerm}
              onChange={handleSearchChange}
              id="search-assignment"
              name="search-assignment"
            />
          </div>
        </div>
        <div className="col-3">
          <button className="btn btn-danger" onClick={handleAddAssignment}>+ Assignment</button>
        </div>
        <div className="col"></div>
      </div>
      <div className="assignments-header">
        <h4 className="me-3 wd-assignments-section-title">Assignments</h4>
      </div>
      <div className="list-group">
        {filteredAssignments.map((assignment: Assignment) => (
          <div key={assignment._id} className="list-group-item assignment-item wd-assignment-list-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{assignment.title}</h5>
                <p className="text-muted">Due {new Date(assignment.dueDate).toLocaleDateString()} at {new Date(assignment.dueDate).toLocaleTimeString()} | {assignment.points} pts</p>
              </div>
              <div className="assignment-actions">
                <button onClick={() => handleEditAssignment(assignment)} className="btn btn-link">Edit</button>
                <button onClick={() => dispatch(deleteAssignment(assignment._id))} className="btn btn-link text-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
