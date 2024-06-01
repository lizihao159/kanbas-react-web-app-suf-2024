import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { SlNote } from "react-icons/sl"; // Importing the SlNote icon
import LessonControlButtons from '../Modules/LessonControlButtons';

export default function Assignments() {
    return (
        <div id="wd-assignments" className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                    <FaSearch className="fs-4 me-2" />
                    <input id="wd-search-assignment" placeholder="Search for Assignments" className="form-control me-2" />
                </div>
                <div>
                    <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
                        <FaPlus className="me-1" /> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-danger">
                        <FaPlus className="me-1" /> Assignment
                    </button>
                </div>
            </div>
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-silver">
                    <div className="wd-title p-3 ps-2" style={{ backgroundColor: '#f2f2f2', color: 'black' }}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3 text-white" />
                                <span className="text-black">ASSIGNMENTS</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="badge rounded-circle border border-grey text-dark" style={{ padding: '10px', minWidth: '50px', textAlign: 'center' }}>
                                    40% of Total
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="wd-assignment list-group-item p-3 ps-2 border-bottom mb-0 d-flex align-items-center justify-content-between" style={{ borderLeft: '3px solid green' }}>
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-5 text-muted" />
                                <SlNote className="me-2 fs-5 text-muted" size={32} />
                                <div>
                                    <a className="wd-assignment-link assignment-label" href="#/Kanbas/Courses/1234/Assignments/123" style={{ fontWeight: 'bold', color: 'black', fontSize: '1.5rem' }}>
                                        A1
                                    </a>
                                    <ul className="list-unstyled ms-0 mt-2">
                                        <li><strong>Not available until:</strong> 2024-05-15 11:59pm</li>
                                        <li><strong>Due:</strong> 2024-05-22 11:59pm</li>
                                        <li>100 pts</li>
                                        <li>Group: Assignments</li>
                                        <li>Display Grade As: Points</li>
                                        <li>Submission Type: Online</li>
                                    </ul>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </div>
                        <div className="wd-assignment list-group-item p-3 ps-2 border-bottom mb-0 d-flex align-items-center justify-content-between" style={{ borderLeft: '3px solid green' }}>
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-5 text-muted" />
                                <SlNote className="me-2 fs-5 text-muted" size={32} />
                                <div>
                                    <a className="wd-assignment-link assignment-label" href="#/Kanbas/Courses/1234/Assignments/123" style={{ fontWeight: 'bold', color: 'black', fontSize: '1.5rem' }}>
                                        A2
                                    </a>
                                    <ul className="list-unstyled ms-0 mt-2">
                                        <li><strong>Not available until:</strong> 2024-05-15 11:59pm</li>
                                        <li><strong>Due:</strong> 2024-06-05 11:59pm</li>
                                        <li>100 pts</li>
                                        <li>Group: Assignments</li>
                                        <li>Display Grade As: Points</li>
                                        <li>Submission Type: Online</li>
                                    </ul>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </div>
                        <div className="wd-assignment list-group-item p-3 ps-2 border-bottom d-flex align-items-center justify-content-between" style={{ borderLeft: '3px solid green' }}>
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-5 text-muted" />
                                <SlNote className="me-2 fs-5 text-muted" size={32} />
                                <div>
                                    <a className="wd-assignment-link assignment-label" href="#/Kanbas/Courses/1234/Assignments/123" style={{ fontWeight: 'bold', color: 'black', fontSize: '1.5rem' }}>
                                        A3
                                    </a>
                                    <ul className="list-unstyled ms-0 mt-2">
                                        <li><strong>Not available until:</strong> 2024-05-15 11:59pm</li>
                                        <li><strong>Due:</strong> 2024-06-19 11:59pm</li>
                                        <li>100 pts</li>
                                        <li>Group: Assignments</li>
                                        <li>Display Grade As: Points</li>
                                        <li>Submission Type: Online</li>
                                    </ul>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
