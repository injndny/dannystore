<?php
// Assuming you have a database connection
$category = isset($_GET['category']) ? $_GET['category'] : 'all';

// Query to fetch products based on category
$query = "SELECT * FROM products";
if ($category != 'all') {
    $query .= " WHERE category = '$category'";
}

$results = mysqli_query($conn, $query);
?>

<!-- Display Products -->
<div class="container mt-5">
  <h3>Products</h3>
  <div class="row">
    <?php while ($product = mysqli_fetch_assoc($results)): ?>
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="<?= $product['image']; ?>" class="card-img-top" alt="<?= $product['name']; ?>">
          <div class="card-body">
            <h5 class="card-title"><?= $product['name']; ?></h5>
            <p class="card-text"><?= $product['description']; ?></p>
            <p class="card-text">Price: $<?= $product['price']; ?></p>
            <a href="product-details.php?id=<?= $product['id']; ?>" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    <?php endwhile; ?>
  </div>
</div>
