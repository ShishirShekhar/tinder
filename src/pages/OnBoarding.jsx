// OnBoarding.jsx contains all the components for "/onboarding" route.
// OnBoarding.jsx contains default export of OnBoarding component.

/* OnBoarding component:
  OnBoarding component is used to details for the client.

  OnBoarding contains one state and two function.
  State(formData/setFormData): We have this state to update the values of form.
  Function:
    1. handleSubmit: 
      This function is used to prevent the default behavior of form submission.
    2. handleChange:
      This function is used to update the value of each field on change.

  OnBoarding component returns Nav component and form for client details.
*/

// Import required modules
import React, { useState } from 'react';
// Import required components
import Nav from '../components/Nav';

// Create OnBoarding function
const OnBoarding = () => {
  // Create state for formData
  const [formData, setFromData] = useState({
    user_id: "",
    fName: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    gender_identity: "man",
    show_gender: false,
    gender_interest: "woman",
    email: "",
    url: "",
    about: "",
    match: []
  });

  // Create a function for submit behavior.  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Create a function to update values on change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target === "checkbox" ? e.target.checked : e.target.value;

    setFromData((prevState) => ({
      ...prevState, [name]: value
    }));
  };

  return (
    <>
      {/* Add Nav component */}
      <Nav minimal={true} showModal={false} />

      {/* Create a division for onboarding section */}
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        {/* Create a form to get details of the client */}
        <form onSubmit={handleSubmit}>
          {/* Create two sections one for details and other for profile */}
          <section>
            {/* First Name */}
            <label htmlFor="fName">First Name</label>
            <input 
                  type="text" name="fName" 
                  id="fName" placeholder='First Name' 
                  value={formData.fName} onChange={handleChange}
            />

            {/* DOB */}
            <label htmlFor='dob'>Birthday</label>
            <div className="multiple-input-container" id='dob'>
              <input 
                    type="number" name="dob_day" 
                    id="dob" placeholder='DD' 
                    value={formData.dob_day} onChange={handleChange}
              />
              <input 
                    type="number" name="dob_month" 
                    id="dob" placeholder='MM' 
                    value={formData.dob_month} onChange={handleChange}
              />
              <input 
                    type="number" name="dob_year" 
                    id="dob" placeholder='YYYY' 
                    value={formData.dob_year} onChange={handleChange}
              />
            </div>
            
            {/* Gender Identity */}
            <label htmlFor="gender-identity">Gender</label>
            <div className="multiple-input-container" id='gender-identity'>
              <input 
                    type="radio" name="gender_identity" 
                    id="man-gender-identity" value="man" 
                    onChange={handleChange} 
                    checked={formData.gender_identity === "man"}
              />
              <label htmlFor="man-gender-identity">Man</label>
              
              <input 
                    type="radio" name="gender_identity" 
                    id="woman-gender-identity" value="woman" 
                    onChange={handleChange} 
                    checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>

              <input 
                    type="radio" name="gender_identity" 
                    id="more-gender-identity" value="more" 
                    onChange={handleChange} 
                    checked={formData.gender_identity === "more"}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>

            {/* Show Gender on profile */}
            <label htmlFor="show-gender">Show gender on my profile</label>
            <input 
                  type="checkbox" name="show_gender" 
                  id="show-gender" onChange={handleChange} 
                  checked={formData.show_gender} 
            />

            {/* Gender Interest */}
            <label htmlFor="gender-interest">Show Me</label>
            <div className="multiple-input-container" id='gender-interest'>
              <input 
                    type="radio" name="gender_interest" 
                    id="man-gender-interest" value="man" 
                    onChange={handleChange} checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest">Man</label>
              
              <input 
                    type="radio" name="gender_interest" 
                    id="woman-gender-interest" value="woman" 
                    onChange={handleChange} checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>

              <input 
                    type="radio" name="gender_interest" 
                    id="everyone-gender-interest" value="everyone"
                    onChange={handleChange} checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>

            {/* About */}
            <label htmlFor="about-me">About Me</label>
            <input 
                  type="text" name="about_me" 
                  id="about-me" placeholder="I like long walks"
                  value={formData.about_me} required={true}
                  onChange={handleChange} 
            />
            <input type="submit" />
          </section>

          {/* Profile section */}
          <section>
            <label htmlFor="url">Profile Picture</label>
            <input 
              type="url" name="url" 
              id="url" onChange={handleChange} 
              required={true}
            />

            <div className="photo-container">
              <img src={formData.url} alt="Profile" />
            </div>
          </section>

        </form>
      </div>
    </>
  )
};

// Export Onboarding
export default OnBoarding;
