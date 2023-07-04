import React from 'react'

export const Application = () => {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <p>All Fields are mandatory</p>
            <span title='close'>X</span>
            <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
            <div data-testid="custom-element">Custom HTML Element</div>
            <form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="" id="name" placeholder='Fullname' value='Yash' onChange={() => { }} />
                </div>
                <div>
                    <label htmlFor='bio'>Bio</label>
                    <textarea id='bio' name='bio'></textarea>
                </div>
                <div>
                    <label htmlFor="job-location">Name</label>
                    <select name="" id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="" id="terms" /> I agree to the terms and condition
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
