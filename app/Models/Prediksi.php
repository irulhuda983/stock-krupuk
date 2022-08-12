<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prediksi extends Model
{
    use HasFactory;

    protected $table = 'prediksi';

    protected $guarded = ['id'];

    public function scopeSearch($query, $search)
    {
        if($search)
        {
            return $query->where('minggu_ke', $search);
        }

        return $query;
    }
}
