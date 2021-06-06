
<?php include('servercus.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Registration for Customer</title>
  <link rel="stylesheet" type="text/css" href="SignupStyles.css">
</head>
<body>
  <form class="Box" method="post" action="signupcus.php">
  <?php include('errors.php'); ?>
      <h1>Register</h1>
    <input type="text" name="username"  placeholder="username" value="<?php echo $username; ?>">
    <input type="text" name="email" placeholder="Email" value="<?php echo $email; ?>">
    <input type="password" name="password_1" placeholder="Password">
    <input type="password" name="password_2" placeholder="Comfirm Password">
    <input type="submit" class="btn" placeholder="Submit" name="reg_user">
  <p>
  <h1>Already a member?</h1> <a href="customer.php"><h2>Sign in</h2></a>
  </p>
  </form>
</body>
</html>