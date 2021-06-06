<?php include('server.php') ?>
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="utf-8">
  <title>
    Registration for manager
  </title>
  <link rel="stylesheet" type="text/css" href="SignupStyles.css">
</head>
<body>
            <form class="Box" action="signupman.php" method="POST" > 
            <h1>Registration for manager</h1>
            <?php include('errors.php'); ?>
            <input type="text" name="username"  placeholder="Username" value="<?php echo $username; ?>">
            <input type="text" name="email"  placeholder="email" value="<?php echo $email; ?>">
            <input type="password" name="password_1"  placeholder="Password">
            <input type="password" name="password_2"  placeholder="Comfirm Password">
            <input type="submit" name="reg_user" class="btn">
              <h1>Already a member?</h1> <a href="manager.php"><h2>Sign in</h2></a>
        </form>
</body>
</html>