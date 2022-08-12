<?php

namespace App\Imports;

use App\Models\Rules;
use Maatwebsite\Excel\Concerns\ToModel;

class RulesImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Rules([
            //
        ]);
    }
}
