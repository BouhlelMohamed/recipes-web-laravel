<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['name','description','number_of_person','cooking_time','preparation_time'];
}
