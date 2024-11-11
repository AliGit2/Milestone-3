// Select elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resumeDisplay") as HTMLElement;
const displayName = document.getElementById("displayName") as HTMLSpanElement;
const displayEmail = document.getElementById("displayEmail") as HTMLSpanElement;
const displayPhone = document.getElementById("displayPhone") as HTMLSpanElement;
const displayEducation = document.getElementById("displayEducation") as HTMLSpanElement;
const displayInstitution = document.getElementById("displayInstitution") as HTMLSpanElement;
const displayWorkExperience = document.getElementById("displayWorkExperience") as HTMLSpanElement;
const displayCompany = document.getElementById("displayCompany") as HTMLSpanElement;
const displayYears = document.getElementById("displayYears") as HTMLSpanElement;
const displaySkills = document.getElementById("displaySkills") as HTMLSpanElement;

// Form submission event handler
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate required fields
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
    const education = (document.getElementById("education") as HTMLInputElement).value.trim();
    const institution = (document.getElementById("institution") as HTMLInputElement).value.trim();
    const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value.trim();
    const company = (document.getElementById("company") as HTMLInputElement).value.trim();
    const years = (document.getElementById("years") as HTMLInputElement).value.trim();
    const skills = (document.getElementById("skills") as HTMLInputElement).value.trim();

    if (!name || !email || !phone || !education || !institution || !workExperience || !company || !years || !skills) {
        alert("Please fill out all fields.");
        return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Update the resume display area
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayPhone.textContent = phone;
    displayEducation.textContent = education;
    displayInstitution.textContent = institution;
    displayWorkExperience.textContent = workExperience;
    displayCompany.textContent = company;
    displayYears.textContent = years;
    displaySkills.textContent = skills;

    // Show the resume section
    resumeDisplay.style.display = "block";
});
