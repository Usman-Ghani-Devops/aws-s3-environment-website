const CONFIG = {
    environment: "{{ENVIRONMENT}}",
    message: "{{MESSAGE}}"
};

document.getElementById("environment").textContent =
    CONFIG.environment;

document.getElementById("message").textContent =
    CONFIG.message;