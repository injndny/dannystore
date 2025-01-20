<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header('Location: index.php');  // Redirect to homepage (login page)
    exit;
}

echo "<h1>Welcome to your Dashboard, " . $_SESSION['email'] . "!</h1>";
echo "<a href='logout.php'>Logout</a>";
?>
