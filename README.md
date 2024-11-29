
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
## Screenshots
   - Signup Page
      ![signup](https://github.com/user-attachments/assets/80156ed3-2307-4d76-8121-ec2c2526c683)

   - Login Page
      ![login](https://github.com/user-attachments/assets/3a03ca5d-20c6-4ef1-b683-31e4ef595637)

   - Index Page
      ![index](https://github.com/user-attachments/assets/a4065704-ffc5-4d2e-8bf3-1e1d98f6d086)
      ![index1](https://github.com/user-attachments/assets/07b24a67-8e45-4aea-bcc9-e669254059f2)
      ![index2](https://github.com/user-attachments/assets/5ae616f0-e1c0-4d94-b5c1-7e510b21523f)
      ![index3](https://github.com/user-attachments/assets/c2e1bfc8-113a-4569-97c5-3e3955225fc3)
   - Blogs page
      ![blog1](https://github.com/user-attachments/assets/9ed44caa-20f4-46f2-83eb-771786b86cc3)
      ![blog3](https://github.com/user-attachments/assets/f443a46d-0795-4229-95da-fbee2577d51f)
      ![blog2](https://github.com/user-attachments/assets/34ec3c8e-5895-451a-9fec-93cf8a1f374c)
   - Plan Page
      ![basicplan](https://github.com/user-attachments/assets/b165da96-9ddc-4f87-864e-96701d36441d)
      ![proplan](https://github.com/user-attachments/assets/ce510e48-c4d3-4d09-b7e8-77a3a1670ccf)
      ![premiumplan](https://github.com/user-attachments/assets/24e86903-cf1f-46ab-a0b0-39fd84502bb9)
   - Payment Page
      ![payment](https://github.com/user-attachments/assets/13de259d-b121-4eac-a934-56236b55da54)
   - Confirmation Page
     ![thankyou](https://github.com/user-attachments/assets/cfaa32a8-9c22-468e-bcab-0bf44c82d067)
   -Backend Image
      ![backend](https://github.com/user-attachments/assets/0a423cdb-8719-4dc3-810b-6a1296e4e395)

      


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
