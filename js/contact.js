document.addEventListener("DOMContentLoaded", () => {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const contactField = document.getElementById("contact");
    const messageField = document.getElementById("message");
    const submitButton = document.getElementById("submit");

 
    function showError(field, errorId, message) {
        const errorElement = document.getElementById(errorId);
        if (message) {
            errorElement.textContent = message;
            errorElement.style.color = "red";
        } else {
            errorElement.textContent = "";
        }
    }

 
    nameField.addEventListener("input", () => {
        const nameValue = nameField.value;
        if (/^[a-zA-Z\s]*$/.test(nameValue)) {
            showError(nameField, "name-error", "");
        } else {
            showError(nameField, "name-error", "Name can only contain letters and spaces.");
            nameField.value = nameValue.replace(/[^a-zA-Z\s]/g, "");
        }
    });


    emailField.addEventListener("blur", () => {
        const emailValue = emailField.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue && !emailRegex.test(emailValue)) {
            showError(emailField, "email-error", "Please enter a valid email address.");
        } else {
            showError(emailField, "email-error", "");
        }
    });

  
    contactField.addEventListener("input", () => {
        const contactValue = contactField.value;
        if (/^\d*$/.test(contactValue)) {
            showError(contactField, "contact-error", "");
        } else {
            showError(contactField, "contact-error", "Contact number can only input number.");
            contactField.value = contactValue.replace(/\D/g, "");
        }
    });


    messageField.addEventListener("input", () => {
        const messageValue = messageField.value;
        if (/^[a-zA-Z\s]*$/.test(nameValue)) {
            showError(messageField, "message-error", "");
        } else {
            showError(messageField, "message-error", "Message can only contain letters and spaces.");
            messageField.value = messageValue.replace(/[^a-zA-Z\s]/g, "");
        }
    });


    submitButton.addEventListener("click", () => {
        let isValid = true;

        if (!nameField.value.trim()) {
            showError(nameField, "name-error", "Name is required.");
            isValid = false;
        }
        if (!emailField.value.trim()) {
            showError(emailField, "email-error", "Email is required.");
            isValid = false;
        }
        if (!contactField.value.trim()) {
            showError(contactField, "contact-error", "Contact number is required.");
            isValid = false;
        }
        if (messageField.value.trim().length < 10) {
            showError(messageField, "message-error", "Message can only contain letters and spaces.");
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
        } else {
            alert("Please fix the errors before submitting.");
        }
    });
});

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }
  
