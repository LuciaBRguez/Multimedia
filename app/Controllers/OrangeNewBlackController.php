<?php

namespace App\Controllers;

use Slim\Views\Twig as View;

class OrangeNewBlackController extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'orange-new-black-container.twig');
    }
}