const numberOfYears = 100;
const numberOfWeeksInAYear = 52;
const birthdateInput = document.getElementById("birthdate-input");

// Set max birthdate input to today's date.
birthdateInput.max = new Date().toISOString().split("T")[0];

// On page load, build checkerboard with default birthdate set to 01/03/1999
window.onload = buildCheckerboard(new Date(1999, 3, 1));

document
  .getElementById("birthdate-submit-button")
  .addEventListener("click", updateCheckerboard);

function buildCheckerboard(birthdate) {
  const checkerboard = document.getElementById("checkerboard");
  const numberOfWeeksToElapse = weeksBetween(birthdate, new Date()); // Number of weeks elapsed since birth till today

  checkerboard.innerHTML = ""; // Reset the checkerboard before working on it.
  let totalNumberOfWeeksElapsed = 0;

  for (let year = 0; year < numberOfYears; year++) {
    let rowHTML = "";
    rowHTML += '<div class="row">';
    for (let week = 0; week < numberOfWeeksInAYear; week++) {
      totalNumberOfWeeksElapsed++;
      let divClass =
        totalNumberOfWeeksElapsed <= numberOfWeeksToElapse
          ? "box checked"
          : "box";
      rowHTML += `<div class="${divClass}" title="Year ${
        year + 1
      } - Week ${totalNumberOfWeeksElapsed} of your life"></div>`;
    }
    rowHTML += year + 1;
    rowHTML += "</div>";
    checkerboard.innerHTML += rowHTML;
  }
}

/**
 * Computes and returns the number of weeks that separate d1 from d2.
 * @param {Date} d1
 * @param {Date} d2
 */
function weeksBetween(d1, d2) {
  return Math.round(Math.abs(d1 - d2) / (7 * 24 * 60 * 60 * 1000));
}

/**
 * Gets the date value of the birthdate input field and updates the checkerboard accordingly.
 */
function updateCheckerboard() {
  const birthdateString = birthdateInput.value;
  const birthdateDate = new Date(birthdateString);
  console.log(birthdateString);
  console.log(birthdateDate);
  buildCheckerboard(birthdateDate);
}
