const form = document.getElementById("subscribeForm");
const msg = document.querySelector(".form-msg");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const topics = [...document.querySelectorAll("input[name='topics']:checked")]
                   .map(e => e.value);

    if (topics.length === 0) {
        msg.style.color = "red";
        msg.textContent = "Please select at least one interest category.";
        return;
    }

    msg.style.color = "#0066ff";
    msg.textContent = "Processing subscription...";

    setTimeout(() => {
        msg.style.color = "green";
        msg.textContent = "Thank you! You are now subscribed to ARF updates.";
        form.reset();
    }, 1200);
});
