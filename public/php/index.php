<?php
header("Access-Control-Allow-Origin: *");

include "./functions/functionsLike.php";

if ($_SERVER['REQUEST_METHOD']=="POST") {

    $data = json_decode(file_get_contents('php://input'));

    switch ($data->json) {
        case 'basicQuests.json':
            addLike($data->id, $data->flag, $data->json);
            break;
    }
}
