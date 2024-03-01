<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadanie</title>
</head>

<body>
    <form method="post">
        <p>km na mile <input type="number" name="km"><input value="OK" type="submit"></p>
    </form>
    <form method="post">
        <p>mile na km <input type="number" name="mile"><input value="OK" type="submit"></p>
    </form>
    <br>

    <p>
        <?php
        if (!isset($_POST['km']))
            echo 'Brak wartości "km na mile"';
        else
            echo $_POST['km'] . ' kilometrow, to ' . $_POST['km'] * 0.621371192 . ' mil';
        ?>
    </p>
    <p>
        <?php
        if (!isset($_POST['mile']))
            echo 'Brak wartości "mile na km"';
        else
            echo $_POST['mile'] . ' mil, to ' . $_POST['mile'] / 0.621371192 . ' kilometrow';
        ?>
    </p>
</body>

</html>