<?php
$host = 'localhost'; //Database ip
$user = 'root'; //Database username
$pass = ''; //Database password
$dbName = 'dreamhome'; //Database schema

$conn = new mysqli($host, $user, $pass, $dbName);

$originAddress = $_POST['originAddress'];
$destinationAddress = $_POST['destinationAddress'];
$distance = $_POST['distance'];
$driveTime = $_POST['driveTime'];

$sql = "INSERT INTO `results` (`id`, `origin_address`, `destination_address`, `distance`, `drive_time`) VALUES (NULL, '$originAddress', '$destinationAddress', '$distance', '$driveTime')";
if ($conn->query($sql) === TRUE) {
    echo "data inserted";
} else {
    echo "failed";
}
?>