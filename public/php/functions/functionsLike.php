<?php

function addLike($id, $flag, $json)
{
    $ourData = file_get_contents("../../src/data/" . $json);
    $object = json_decode($ourData);

    //todo сделать по нормальному
    foreach ($object as $item) {
        if ($item->id == $id) {
            if ($flag == '+') {
                $item->like++;
            } elseif ($flag == '-') {
                $item->like--;
            }
        }
    }


    file_put_contents('../../src/data/' . $json, json_encode($object));
//// Освобождаем память от переменных, которые нам пока не нужны unset($file); unset($taskList);
    $response = ['status' => 'Ok'];

    header("Content-type: application/json");

    echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
}