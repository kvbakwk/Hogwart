<!DOCTYPE html>
<html lang="pl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zadanie</title>
</head>

<body>
  <form action="index.php" method="POST">
    <input placeholder="Wpisz rok" name="year">
    <input type="submit">
  </form>

  <?php
  if (isset($_POST['year'])) {
    if (1600 > $_POST['year'] || $_POST['year'] > 2050)
      echo "<br>Podawany rok musi być z zakresu: 1600 - 2050";
    else {
      if ($_POST['year'] % 4 == 0)
        echo "<br>To jest rok przystępny";
      else if ($_POST['year'] % 4 != 0)
        echo "<br>To nie jest rok przystępny";
    };
  };
  ?>
</body>

</html>