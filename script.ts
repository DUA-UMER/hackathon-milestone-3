//listing of element//
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();
    //type Assertion
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experianceElement = document.getElementById('experiance') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement){


        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experiance = experianceElement.value;
        const skills = skillsElement.value;

    //elements of picture
    const profilePictureFile = profilePictureInput. files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : null;
    


      //create resume outpit
       const resumeOutput = `
        <h2>resume</h2>
        ${profilePictureURL ? `<img src = "${profilePictureURL}" alt="profile Picture" class="profilePicture">` : ''}
        <p><strong>name</strong> ${name}</p>
        <p><strong>email</strong> ${email}</p>
        <p><strong>phone</strong> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>
                             
        <h3>Experiance</h3>
        <p>${experiance}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
      `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
    }else{
        console.error('resumeOutputElements not found');
    }
}else{
    console.error('one or more resumeOutput elements not found');
}
})