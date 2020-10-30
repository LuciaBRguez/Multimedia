<?php

$app->get('/', 'HomeController:index')->setName('home');
$app->get('/The-walking-dead', 'WalkingDeadController:index')->setName('walking-dead');
$app->get('/Breaking-bad', 'BreakingBadController:index')->setName('breaking-bad');
$app->get('/Orange-is-the-new-black', 'OrangeNewBlackController:index')->setName('orange-new-black');