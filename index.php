<?php
session_start();
$is_logged_in = isset($_SESSION['logged_in']) && $_SESSION['logged_in'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TradePro - Professional Trading Signals</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">TradePro</div>
            <ul class="nav-links">
                <li><a href="#services-section">Services</a></li>
                <li><a href="#plans-section">Plans</a></li>
                <li><a href="#blogs-section">Blogs</a></li>
                <?php if ($is_logged_in): ?>
        
                    <li><a href="logout.php">Logout</a></li>
                <?php else: ?>
                    <li><a href="login.html">Login</a></li>
                <?php endif; ?>
            </ul>
        </nav>
        <section class="hero">
            <div class="hero-content">
                <h1>Master the Markets with Professional Trading Signals</h1>
                <p>Unlock your trading potential with real-time signals and expert advice.</p>
                <a href="#plans-section" class="cta-btn">Get Started</a>
            </div>
        </section>
    </header>

    <main>
        <!-- Services Section -->
        <section id="services-section" class="services">
            <h2>Our Services</h2>
            <div class="service-boxes">
                <div class="box">
                    <h3>Real-Time Trading Signals</h3>
                    <p>Receive daily trading signals for Forex, Crypto, and Stock Markets.</p>
                </div>
                <div class="box">
                    <h3>Advanced Analytics</h3>
                    <p>Gain access to trading analytics and expert advice for better decision-making.</p>
                </div>
                <div class="box">
                    <h3>24/7 Customer Support</h3>
                    <p>Get around-the-clock assistance with our dedicated support team.</p>
                </div>
            </div>
        </section>

        <!-- Plans Section -->
        <section id="plans-section" class="signal-packages">
            <h2>Our Signal Packages</h2>
            <div class="box-grid">
                <div class="box">
                    <h3>Basic Plan</h3>
                    <p>$49/month - For beginners looking to access daily stock and forex signals.</p>
                    <a href="basic-plan.html" class="plan-link">Choose Basic</a>
                </div>
                <div class="box">
                    <h3>Pro Plan</h3>
                    <p>$99/month - Advanced trading analytics, crypto signals, and 24/7 support.</p>
                    <a href="pro-plan.html" class="plan-link">Choose Pro</a>
                </div>
                <div class="box">
                    <h3>Premium Plan</h3>
                    <p>$199/month - Unlimited signals, custom trade setups, and VIP support.</p>
                    <a href="premium-plan.html" class="plan-link">Choose Premium</a>
                </div>
            </div>
        </section>

        <!-- Blog Section -->
        <section id="blogs-section" class="blogs">
            <h2>Latest Blog Posts</h2>
            <div class="box-grid">
                <div class="box">
                    <h3>How to Use Trading Signals for Maximum Profit</h3>
                    <p>Learn how to interpret and act on trading signals to enhance your trading strategy...</p>
                    <a href="blog1.html">Read More</a>
                </div>
                <div class="box">
                    <h3>Crypto Market Trends: What to Watch for in 2024</h3>
                    <p>Stay ahead of the market by understanding the key trends in crypto and digital assets...</p>
                    <a href="blog2.html">Read More</a>
                </div>
                <div class="box">
                    <h3>Forex Trading: Understanding Risk Management</h3>
                    <p>Effective risk management is crucial for long-term success in forex trading...</p>
                    <a href="blog3.html">Read More</a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 TradePro. All Rights Reserved.</p>
    </footer>
</body>
</html>