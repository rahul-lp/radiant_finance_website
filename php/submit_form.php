<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "radiant_finance";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['form_name'];
$email = $_POST['form_email'];
$message = $_POST['form_message'];

$sql = "INSERT INTO query_form_details (name, email, message)
VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
  header("Location: ../index.html");;
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

<!-- <script type="text/javascript">
  $(document).ready(function () {
    toast = new bootstrap.Toast(document.getElementById("query_sent_toast"));
    toast.show();
  }
</script> -->