const dynamicInputSection = document.querySelector("#dynamicInputTask");

const lessFields = function() {
  const inputFields = dynamicInputSection.querySelectorAll("input").length; // select all input fields and count 

  // selecting last child and always removing last child
  // ensuring we don't start deleting beyond this section
  if (inputFields > 0) {
    const lastDiv = dynamicInputSection.querySelector("div:last-child"); // selecting the last div child within our section
    if (lastDiv) dynamicInputSection.removeChild(lastDiv);
  }
};

const moreFields = function() {
  const inputFields = dynamicInputSection.querySelectorAll("input").length;

  // appending a new child input as long as we are
  // within 5 number of fields
  if (inputFields < 5) {
    const newDiv = document.createElement("div");
    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text"); // setting attribute key and value
    newInput.setAttribute("name", `Input ${inputFields + 1}`)
    newDiv.appendChild(newInput);

    dynamicInputSection.appendChild(newDiv);
  }
};
