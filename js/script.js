const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");

if (welcomeButton && welcomeMessage) {
    welcomeButton.addEventListener("click", () => {
        const isExpanded = welcomeButton.getAttribute("aria-expanded") === "true";
        welcomeButton.setAttribute("aria-expanded", String(!isExpanded));
        welcomeButton.textContent = isExpanded ? "Show welcome message" : "Hide welcome message";
        welcomeMessage.textContent = "Better read all of it or else Ima find you...";
        welcomeMessage.hidden = isExpanded;
        welcomeButton.closest(".welcome-panel").classList.toggle("is-open", !isExpanded);
    });
}