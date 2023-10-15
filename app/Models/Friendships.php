<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friendships extends Model
{
    use HasFactory;
    protected $fillable = [

        'status',
        'user_one',
        'user_two'
    ];
}
