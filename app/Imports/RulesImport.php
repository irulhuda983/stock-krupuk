<?php

namespace App\Imports;

use App\Models\Rules;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class RulesImport implements ToCollection, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            // $cek = Rules::where('r1', $row['permintaan'])->where('r2', $row['persediaan'])->where('r3', $row['penjualan'])->where('produksi', $row['produksi'])->first();
            $cek = Rules::where('nama', $row['nama'])->first();
        
            if(!$cek){
                Rules::create([
                    'nama' => $row['nama'],
                    'r1' => $row['permintaan'],
                    'r2' => $row['persediaan'], 
                    'r3' => $row['penjualan'],
                    'produksi' => $row['produksi'],
                ]);
            }else{
                $cek->update([
                    'nama' => $row['nama'],
                    'r1' => $row['permintaan'],
                    'r2' => $row['persediaan'], 
                    'r3' => $row['penjualan'],
                    'produksi' => $row['produksi'],
                ]);
            }
        }
        
    }
}
