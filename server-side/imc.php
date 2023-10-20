<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IMC php</title>
</head>
<body>

  <?php 
    $peso = $_POST['peso'];
    $altura = $_POST['altura'];
    if (strlen($peso) > 0 && strlen($altura) > 0) {
      $imc = $peso/($altura*$altura);
    }
    else  {
      $imc = 0;
    }
  ?> 

  <form action="" method="post">
    <label for="peso">Peso</label>
    <input type="text" name='peso' id='peso' value="<?php echo($peso) ?>" />
    <br />
    <label for="altura">Altura</label>
    <input type="text" name='altura' id='altura' value="<?php echo($altura) ?>" />
    <br />
    <input type="submit" value="Processar">
    <p>IMC <?=$imc; ?></p>
  </form>
  
</body>
</html>