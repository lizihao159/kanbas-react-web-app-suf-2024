import { Navigate, Route, Routes } from "react-router-dom";
import Tab from "./Tab";
import Questions from "./Questions";
import QuizDetails from "../Quizzes/Details"; // Import the QuizDetails component

export default function QuizEditor() {
  return (
    <div className="container m-1 p-3">
      <div className="row">
        <div className="col-2">
          <div className="d-none d-md-block">
            <Tab /> {/* Ensure this component has correct paths for navigation */}
          </div>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-12">
          <Routes>
            <Route path="/" element={<Navigate to="Details" />} /> {/* Navigate to Details by default */}
            <Route path="Details" element={<QuizDetails />} /> {/* Use the QuizDetails component */}
            <Route path="Questions" element={<Questions />} /> {/* Render Questions component */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
