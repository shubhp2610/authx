<?php

include('../php_function/main.php');
$SQL = "SELECT * FROM maildb";
$result = query($SQL);
confirm($result);
$first_row = true;

while ($row = fetch_array($result)) {
    echo '<tr>';
        echo '<td>' .$row['id'] . '</td>';
 echo '<td>' .$row['time'] . '</td>';
 echo '<td>' .$row['ip'] . '</td>';
    echo '</tr>';
}
echo("</table>");