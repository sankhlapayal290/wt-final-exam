<!DOCTYPE html>
<html lang="en">
<head>
    <title>read and write</title>
</head>
<body>

<?php
$myfile = fopen("fullname.txt", "w") or die("Unable to open file!");
$txt = "Payal Sankhla\n";
fwrite($myfile, $txt);
$txt = "Sankhla Payal\n";
fclose($myfile);
?>


</body>
</html>