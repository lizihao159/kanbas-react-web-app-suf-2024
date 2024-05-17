export default function Modules() {
    return (
        <div>
            {/* Collapse All button, View Progress button, etc. */}
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
                            </ul>
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    <a href="https://docs.google.com/presentation/d/1yb_fQd5MhVuFczb5F5II0CoDkVJALFqxUnuwPAXiOAU/edit#slide=id.g40a3481019_0_0" target="_blank" rel="noopener noreferrer">
                                        Introduction to Web Development
                                    </a>
                                </li>
                                <li className="wd-content-item">
                                    <a href="https://docs.google.com/presentation/d/16yDwIH8np-tQL85g4bpmrsDfO8LaW38jr-fMQirLnoQ/edit#slide=id.p" target="_blank" rel="noopener noreferrer">
                                        Creating an HTTP server with Node.js
                                    </a>
                                </li>
                                <li className="wd-content-item">
                                    <a href="https://docs.google.com/presentation/d/10B3jLiJ8-HMsA6TPq9JuWfJzsvX9SFnYVuhthrQbFwU/edit#slide=id.p" target="_blank" rel="noopener noreferrer">
                                        Creating a React Application
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    <a href="https://docs.google.com/presentation/d/1EgHSRyWc5ylFgKEOaiKnQVTV3QT_FL2M6w3EjeKRh64/edit#slide=id.g4097894cfb_0_0" target="_blank" rel="noopener noreferrer">
                                    Introduction to HTML and the DOM 
                                    </a>
                                </li>
                                <li className="wd-content-item">
                                    <a href="https://docs.google.com/presentation/d/1RtMNp8HTDiGi-H8G-n1u67M3kL4BNRoopOXLG-fPZH0/edit#slide=id.g41cb8fe74c_0_5" target="_blank" rel="noopener noreferrer">
                                    Formatting Web content with Headings and Paragraphs
                                    </a>
                                </li>
                                <li className="wd-content-item">
                                    <a href="https://docs.google.com/presentation/d/1aKSiEcPMiNdsSkt3VcpdT2kzn3tD2U1xRezgKpP7_eU/edit#slide=id.g10f90da690b_0_6" target="_blank" rel="noopener noreferrer">
                                    Formatting content with Lists and Tables
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
