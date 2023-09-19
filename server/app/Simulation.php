<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Simulation extends Model
{
    protected $fillable = [
        'nome',
        'nascimento',
        'cidade',
        'renda',
        'fgts',
        'contato'
    ];
}
