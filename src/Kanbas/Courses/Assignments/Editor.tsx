import { useState } from 'react';

export default function AssignmentEditor() {
    const [submissionType, setSubmissionType] = useState('online');

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <h3>Assignment Editor</h3>
            <form>
                <div className="row mb-3">
                    <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
                    <div className="col-sm-10">
                        <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea id="wd-description" className="form-control">
                            The assignment is available online. Submit a link to the landing page of your project.
                        </textarea>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                    <div className="col-sm-10">
                        <input id="wd-points" className="form-control" type="number" value={100} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-group" className="col-sm-2 col-form-label">Group</label>
                    <div className="col-sm-10">
                        <select id="wd-group" className="form-control" defaultValue="assignments">
                            <option value="assignments">Assignments</option>
                            <option value="quizzes">Quizzes</option>
                            <option value="projects">Projects</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade As</label>
                    <div className="col-sm-10">
                        <select id="wd-display-grade-as" className="form-control">
                            <option value="points">Points</option>
                            <option value="percentage">Percentage</option>
                            <option value="letter">Letter Grade</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                    <div className="col-sm-10">
                        <select id="wd-submission-type" className="form-control" value={submissionType} onChange={(e) => setSubmissionType(e.target.value)}>
                            <option value="online">Online</option>
                            <option value="paper">Paper</option>
                            <option value="external-tool">External Tool</option>
                        </select>
                    </div>
                </div>

                {submissionType === 'online' && (
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
                        <input id="wd-assign-to" className="form-control" value="Everyone" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due Date</label>
                    <div className="col-sm-10">
                       
                    <input id="wd-due-date" className="form-control" type="date" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-available-from" className="col-sm-2 col-form-label">Available From</label>
                    <div className="col-sm-10">
                        <input id="wd-available-from" className="form-control" type="date" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-available-until" className="col-sm-2 col-form-label">Available Until</label>
                    <div className="col-sm-10">
                        <input id="wd-available-until" className="form-control" type="date" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-danger">Save</button>
                        <button type="button" className="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
