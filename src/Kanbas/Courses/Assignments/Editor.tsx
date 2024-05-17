import { useState } from 'react';

export default function AssignmentEditor() {
    const [submissionType, setSubmissionType] = useState('online');

    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            
            <textarea id="wd-description">
                The assignment is available online. Submit a link to the landing page of your project.
            </textarea>
            <br /><br />
            
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-ppoints" type="number" value={100} />
                    </td>
                </tr>
                <br /><br />
                
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Group</label>
                    </td>
                    <td>
                        <select id="wd-group" defaultValue="assignments">
                            <option value="assignments">ASSIGNMENTS</option>
                            <option value="quizzes">QUIZZES</option>
                            <option value="projects">PROJECTS</option>
                        </select>
                    </td>
                </tr>
                <br /><br />
                
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="points">Points</option>
                            <option value="percentage">Percentage</option>
                            <option value="letter">Letter Grade</option>
                        </select>
                    </td>
                </tr>
                <br /><br />
                
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" value={submissionType} onChange={(e) => setSubmissionType(e.target.value)}>
                            <option value="online">Online</option>
                            <option value="paper">Paper</option>
                            <option value="external-tool">External Tool</option>
                        </select>
                    </td>
                </tr>
                <br /><br />
                
                {submissionType === 'online' && (
                    <tr>
                        <td align="right" valign="top">
                            <label>Online Entry Options</label>
                        </td>
                        <td>
                            <input type="checkbox" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />
                            <input type="checkbox" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />
                            <input type="checkbox" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                            <input type="checkbox" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                            <input type="checkbox" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Upload</label><br />
                        </td>
                    </tr>
                )}
                <br /><br />
                
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>
                <br /><br />
                
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due Date</label>
                    </td>
                    <td>
                        <input id="wd-due-date" type="date" />
                    </td>
                </tr>
                <br /><br />
                
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td>
                        <input id="wd-available-from" type="date" />
                    </td>
                </tr>
                <br /><br />
                
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Available Until</label>
                    </td>
                    <td>
                        <input id="wd-available-until" type="date" />
                    </td>
                </tr>
            </table>
        </div>
    );
}
