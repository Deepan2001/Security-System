<?php

$db = mysqli_connect("localhost","root","","security");

if(!$db)
{
    die("Connection failed: " . mysqli_connect_error());
}

?>