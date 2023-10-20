<?php 

$data = json_decode(file_get_contents("php://input"), true);
$imc = $data['peso'] / ($data['altura'] * $data['altura']);
echo json_encode(["imc" =>  $imc]);
