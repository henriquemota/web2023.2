<?php

  $dados = $_GET; 
  $nome = $_GET['nome']; 
  $idade = $_GET['idade']; 
  $cidade = $_GET['cidade']; 

  var_dump($dados);
  echo($dados['nome']);
  echo($cidade);
  