// Toggle off-canvas menu
const menuToggle = document.getElementById("menuToggle");
const offcanvasMenu = document.getElementById("offcanvasMenu");

menuToggle.addEventListener("click", () => {
    if (offcanvasMenu.style.left === "0px") {
        offcanvasMenu.style.left = "-250px";
    } else {
        offcanvasMenu.style.left = "0px";
    }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // You can handle form data here, such as sending it to a server or displaying a message
    alert('Message sent! We will get back to you soon.');

    // Reset the form
    this.reset();
});

<script>
    // Handle form submission
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate order processing (replace with actual logic for real-world scenario)
        let userId = document.getElementById('userId').value;
        let serverId = document.getElementById('serverId').value;
        let package = document.getElementById('package').value;
        let statusBadge = document.getElementById('statusBadge');

        // Simulate different order statuses
        let status = getOrderStatus();

        // Update status badge based on the status
        if (status === 'success') {
            statusBadge.className = 'badge bg-success'; // Green badge
            statusBadge.textContent = 'Success';
        } else if (status === 'pending') {
            statusBadge.className = 'badge bg-warning'; // Yellow badge
            statusBadge.textContent = 'Pending';
        } else if (status === 'failed') {
            statusBadge.className = 'badge bg-danger'; // Red badge
            statusBadge.textContent = 'Failed';
        }
    });

    // Function to simulate random order statuses
    function getOrderStatus() {
        let statuses = ['success', 'pending', 'failed'];
        let randomIndex = Math.floor(Math.random() * statuses.length);
        return statuses[randomIndex];
    }
</script>
