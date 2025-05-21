document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
    } else {
        alert('Please fill out all fields before submitting.');
    }
});