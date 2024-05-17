export default function FormExercise() {
    return (
        <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
        <h5>Text Fields</h5>
        <label htmlFor="wd-text-fields-username">Username:</label>
        <input id="wd-text-fields-username" placeholder="zihao" /> 
        <br />
        <label htmlFor="wd-text-fields-password">Password:</label>
        <input type="password" id="wd-text-fields-password" value="123@#$asd" />
        <br />
        <label htmlFor="wd-text-fields-first-name">First name:</label>
        <input type="text" id="wd-text-fields-first-name" placeholder="Zihao"
        value="Zihao" title="The first name" />
        <br />
        <label htmlFor="wd-text-fields-last-name">Last name:</label>
        <input type="text" id="wd-text-fields-last-name" placeholder="Li"
        value="Li" title="The last name" /> 
        <br />
        <input 
            type="text"
            id = "wd-text-fields-last-name"
            placeholder="Li"
            title="The last name"
            value="Li"
        />
        <h5>Text boxes</h5>
        <label>Biography:</label><br/>
        <textarea id="wd-textarea" cols={30} rows={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve
            niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
            ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate v
            elit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec
            at cupidatat non proident, sunt in culpa qui officia deserunt mollit an
            im id est laborum.
            </textarea>
        <br />
        <h5 id="wd-buttons">Buttons</h5>
        <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
        Hello World!
        </button>
        <h5>File upload</h5>
        <input id="wd-upload" type="file"/>
        <br />
        <h5 id="wd-radio-buttons">Radio buttons</h5>

        <label>Favorite movie genre:</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
        <label htmlFor="wd-radio-comedy">Comedy</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-drama"/>
        <label htmlFor="wd-radio-drama">Drama</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
        <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
        <label htmlFor="wd-radio-fantasy">Fantasy</label>
        <br />
        <label>Favorite colors:</label>
        <br />
        <input type="radio" name="radio-clors" id="wd-radio-yellow" />
        <label htmlFor="wd-radio-yellow">Yellow</label>
        <br />
        <input type="radio" name="radio-clors" id="wd-radio-red" />
        <label htmlFor="wd-radio-red">Red</label>
        <br />
        <input type="radio" name="radio-clors" id="wd-radio-blue" />
        <label htmlFor="wd-radio-blue">Blue</label>
        <br />
        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite movie genre:</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
        <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
        <label htmlFor="wd-chkbox-drama">Drama</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
        <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
        <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
        <h4 id="wd-dropdowns">Dropdowns</h4>
        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre">
            Favorite movie genre: </label><br/>
        <select id="wd-select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
            Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
        </select>
        <h4>Other HTML field types</h4>

        <label htmlFor="wd-text-fields-email"> Email: </label>
        <input type="email"
            placeholder="li.zihao5@northeastern.edu"
            id="wd-text-fields-email"/><br/>

        <label htmlFor="wd-text-fields-salary-start"> Starting salary:
        </label>
        <input type="number"
            id="wd-text-fields-salary-start"
            placeholder="1000"
            min = "500000"
            max = "1000000"
            value="100000"/><br/>

        <label htmlFor="wd-text-fields-rating"> Rating: </label>
        <input type="range" id="wd-text-fields-rating"
            placeholder="Doe"
            max="5"
            value="4"/><br/>

        <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
        <input type="date"
            id="wd-text-fields-dob"
            min = "1960-01-01"
            max = "2024-05-16"
            value="1999-08-11"/>
        <br/>
        </form>
    </div>
    );
}