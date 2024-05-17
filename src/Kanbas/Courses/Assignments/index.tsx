export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
              </a>
              <ul>
                <li>Due: 2024-05-22 at 11:59pm</li>
                <li>100 pts</li>
                <li>Group: Assignments</li>
                <li>Display Grade As: Points</li>
                <li>Submission Type: Online</li>
              </ul>
        </li>
        <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
              </a>
              <ul>
                <li>Due: 2024-06-05 at 11:59pm</li>
                <li>100 pts</li>
                <li>Group: Assignments</li>
                <li>Display Grade As: Points</li>
                <li>Submission Type: Online</li>
              </ul>
        </li>
        <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
              </a>
              <ul>
                <li>Due: 2024-06-19 at 11:59pm</li>
                <li>100 pts</li>
                <li>Group: Assignments</li>
                <li>Display Grade As: Points</li>
                <li>Submission Type: Online</li>
              </ul>
        </li>
      </ul>
    </div>
);}
  