var _a;
//listing of element//
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type Assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experianceElement = document.getElementById('experiance');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experiance = experianceElement.value;
        var skills = skillsElement.value;
        //elements of picture
        var profilePicture = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicture ? URL.createObjectURL(profilePicture) : null;
        //create resume outpit
        var resumeOutput = "\n        <h2>resume</h2>\n        ".concat(profilePictureURL ? "<img src = \"".concat(profilePictureURL, "\" alt=\"profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong>name</strong> ").concat(name_1, "</p>\n        <p><strong>email</strong> ").concat(email, "</p>\n        <p><strong>phone</strong> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n                             \n        <h3>Experiance</h3>\n        <p>").concat(experiance, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('resumeOutputElements not found');
        }
    }
    else {
        console.error('one or more resumeOutput elements not found');
    }
});
