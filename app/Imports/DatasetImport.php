<?php

namespace App\Imports;

use App\Models\Dataset;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class DatasetImport implements ToCollection, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            Dataset::create([
                'kode_produksi' => $row['kode_produksi'],
                'minggu_ke' => $row['minggu_ke'], 
                'bulan' => $row['bulan'],
                'tahun' => $row['tahun'],
                'persediaan' => $row['persediaan'],
                'permintaan' => $row['permintaan'],
                'penjualan' => $row['penjualan'],
                'produksi' => $row['produksi'],
            ]);
        }
        
    }
}
