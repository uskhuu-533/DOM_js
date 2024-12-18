// Get the app div where the form will be rendered
const appDiv = document.getElementById("app");

// Create form element
const form = document.createElement("form");
form.setAttribute("action", "/submit");
form.setAttribute("method", "POST");
form.classList.add("signup-form");

// Add a heading
const heading = document.createElement("h2");
heading.textContent = "Sign Up";
heading.classList.add("form-heading");
form.appendChild(heading);

// First Name input
form.appendChild(createInputField("First Name", "text", "first_name", "Enter your first name"));

// Last Name input
form.appendChild(createInputField("Last Name", "text", "last_name", "Enter your last name"));

// Age input
form.appendChild(createInputField("Age", "number", "age", "Enter your age"));

// Gender input
const genderGroup = document.createElement("div");
genderGroup.classList.add("form-group");

const genderLabel = document.createElement("label");
genderLabel.textContent = "Gender:";
genderLabel.classList.add("form-label");
genderGroup.appendChild(genderLabel);

const genders = ["Male", "Female", "Other"];
genders.forEach(gender => {
    const genderContainer = document.createElement("div");
    const genderInput = document.createElement("input");
    genderInput.setAttribute("type", "radio");
    genderInput.setAttribute("name", "gender");
    genderInput.setAttribute("value", gender.toLowerCase());
    genderInput.setAttribute("required", "true");

    const genderText = document.createElement("span");
    genderText.textContent = gender;

    genderContainer.appendChild(genderInput);
    genderContainer.appendChild(genderText);
    genderGroup.appendChild(genderContainer);
});
form.appendChild(genderGroup);

// Birthday input
form.appendChild(createInputField("Birthday", "date", "birthday", ""));

// Submit button
const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Sign Up";
submitButton.classList.add("form-button");
form.appendChild(submitButton);

// Append form to the app div
appDiv.appendChild(form);

// Function to create input fields dynamically
function createInputField(labelText, type, id, placeholder) {
    const container = document.createElement("div");
    container.classList.add("form-group");

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;
    label.classList.add("form-label");

    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("required", "true");
    input.classList.add("form-input");

    container.appendChild(label);
    container.appendChild(input);

    return container;
}
