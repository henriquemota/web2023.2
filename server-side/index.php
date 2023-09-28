<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    //  $nome = $_GET['nome'];
    //  $sobrenome = $_GET['sobrenome'];  
     $nome = $_POST['nome'];
     $sobrenome = $_POST['sobrenome'];  
  ?>

  <p> Bem vindo <?php echo $nome ?> a minha página. </p>
  <p> Seu sobrenome <?php echo $sobrenome ?> é legal. </p>
</body>
</html>