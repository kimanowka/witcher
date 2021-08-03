<?php

$ourData = file_get_contents("../../src/data/basicQuests.json");
$object = json_decode($ourData);
$object[0]->like++;
file_put_contents('../../src/data/basicQuests.json', json_encode($object));

$object = json_decode($ourData);

$response = ['status' => 'Ok'];

header("Content-type: application/json");

echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);