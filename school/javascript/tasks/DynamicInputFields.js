const section = document.querySelector("#dynamicInputTask");

const lessFields = function () {
  const inputFields = section.querySelectorAll("input").length;
  if (inputFields > 0) {
    const lastDiv = section.querySelector("div:last-child");
    if (lastDiv) section.removeChild(lastDiv);
  }
};

const moreFields = function () {
  const inputFields = section.querySelectorAll("input").length;

  if (inputFields < 5) {
    const newDiv = document.createElement("div");
    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newDiv.appendChild(newInput);
    newDiv.appendChild(document.createElement("br"));

    section.appendChild(newDiv);
  }
};
