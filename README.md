
# TradePro - Professional Trading Signals Platform

TradePro is a professional trading signals platform designed to assist traders in making informed decisions through real-time signals, market analysis, and premium trading plans. This project integrates a responsive frontend with a secure backend, ensuring seamless user interaction and functionality.

---

## Features

### Frontend
- **Responsive Design**: Fully responsive UI with a modern dark theme and golden accents.
- **Dynamic Navigation**: Navigation elements dynamically adjust based on login status.
- **Plan Selection**: Users can choose from Basic, Pro, and Premium plans with detailed breakdowns.
- **Interactive User Interface**: Includes real-time updates for plan details and payment confirmation.

### Backend
- **User Authentication**: Secure login and signup system with password hashing.
- **Session Management**: Tracks user login state using PHP sessions.
- **Restricted Access**: Ensures only logged-in users can access profile and plan-specific pages.
- **Database Integration**: Manages user data and authentication securely with MySQL.

---

## Technologies Used

### Frontend
- **HTML5**
- **CSS3** (styles.css)
- **JavaScript** (scripts.js)

### Backend
- **PHP**
- **MySQL**

### Tools
- **XAMPP**: Local server for hosting the application.
- **Git**: Version control.

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/tradepro.git
   cd tradepro
   ```

2. **Setup the Database**
   - Open `phpMyAdmin` (http://localhost/phpmyadmin).
   - Create a database named `tradepro`.
   - Import the SQL file:
     - Go to the "Import" tab and upload the provided SQL schema file.

3. **Configure Backend**
   - Update the database credentials in `config.php`:
     ```php
     $host = 'localhost';
     $db = 'tradepro';
     $user = 'root';
     $pass = '';
     ```

4. **Start the Server**
   - Start Apache and MySQL from XAMPP.
   - Access the application at `http://localhost/tradepro`.

---

## Project Structure

```
TradePro/
├── basic-plan.html        # Basic plan details
├── blog1.html             # Blog page 1
├── blog2.html             # Blog page 2
├── blog3.html             # Blog page 3
├── config.php             # Database configuration
├── index.php              # Home page with session-based navigation
├── login.html             # Login form
├── login.php              # Backend login processing
├── logout.php             # Logout and session termination
├── payment.html           # Payment page
├── premium-plan.html      # Premium plan details
├── profile.php            # User profile page
├── pro-plan.html          # Pro plan details
├── scripts.js             # Client-side scripts
├── signup.html            # Signup form
├── signup.php             # Backend signup processing
├── styles.css             # Styling for the platform
├── thank-you.html         # Thank-you page after payment
└── user-dashboard.html    # User dashboard (optional for future development)
```

---

## Usage

1. **Register a New User**
   - Navigate to the signup page (`signup.html`).
   - Fill out the form and submit.

2. **Login**
   - Use the registered email and password to log in.
   - Upon successful login, you will be redirected to the home page.

3. **Choose a Plan**
   - Select a plan (Basic, Pro, Premium) to view its details.
   - Proceed to the payment page.

4. **Logout**
   - Click the Logout link to terminate the session.

---

## Future Enhancements
- **Payment Gateway Integration**: Add real payment processing via Stripe or PayPal.
- **Advanced User Dashboard**: Provide personalized trading analytics and history.
- **Email Notifications**: Notify users about plan updates and trading signals.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For questions or collaboration opportunities, reach out to:
- **Email**: alenjinmgi@gmail.com
- **GitHub**: [mgi25](https://github.com/yourusername)
