<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dataset extends Model
{
    use HasFactory;

    protected $table = 'dataset';

    protected $guarded = ['id'];

    public function scopeSearch($query, $search)
    {
        if($search){
            $query->whereRaw("CONCAT(bulan, '||', minggu_ke) LIKE ?", ['%'.addcslashes($search, '_').'%']);
        }

        return $query;
    }
}
