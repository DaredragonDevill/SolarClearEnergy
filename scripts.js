document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Replace with your own server-side logic to handle form submission
    console.log('Form submitted:', { name, email, message });

    // Clear the form
    document.getElementById('contactForm').reset();

    alert('Thank you for your message!');
});