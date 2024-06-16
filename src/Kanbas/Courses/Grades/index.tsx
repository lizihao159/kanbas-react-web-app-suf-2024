import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Grades() {
  const { cid } = useParams();

  // Get the students enrolled in the current course
  const enrolledStudents = db.enrollments
    .filter((enrollment) => enrollment.course === cid)
    .map((enrollment) => {
      const student = db.users.find((user) => user._id === enrollment.user);
      return student;
    });

  // Get the assignments for the current course
  const courseAssignments = db.assignments.filter((assignment) => assignment.course === cid);

  // Get grades for the current course's assignments
  const getStudentGrades = (studentId: string, assignmentId: string) => {
    const gradeRecord = db.grades.find(
      (grade) => grade.student === studentId && grade.assignment === assignmentId
    );
    return gradeRecord ? gradeRecord.grade : "N/A";
  };

  return (
    <div id="wd-grades" className="container mt-4">
      <h3>Grades</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student</th>
            {courseAssignments.map((assignment) => (
              <th key={assignment._id}>{assignment.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {enrolledStudents.map((student) => (
            <tr key={student?._id}>
              <td>{`${student?.firstName} ${student?.lastName}`}</td>
              {courseAssignments.map((assignment) => (
                <td key={assignment._id}>{getStudentGrades(student?._id ?? '', assignment._id ?? '')}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
