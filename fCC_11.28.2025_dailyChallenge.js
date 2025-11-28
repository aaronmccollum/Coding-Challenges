/*
Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.
- Assume all birthdays are valid dates before November 27th, 2025.
- Return the age as an integer.
- Be sure to account for whether the person has already had their birthday in 2025.
*/

function calculateAge(birthday) {

  const birthdayDate = new Date(birthday);
  const today = new Date("2025-11-27");

  if (today.getMonth() >= birthdayDate.getMonth()) { 
    if (today.getDate() > birthdayDate.getDate()) {
      return today.getFullYear() - birthdayDate.getFullYear();
    }
  }
  
  return today.getFullYear() - birthdayDate.getFullYear() - 1;
};
