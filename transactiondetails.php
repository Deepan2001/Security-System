<!DOCTYPE html>
<html>
<head>
  <title>Display all transaction details</title>
</head>
<body>

<h2>Transaction Details</h2>

<table border="2">
  <tr>
    <td>ID</td>
    <td>Bank name</td>
    <td>Account Holder Name</td>
    <td>Account Number</td>
    <td>Transaction Amount</td>
    <td>IFSC Code</td>
    <td>Transaction Details</td>

  </tr>
<?php
include "connection.php"; // Using database connection file here
$records = mysqli_query($db,"select * from transaction"); // fetch data from database
while($data = mysqli_fetch_array($records))
{
?>
  <tr>
    <td><?php echo $data['id']; ?></td>
    <td><?php echo $data['bankname']; ?></td>
    <td><?php echo $data['accountholdername']; ?></td>
    <td><?php echo $data['accountnumber']; ?></td>
    <td><?php echo $data['transactionamount']; ?></td>
    <td><?php echo $data['ifsccode']; ?></td>
    <td><?php echo $data['transactiondetails']; ?></td>
  </tr>
<?php
}
?>
</table>

<?php mysqli_close($db); // Close connection ?>

</body>
</html>