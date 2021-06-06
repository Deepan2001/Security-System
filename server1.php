<?php
session_start();

// initializing variables
$errors = array();

// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'security');

// REGISTER USER
if (isset($_POST['trans_user'])) {
  // receive all input values from the form
  $bankname = mysqli_real_escape_string($db, $_POST['bankname']);
  $accountholdername = mysqli_real_escape_string($db, $_POST['accountholdername']);
  $accountnumber = mysqli_real_escape_string($db, $_POST['accountnumber']);
  $transactionamount = mysqli_real_escape_string($db, $_POST['transactionamount']);
  $ifsccode = mysqli_real_escape_string($db, $_POST['ifsccode']);
  $transactiondetails = mysqli_real_escape_string($db, $_POST['transactiondetails']);

  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  if (empty($bankname)) { array_push($errors, "bankname is required"); }
  if (empty($accountholdername)) { array_push($errors, "accountholdername is required"); }
  if (empty($accountnumber)) { array_push($errors, "accountnumber is required"); }
  if (empty($transactionamount)) { array_push($errors, "transactionamount is required"); }
  if (empty($ifsccode)) { array_push($errors, "ifsccode is required"); }
  if (empty($transactiondetails)) { array_push($errors, "transactiondetails is required"); }

  $query = "INSERT INTO transaction (bankname, accountholdername, accountnumber, transactionamount, ifsccode, transactiondetails)
    VALUES('$bankname', '$accountholdername', '$accountnumber', '$transactionamount', '$ifsccode', '$transactiondetails')";
  mysqli_query($db, $query);
  echo "Transaction successful";
  header('location: successful.html');
  }
?>