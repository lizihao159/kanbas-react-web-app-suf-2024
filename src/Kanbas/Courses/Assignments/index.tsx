// src/Kanbas/Courses/Assignments/index.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { fetchAssignmentsForCourse, deleteAssignment as deleteAssignmentClient } from './client';
import { setAssignments, deleteAssignment as deleteAssignmentReducer } from './assignmentsReducer';
import './index.css';

interface RootState {
  assignmentsReducer: {
    assignments: Array<any>;
  };
}

const Assignments = ({ courseId }: { courseId: string }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchAssignments = async () => {
      const assignments = await fetchAssignmentsForCourse(courseId);
      dispatch(setAssignments(assignments));
    };

    fetchAssignments();
  }, [dispatch, courseId]);

  const handleDelete = async (id: string) => {
    await deleteAssignmentClient(id);
    dispatch(deleteAssignmentReducer(id));
  };

  const handleEdit = (id: string) => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${id}`);
  };

  const handleAddNew = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
  };

  const filteredAssignments = assignments.filter((assignment: any) =>
    assignment.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="assignments-container">
      <div className="assignments-header">
        <input
          type="text"
          placeholder="Search for Assignment"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="buttons-container">
          <button className="group-button">+Group</button>
          <button onClick={handleAddNew} className="assignment-button">+ Assignment</button>
        </div>
      </div>
      <div className="assignments-title-container">
        <h2 className="assignments-title">ASSIGNMENTS</h2>
      </div>
      <div className="assignments-list">
        {filteredAssignments.map((assignment: any) => (
          <div className="assignment-item" key={assignment._id}>
            <div className="assignment-title">{assignment.title}</div>
            <div className="assignment-details">
              <span>{assignment.description}</span>
              <span>Due: {assignment.dueDate}</span>
              <span>{assignment.points} pts</span>
            </div>
            <div className="assignment-actions">
              <button className="edit-button" onClick={() => handleEdit(assignment._id)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(assignment._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
