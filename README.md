<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Top-Up Store</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
	  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEJ6H+7/NE34U82s2bvvz7J2f7f9j5a5i9A9ETq8Zb3bkh5t6h7rcO9G7X2gb" crossorigin="anonymous">
    <style>
        body {
            background-color: #ffffff;
            color: #000000;
        }
        .navbar-brand, .nav-link {
            color: #FFFFFF !important;
        }
        .btn-custom {
            background-color: #6CA4F9;
            color: white;
            border: none;
        }
        .btn-custom:hover {
            background-color: #5B94E1;
        }
        .product-card {
            border: 1px solid #eaeaea;
            border-radius: 10px;
            padding: 20px;
            transition: transform 0.3s;
        }
        .product-card:hover {
            transform: scale(1.05);
        }
        footer {
            background-color: #6CA4F9;
            color: white;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>

   <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
            <img src="img/dannylogo.png" alt="Logo" height="40">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
       <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <!-- Login Button -->
        <li class="nav-item">
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Login Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="loginModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="login.php" method="POST">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" name="email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" required>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Search Bar -->
<section class="search-bar py-4">
    <div class="container text-center">
        <form class="d-flex justify-content-center" action="#" method="GET">
            <input class="form-control w-50" type="text" placeholder="Search for a game..." aria-label="Search">
            <button class="btn btn-outline-primary ms-2" type="submit">Search</button>
        </form>
    </div>
</section>

<div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <!-- First item -->
    <div class="carousel-item active">
      <img src="img/panjang.png" class="d-block w-100" alt="Product 1">
      <div class="carousel-caption d-none d-md-block">
        <h5>Mobile Legends</h5>
        <a href="#" class="btn btn-primary">Click</a>
      </div>
    </div>
    <!-- Second item -->
    <div class="carousel-item">
      <img src="img/panjang.png" class="d-block w-100" alt="Product 2">
      <div class="carousel-caption d-none d-md-block">
        <h5>Product 2</h5>
        <a href="#" class="btn btn-primary">Buy Now</a>
      </div>
    </div>
    <!-- Third item -->
    <div class="carousel-item">
      <img src="img/panjang.png" class="d-block w-100" alt="Product 3">
      <div class="carousel-caption d-none d-md-block">
        <h5>Product 3</h5>
        <a href="#" class="btn btn-primary">Buy Now</a>
      </div>
    </div>
  </div>
  <!-- Carousel controls -->
  <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <!-- Products Section -->
    <div class="container">
        <div class="row g-4">
            <div class="col-md-2">
                <div class="product-card text-center p-4">
                    <img src="img/0. DannyStore Thanks For Support-03 (1).jpg" alt="Mobile Legends" class="img-fluid mb-2">
                    <h5 class="card-title">Mobile Legends</h5>
                    <p class="card-text">Diamonds</p>
					<a href="product-details.html" class="btn btn-primary">Buy Now</a>

                </div>
            </div>
            <div class="col-md-2">
                <div class="product-card text-center p-4">
                    <img src="img/0. DannyStore Thanks For Support-03 (1).jpg" alt="Honor of KIngs" class="img-fluid mb-2">
                    <h5 class="card-title">Honor of Kings</h5>
                    <p class="card-text">Tokens</p>
                    <button class="btn btn-custom">Buy Now</button>
                </div>
            </div>
            <div class="col-md-2">
                <div class="product-card text-center p-4">
                    <img src="img/0. DannyStore Thanks For Support-03 (1).jpg" alt="Genshin Impact" class="img-fluid mb-2">
                    <h5 class="card-title">Genshin Impact</h5>
                    <p class="card-text">Genesis Crystals</p>
                    <button class="btn btn-custom">Buy Now</button>
                </div>
            </div>
        </div>
    </div>

<!-- Testimonials Section -->
<section class="testimonials py-5" style="background-color: #f9f9f9;">
    <div class="container">
        <h2 class="text-center mb-4">What Our Customers Say</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="testimonial">
                    <p>"woaah laju jua thank you!."</p>
                    <h5>— Ara.</h5>
                </div>
            </div>
            <div class="col-md-4">
                <div class="testimonial">
                    <p>"Best seller"</p>
                    <h5>— mint.</h5>
                </div>
            </div>
            <div class="col-md-4">
                <div class="testimonial">
                    <p>"Wahh mantap tenks brudda"</p>
                    <h5>— Fadhil.</h5>
                </div>
            </div>
        </div>
    </div>
</section>


   <!-- Footer -->
<footer class="text-center text-white py-4" style="background-color: #000;">
    <div class="container">
        <p>&copy; 2023 DannyStore. All rights reserved.</p>
        <ul class="list-inline">
            <li class="list-inline-item"><a href="#" class="text-white">Privacy Policy</a></li>
            <li class="list-inline-item"><a href="#" class="text-white">Terms of Service</a></li>
<!-- Link to Admin Login -->

  <p><a href="admin_login.html">Admin Login</a></p>


        </ul>
    </div>
</footer>



<!-- Bootstrap JS and Popper.js -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

<!-- Bootstrap JS and Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>

<!-- Your website content here -->

<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/678d1c0d3a84273260714ed5/1ihvjb60d';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
</body>
<head>
