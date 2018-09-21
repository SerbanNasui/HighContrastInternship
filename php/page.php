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

$animals = ['cat','dog'];


function dumper($one, $two, $three){
    var_dump($one, $two, $three);
}

dumper('pempars', 'cu', 'cacat');




//echo '<pre>';
//
//die (var_dump($animals));
//
//echo '</pre>';

require 'functions.php';

if(ages(15)){
    echo 'da';
}else{
    echo 'no';
}


require 'page.view.php';