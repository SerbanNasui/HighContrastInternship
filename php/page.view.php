<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        header {
            background: #e3e3e3;
            padding: 2em;
            text-align: center;
        }
    </style>
</head>
<body>
<header>
    <h1>
        <?= $greeting; ?>
    </h1>
</header>

<ul>
    <?php
        foreach ($names as $name){
            echo "<li>$name</li>";
        }
    ?>
</ul>

<ul>
    <?php foreach ($person as $key =>$feature ):?>
        <li><strong><?= $key;?></strong> <?=$feature;?></li>
    <?php endforeach;?>
</ul>

<h1>Task for the day</h1>
<ul>
     <?php foreach ($task as $heading => $value) : ?>
    <li>
        <strong><?= $heading; ?></strong>: <?= $value; ?>
    </li>
    <?php endforeach; ?>

    <li>
        <strong>Name: </strong><?= $task['title']; ?>
    </li>
    <li>
        <strong>Date: </strong><?= $task['due']; ?>
    </li>
    <li>
        <strong>Person Resp: </strong><?= $task['assigned_to']; ?>
    </li>
    <li>
        <strong>Status: </strong><?= $task['completed'] ? 'complete' : 'incomplete'; ?>
    </li>

    <li>
        <strong>Status: </strong>
        <?php
        if($task['completed']){
            echo '&#9989;';
        }else{
            echo 'Incomplete';
        }
        ?>
    </li>
</ul>

</body>
</html>