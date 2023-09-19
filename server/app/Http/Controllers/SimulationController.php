<?php

namespace App\Http\Controllers;

use App\Simulation;
use Illuminate\Http\Request;

class SimulationController extends Controller
{
    function create (Request $request) {
        $simulation = new Simulation (
            [
                'nome' => $request->nome,
                'nascimento' =>
                    implode(
                        array_reverse(
                            explode(
                                '/',
                                $request->nascimento
                            )
                        ),
                        '-'
                    ),
                'cidade' => $request->cidade,
                'renda' => str_replace(['R','$',' '], '', $request->renda),
                'fgts' => (!empty($request->fgts)) ? str_replace(['R','$',' '], '', $request->fgts) : null,
                'contato' => $request->contato,
            ]
        );

        $simulation->save();

        return response()->noContent();
    }
}
