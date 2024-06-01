import React from "react";
import { FaUpload, FaDownload, FaSearch, FaFilter, FaCog } from "react-icons/fa";

export default function Grades() {
    return (
        <div className="container mt-4">
            <div className="mb-3">
                <button className="btn btn-outline-secondary">
                    <FaFilter /> Filter
                </button>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Grades</h3>
                <div>
                    <button className="btn btn-primary me-2">
                        <FaUpload className="me-1" /> Import
                    </button>
                    <div className="dropdown d-inline">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaDownload className="me-1" /> Export
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Export as CSV</a></li>
                            <li><a className="dropdown-item" href="#">Export as PDF</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-outline-secondary">
                        <FaCog /> Settings
                    </button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        <input type="text" className="form-control" placeholder="Search Student" />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        <input type="text" className="form-control" placeholder="Search Assignment" />
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Student</th>
                        <th scope="col">Assignment 1 (out of 100)</th>
                        <th scope="col">Assignment 2 (out of 100)</th>
                        <th scope="col">Assignment 3 (out of 100)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td><input type="text" className="form-control" defaultValue="85%" /></td>
                        <td>90%</td>
                        <td>88%</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>92%</td>
                        <td>87%</td>
                        <td>91%</td>
                    </tr>
                    <tr>
                        <td>Alice Johnson</td>
                        <td>78%</td>
                        <td>83%</td>
                        <td>80%</td>
                    </tr>
                    <tr>
                        <td>Bob Williams</td>
                        <td>85%</td>
                        <td>79%</td>
                        <td>90%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
