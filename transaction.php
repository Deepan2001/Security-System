<?php include('server1.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title>Transaction page</title>
	<link rel="stylesheet" type="text/css" href="signupsheet.css">

</head>
<body>
	<div class="SignupContent">
            <form class="Box" action="transaction.php" method="POST" >
            <h1>Transaction process</h1>
            <?php include('errors.php'); ?>
            <input type="text" name="bankname"  placeholder="Bank name">
            <input type="text" name="accountholdername"  placeholder="Account holder name">
            <input type="password" name="accountnumber"  placeholder="Account Number">
            <input type="text" name="transactionamount"  placeholder="Transaction amount">
            <input type="text" name="ifsccode"  placeholder="IFSC Code">
            <h1>Transaction Details:</h1><select name="transactiondetails" style="width: 200px;height:50px; background-color: whitesmoke;border-radius:20px;" >
                <option value="Savings account">Savings Account</option>
                <option value="Current account">Current Account</option>
            </select>
            <input type="submit" class="btn" name="trans_user" >
        </form>
    </div>
</body>
</html>