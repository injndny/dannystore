// Handle the form submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page refresh

    let userId = document.getElementById('userId').value;
    let serverId = document.getElementById('serverId').value;
    let statusBadge = document.getElementById('statusBadge');

    // Simulate different order statuses
    let status = getOrderStatus();  // Get the random order status

    // Update the badge based on status
    if (status === 'success') {
        statusBadge.className = 'badge bg-success';  // Green for success
        statusBadge.textContent = 'Order Successful';
    } else if (status === 'pending') {
        statusBadge.className = 'badge bg-warning';  // Yellow for pending
        statusBadge.textContent = 'Order Pending';
    } else if (status === 'failed') {
        statusBadge.className = 'badge bg-danger';  // Red for failed
        statusBadge.textContent = 'Order Failed';
    }
});

// Function to simulate random order statuses
function getOrderStatus() {
    let statuses = ['success', 'pending', 'failed'];
    let randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
}
