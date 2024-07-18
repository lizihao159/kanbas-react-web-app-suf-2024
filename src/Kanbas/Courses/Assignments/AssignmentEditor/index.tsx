// src/Kanbas/Courses/Assignments/AssignmentEditor/index.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { updateAssignment, addAssignment } from '../assignmentsReducer';
import { createAssignment, updateAssignment as updateAssignmentClient } from '../client';
import './AssignmentEditor.css';

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

interface AssignmentEditorProps {
  courseId: string;
}

const AssignmentEditor: React.FC<AssignmentEditorProps> = ({ courseId }) => {
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isNew = assignmentId === 'new';
  const assignment = isNew
    ? { course: courseId, title: 'New Assignment', _id: '', description: 'New Assignment Description', points: 100, dueDate: '', availableFrom: '', availableUntil: '', editing: true }
    : assignments.find((assignment: Assignment) => assignment._id === assignmentId);

  const [title, setTitle] = useState(assignment ? assignment.title : '');
  const [description, setDescription] = useState(assignment ? assignment.description : '');
  const [points, setPoints] = useState(assignment ? assignment.points : 0);
  const [dueDate, setDueDate] = useState(assignment ? assignment.dueDate : '');
  const [availableFrom, setAvailableFrom] = useState(assignment ? assignment.availableFrom : '');
  const [availableUntil, setAvailableUntil] = useState(assignment ? assignment.availableUntil : '');

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  const handleSave = async () => {
    const updatedAssignment = { ...assignment, title, description, points, dueDate, availableFrom, availableUntil };
    if (isNew) {
      const newAssignment = await createAssignment(courseId, updatedAssignment);
      dispatch(addAssignment(newAssignment));
    } else {
      await updateAssignmentClient(updatedAssignment);
      dispatch(updateAssignment(updatedAssignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="assignment-editor-container">
      <div className="form-group">
        <label>Assignment Title</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Points</label>
        <input type="number" className="form-control" value={points} onChange={(e) => setPoints(parseInt(e.target.value))} />
      </div>
      <div className="form-group">
        <label>Assign</label>
        <div className="d-flex justify-content-between">
          <div className="date-group">
            <label>Due</label>
            <input type="date" className="form-control" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
          <div className="date-group">
            <label>Available from</label>
            <input type="date" className="form-control" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)} />
          </div>
          <div className="date-group">
            <label>Until</label>
            <input type="date" className="form-control" value={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="form-actions">
        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        <button className="btn btn-danger" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AssignmentEditor;
