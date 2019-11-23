<?php

    $path = '../subscriptions.txt';
    if (isset($_POST['email'])) {
        $fh = fopen($path,"a+");
        $string = $_POST['email'] . PHP_EOL;
        fwrite($fh, $string);
        fclose($fh);
    }

    header('Location: ../index.html');