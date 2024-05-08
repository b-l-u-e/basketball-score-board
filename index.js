document.querySelector(".container").addEventListener("click", (e) => {
    // console.log(e)




  if (e.target.classList.contains("counter")) {
    const buttonValue = parseInt(e.target.textContent);
    // console.log(buttonValue)
    const scoreElement = e.target.parentElement.previousElementSibling;
    // console.log(scoreElement)
    const currentScore = parseInt(scoreElement.textContent);
    // console.log(currentScore)

    switch (buttonValue) {
      case 1:
        scoreElement.textContent = currentScore + buttonValue;
        break;
      case 2:
        scoreElement.textContent = currentScore + buttonValue;
        break;
      case 3:
        scoreElement.textContent = currentScore + buttonValue;
        break;
      default:
        break;
    }
  }
});
