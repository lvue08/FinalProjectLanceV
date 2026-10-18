const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");

welcomeButton.addEventListener("click", () => {
    welcomeMessage.textContent = "you better read ALL of it... or Ima find you...yes I also got a little lazy towards the end so don't mind that...";
    welcomeMessage.hidden = false;
});