import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as db from '../../Database'; // Adjust the path as necessary

export default function AssignmentEditor() {
    const { assignmentId, cid: courseId } = useParams();
    const [assignment, setAssignment] = useState({
        title: '',
        description: '',
        points: '',
        dueDate: '',
        availableFrom: '',
        availableUntil: '',
        submissionType: 'online',
        assignTo: 'Everyone'
    });

    useEffect(() => {
        const currentAssignment = db.assignments.find(a => a._id === assignmentId);
        if (currentAssignment) {
            setAssignment({
                ...currentAssignment,
                dueDate: formatDate(currentAssignment.dueDate, true),
                availableFrom: formatDate(currentAssignment.availableFrom),
                availableUntil: formatDate(currentAssignment.availableUntil)
            });
        }
    }, [assignmentId]);

    if (!assignment) {
        return <div>Loading...</div>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAssignment(prevAssignment => ({
            ...prevAssignment,
            [name]: value
        }));
    };

    const handleSubmissionTypeChange = (e) => {
        setAssignment(prevAssignment => ({
            ...prevAssignment,
            submissionType: e.target.value
        }));
    };

    const formatDate = (date, isDueDate = false) => {
        if (!date) return '';
        const d = new Date(date);
        if (isDueDate) {
            d.setHours(23, 59, 0, 0);
        }
        const localISOTime = d.toISOString().slice(0, 16);
        if (isDueDate && localISOTime.endsWith("00:00")) {
            return localISOTime.replace("00:00", "23:59");
        }
        return localISOTime;
    };

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <h3>Assignment Editor: {assignment.title}</h3>
            <form>
                <div className="row mb-3">
                    <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
                    <div className="col-sm-10">
                        <input id="wd-name" name="title" className="form-control" value={assignment.title} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea id="wd-description" name="description" className="form-control" value={assignment.description} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                    <div className="col-sm-10">
                        <input id="wd-points" name="points" className="form-control" type="number" value={assignment.points} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-group" className="col-sm-2 col-form-label">Group</label>
                    <div className="col-sm-10">
                        <select id="wd-group" name="group" className="form-control" value={assignment.group || 'assignments'} onChange={handleInputChange}>
                            <option value="assignments">Assignments</option>
                            <option value="quizzes">Quizzes</option>
                            <option value="projects">Projects</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade As</label>
                    <div className="col-sm-10">
                        <select id="wd-display-grade-as" name="displayGradeAs" className="form-control" value={assignment.displayGradeAs || 'points'} onChange={handleInputChange}>
                            <option value="points">Points</option>
                            <option value="percentage">Percentage</option>
                            <option value="letter">Letter Grade</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                    <div className="col-sm-10">
                        <select id="wd-submission-type" name="submissionType" className="form-control" value={assignment.submissionType} onChange={handleSubmissionTypeChange}>
                            <option value="online">Online</option>
                            <option value="paper">Paper</option>
                            <option value="external-tool">External Tool</option>
                        </select>
                    </div>
                </div>

                {assignment.submissionType === 'online' && (
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-website-url" />
                                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                                <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                            </div>
                        </div>
                    </div>
                )}

                <div className="row mb-3">
                    <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign To</label>
                    <div className="col-sm-10">
                        <input id="wd-assign-to" name="assignTo" className="form-control" value={assignment.assignTo} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due Date</label>
                    <div className="col-sm-10">
                        <input id="wd-due-date" name="dueDate" className="form-control" type="datetime-local" value={assignment.dueDate} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-available-from" className="col-sm-2 col-form-label">Available From</label>
                    <div className="col-sm-10">
                        <input id="wd-available-from" name="availableFrom" className="form-control" type="datetime-local" value={assignment.availableFrom || ''} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-available-until" className="col-sm-2 col-form-label">Available Until</label>
                    <div className="col-sm-10">
                        <input id="wd-available-until" name="availableUntil" className="form-control" type="datetime-local" value={assignment.availableUntil || ''} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary">Cancel</Link>
                        <button type="submit" className="btn btn-danger">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
