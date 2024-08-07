import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../Database";
import PeopleTable from "./People/Table";
import QuizDetails from "./Quizzes/Details";
import QuizEditor from "./QuizEditor";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments courseId={cid || ''} />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor courseId={cid || ''} />} />
            <Route path="Quizzes/:qid/Preview" element={"Quiz Preview Page"} />     {/* Path to Preview */}
            <Route path="Quizzes/:qid/Editor" element={"Quiz Edit Page"} />           {/* Path to Edit */}
            <Route path="Grades" element={<Grades />} />
            <Route path="Quizzes/*" element={<QuizEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
