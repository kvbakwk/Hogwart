<!DOCTYPE html>
<html lang="pl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zadanie</title>
</head>

<body>
  <form action="index.php" method="POST">
    <input placeholder="Wpisz imię" name="name">
    <input type="number" placeholder="Wpisz wiek" name="age">
    <input type="submit">
  </form>

  <?php
  if (isset($_POST['name']) && isset($_POST['age'])) {
    if ($_POST['age'] > 9 && $_POST['age'] < 16)
      $message = "Jesteś młody " . $_POST['name'] . " i masz " . $_POST['age'] . " lata";
    elseif ($_POST['age'] > 15 && $_POST['age'] < 21)
      $message = "Wydaję ci się " . $_POST['name'] . ", że jesteś dorosły bo masz " . $_POST['age'] . " lata";
    elseif ($_POST['age'] > 20 && $_POST['age'] < 26)
      $message = "Wyprowadzasz się " . $_POST['name'] . " bo masz " . $_POST['age'] . " lata";
    elseif ($_POST['age'] > 25 && $_POST['age'] < 36)
      $message = $_POST['name'] . " masz takie życie jakie chciałeś/chciałaś";


    echo "<br>" . "<p>" . $message . "</p>";
    if ($_POST['age'] == 23)
      echo "<br><p>Szukasz pracy " . $_POST['name'] . " by się wyprowadzić, bo masz 23 lata</p>";
    elseif ($_POST['age'] == 33)
      echo "<br><p>Jesteś w wieku Chrystusowym, " . $_POST['name'] . " bo masz 33 lat - podejmujesz ważne dla Ciebie decyzje</p>";
  };
  ?>
</body>

</html>