// src/Kanbas/Courses/Assignments/assignmentsReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Assignment {
  _id: string;
  title: string;
  description: string;
  course: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
  editing?: boolean;
}

interface AssignmentsState {
  assignments: Assignment[];
  assignment: Assignment;
}

const initialState: AssignmentsState = {
  assignments: [],
  assignment: {
    _id: "",
    title: "New Assignment 123",
    description: "New Assignment Description",
    course: ""
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }: PayloadAction<Assignment>) => {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, { payload: assignmentId }: PayloadAction<string>) => {
      state.assignments = state.assignments.filter((assignment) => assignment._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }: PayloadAction<Assignment>) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
    },
    setAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignment = action.payload;
    },
  },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
