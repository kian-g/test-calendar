document.addEventListener('DOMContentLoaded', function () {
    // Display a message or implement a feature for iPhone users
    if (isIphone()) {
        handleIphoneUser();
    } else {
        // Handle other devices
        document.getElementById('calendar-container').innerText = 'This feature is specifically designed for iPhone users.';
    }
});

function isIphone() {
    // Check if the user agent is an iPhone
    return navigator.userAgent.match(/iPhone/i) !== null;
}

function handleIphoneUser() {
    // Since direct calendar access is not possible, inform the user accordingly
    const container = document.getElementById('calendar-container');
    container.innerHTML = '<p>This webpage is designed for iPhone users. However, direct access to the calendar is not possible through the browser for security reasons.</p>';

    // Optionally, add a button or link to add an event to the calendar manually
    const addButton = document.createElement('button');
    addButton.innerText = 'Add Event to Calendar';
    addButton.addEventListener('click', function () {
        // Implement the logic for adding an event (like opening a link to a calendar file or a page with instructions)
        alert('Here you can implement a feature to add an event to the calendar.');
    });

    container.appendChild(addButton);
}
