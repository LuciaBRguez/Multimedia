<?php

session_start();

require __DIR__ . '/../vendor/autoload.php';

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true,
    ]
]);

$container = $app->getContainer();

$container['view'] = function($container) {
    $view = new \Slim\Views\Twig(__DIR__ . '/../resources/views', [
        'cache' => false,
    ]);

    $view->addExtension(new \Slim\Views\TwigExtension(
        $container->router,
        $container->request->getUri()
    ));

    return $view;
};

$container['HomeController'] = function($container) {
    return new \App\Controllers\HomeController($container);
};

$container['WalkingDeadController'] = function($container) {
    return new \App\Controllers\WalkingDeadController($container);
};

$container['BreakingBadController'] = function($container) {
    return new \App\Controllers\BreakingBadController($container);
};

$container['OrangeNewBlackController'] = function($container) {
    return new \App\Controllers\OrangeNewBlackController($container);
};

require __DIR__ .'/../app/routes.php';
