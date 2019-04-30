<?php
$host = '86.160.26.179'; //Database ip
$user = 'root'; //Database username
$pass = ''; //Database password
$dbName = 'dreamhome'; //Database schema

$conn = new mysqli($host, $user, $pass, $dbName);

$originAddress = $_POST['originAddress'];
$destinationAddress = $_POST['destinationAddress'];
$distance = $_POST['distance'];

$sql = "INSERT INTO `results` (`id`, `origin_address`, `destination_address`, `distance`) VALUES (NULL, '$originAddress', '$destinationAddress', '$distance')";
if ($conn->query($sql) === TRUE) {
    echo "data inserted";
} else {
    echo "failed";
}
?>