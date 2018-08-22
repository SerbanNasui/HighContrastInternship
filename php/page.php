<?php

$greeting = "Hello world!";

$names =[
    'Serban',
    'Larisa',
    'pwp'
];

$person = [
    'age' => 20,
    'hair' => 'brown',
    'career' => 'web developer'
];

$person ['name'] = 'Serban';


//echo '<pre>';
//var_dump($person);
//echo '</pre>';
//echo $person['age'];

$task = [
    'title' => 'Finish homework',
    'due' => 'today',
    'assigned_to' => 'Serban',
    'completed' => true
];

require 'page.view.php';