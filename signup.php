<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm-password'];

    if ($password !== $confirm_password) {
        echo "Passwords do not match.";
        exit;
    }

    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    try {
        $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':password' => $hashed_password,
        ]);
        echo "Signup successful. <a href='login.html'>Login here</a>";
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) {
            echo "Email is already registered.";
        } else {
            echo "Error: " . $e->getMessage();
        }
    }
}
?>
