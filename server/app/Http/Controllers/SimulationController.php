<?php
namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use \Illuminate\Http\Request;

class SimulationController extends BaseController
{
    function create (Request $request) {
      return response()->json($request->input());
    }
}

?>