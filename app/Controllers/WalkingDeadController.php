<?php

namespace App\Controllers;

use Slim\Views\Twig as View;

class WalkingDeadController extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'walking-dead-container.twig');
    }
}