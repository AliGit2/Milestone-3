// Select elements
var resumeForm = document.getElementById("resumeForm");
var resumeDisplay = document.getElementById("resumeDisplay");
var displayName = document.getElementById("displayName");
var displayEmail = document.getElementById("displayEmail");
var displayPhone = document.getElementById("displayPhone");
var displayEducation = document.getElementById("displayEducation");
var displayInstitution = document.getElementById("displayInstitution");
var displayWorkExperience = document.getElementById("displayWorkExperience");
var displayCompany = document.getElementById("displayCompany");
var displayYears = document.getElementById("displayYears");
var displaySkills = document.getElementById("displaySkills");
// Form submission event handler
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Validate required fields
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var education = document.getElementById("education").value.trim();
    var institution = document.getElementById("institution").value.trim();
    var workExperience = document.getElementById("workExperience").value.trim();
    var company = document.getElementById("company").value.trim();
    var years = document.getElementById("years").value.trim();
    var skills = document.getElementById("skills").value.trim();
    if (!name || !email || !phone || !education || !institution || !workExperience || !company || !years || !skills) {
        alert("Please fill out all fields.");
        return;
    }
    // Basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
