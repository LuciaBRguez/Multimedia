<?php

namespace App\Controllers;

use Slim\Views\Twig as View;

class BreakingBadController extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'breaking-bad-container.twig');
    }
}