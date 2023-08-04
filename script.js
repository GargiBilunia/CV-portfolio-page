/// JavaScript code for adding dynamic content to the resume portfolio

// Calculate age based on date of birth
function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  // Update age automatically when the date of birth changes
  const dateOfBirthInput = document.getElementById('date-of-birth');
  const ageInput = document.getElementById('age');
  
  dateOfBirthInput.addEventListener('change', () => {
    const age = calculateAge(dateOfBirthInput.value);
    ageInput.value = age;
  });
  
  // Function to create list items and append them to the corresponding sections
  function addItemToList(sectionId, value) {
    const sectionList = document.getElementById(sectionId + '-list');
    const listItem = document.createElement('li');
    listItem.textContent = value;
    sectionList.appendChild(listItem);
  }
  
  // Function to handle adding educational qualifications
  function addEducation() {
    const qualificationInput = document.getElementById('qualification');
    const institutionInput = document.getElementById('institution');
    const yearInput = document.getElementById('year');
    const qualification = qualificationInput.value;
    const institution = institutionInput.value;
    const year = yearInput.value;
    const education = `${qualification} - ${institution}, ${year}`;
    addItemToList('education', education);
    qualificationInput.value = '';
    institutionInput.value = '';
    yearInput.value = '';
  }
  
  // Function to handle adding skills
  function addSkill() {
    const skillInput = document.getElementById('skill');
    const skill = skillInput.value;
    addItemToList('skills', skill);
    skillInput.value = '';
  }
  
  // Function to handle adding achievements
  function addAchievement() {
    const achievementInput = document.getElementById('achievement');
    const achievement = achievementInput.value;
    addItemToList('achievements', achievement);
    achievementInput.value = '';
  }
  