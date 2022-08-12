<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rules extends Model
{
    use HasFactory;

    protected $table = 'rules';

    protected $guarded = ['id'];

    public function scopeSearch($query, $search)
    {
        if($search)
        {
            return $query->orWhere('r1', $search)->orWhere('r2', $search)->orWhere('r3', $search)->orWhere('produksi', $search);
        }

        return $query;
    }
}
