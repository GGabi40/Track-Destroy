// Receive email OK
// Save all mails
// Track GPS
// send mail to mail adress
const form = document.querySelector("form");
const btnCheckRegisteredEmails = document.querySelector("#btn-check-emails");

const receiveMail = (e) => {
  e.preventDefault();

  const inputEmail = document.getElementById("inputEmail").value;

  saveMailinNavigator(inputEmail);
};

// SAVE IN NAVEGATOR
const saveMailinNavigator = (inputEmail) => {
  const jsonString = JSON.stringify([inputEmail]);
  localStorage.setItem("emails", jsonString);

  showEmailsFromStorage();
};

// SHOW EMAILS
const showEmailsFromStorage = () => {
  const jsonString = localStorage.getItem("emails");
  if (jsonString) {
    const emails = JSON.parse(jsonString);

    const emailsContainer = document.querySelector(".emails-here");

    emails.forEach((email) => {
      const emailElement = document.createElement("div");
      emailElement.textContent = email;
      emailElement.classList.add("email-card");
      emailsContainer.appendChild(emailElement);
    });
  }
};

// Función para guardar el correo electrónico en localStorage y mostrarlo en el card
const saveMailInCard = (inputEmail) => {
  const emails = JSON.parse(localStorage.getItem("emails")) || [];
  emails.push(inputEmail);
  localStorage.setItem("emails", JSON.stringify(emails));

  showEmailsFromStorage();
};

showEmailsFromStorage();

form.addEventListener("submit", receiveMail);
btnCheckRegisteredEmails("click", checkOnMails);
