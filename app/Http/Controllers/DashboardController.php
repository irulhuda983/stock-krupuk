<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dataset;

class DashboardController extends Controller
{
    
    public function grafik()
    {
        $dataset = Dataset::get();
        $label = [];
        
        foreach($dataset as $item){
            array_push($label, $item->bulan.'-'.$item->tahun);
        }

        $data = [
            'label' => $label,
            'permintaan' => $dataset->pluck('permintaan')->all(),
            'penjualan' => $dataset->pluck('penjualan')->all(),
            'persediaan' => $dataset->pluck('persediaan')->all(),
            'produksi' => $dataset->pluck('produksi')->all(),
        ];

        return response()->json($data, 200);
    }
}
