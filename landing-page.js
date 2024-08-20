<!DOCTYPE html>
<html lang="en">
<head>

    <title>Form Validation</title>
    <style>
        
    <h1>Form Validation </h1>
    <form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <span class="error" id="nameError"></span>
        <br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <span class="error" id="emailError"></span>
        <br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <span class="error" id="passwordError"></span>
        <br>

        <button type="submit">Submit</button>
        </form>
    </style>
</head>
<body>
  

    <script src="validation.js"></script>
</body>
</html>
