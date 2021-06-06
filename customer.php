<?php include('servercus.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login for customer</title>
    <link rel="stylesheet" type="text/css" href="SignupStyles.css">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=320; user-scalable=no; initial-scale=1.0; maximum-scale=1.0" />
    <title>Pattern Lock</title>
    <link rel="stylesheet" type="text/css" href="_style/patternlock.css"/>
    <script src="_script/patternlock.js"></script>
    <style>
    body{
        text-align:center;
        font-family:Arial, Helvetica, sans-serif;
    }
</style>
</head>
<body>
    <form class="Box" method="post" onsubmit="return submitform()" action="homecus.html">
    <h1> Login Form </h1>
      <?php include('errors.php'); ?>
      <input type="text" name="username" placeholder="User name">
      <input type="password" name="password" placeholder="Password">
      <div>
            <input type="password" id="password" name="password" class="patternlock" />
            <input type="submit" value="login"/>
        </div>
    <br>
    <br>
      Not yet a member? 
      <a href="signupcus.php">Sign up</a>
    </form>
    <script>
        function submitform(){
                var string1 ='1236';
                var string2 = document.getElementById('password').value;
                
                if (string1 == string2){
                    window.alert('Login Success, Welcome Manager!');
                    window.open("homecus.html");
                }
                else {
                    alert("Please enter a valid Pattern");
                    return false;
                }
            }
    </script>
    </body>
</html>

