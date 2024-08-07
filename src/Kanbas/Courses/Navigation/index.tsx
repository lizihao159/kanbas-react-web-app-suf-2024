import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams<{ cid: string }>();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="list-group rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item border-0 ${
            pathname.includes(link) ? "active" : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
