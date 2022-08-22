<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Dataset;
use App\Models\Rules;
use Illuminate\Support\Facades\DB;

class Fuzzy extends Model
{
    use HasFactory;

    public function variable()
    {
        $persediaan_total = DB::table('dataset')->sum('dataset.persediaan');
        $persediaan_jumlah = DB::table('dataset')->count('dataset.persediaan');

        $permintaan_total = DB::table('dataset')->sum('dataset.permintaan');
        $permintaan_jumlah = DB::table('dataset')->count('dataset.permintaan');

        $penjualan_total = DB::table('dataset')->sum('dataset.penjualan');
        $penjualan_jumlah = DB::table('dataset')->count('dataset.penjualan');

        $produksi_total = DB::table('dataset')->sum('dataset.produksi');
        $produksi_jumlah = DB::table('dataset')->count('dataset.produksi');

        // persediaan
        $persediaan_max = DB::table('dataset')->max('dataset.persediaan');
        $persediaan_min = DB::table('dataset')->min('dataset.persediaan');
        $persediaan_mid = $persediaan_total / $persediaan_jumlah;

        // permintaan
        $permintaan_max = DB::table('dataset')->max('dataset.permintaan');
        $permintaan_min = DB::table('dataset')->min('dataset.permintaan');
        $permintaan_mid = $permintaan_total / $permintaan_jumlah;

        // penjualan
        $penjualan_max = DB::table('dataset')->max('dataset.penjualan');
        $penjualan_min = DB::table('dataset')->min('dataset.penjualan');
        $penjualan_mid = $penjualan_total / $penjualan_jumlah;

        // produksi
        $produksi_max = DB::table('dataset')->max('dataset.produksi');
        $produksi_min = DB::table('dataset')->min('dataset.produksi');
        $produksi_mid = $produksi_total / $produksi_jumlah;

        $data = [
            'persediaan' => [
                'min' => (int) $persediaan_min,
                'max' => (int) $persediaan_max,
                'mid' => $persediaan_mid,
            ],

            'permintaan' => [
                'min' => (int) $permintaan_min,
                'max' => (int) $permintaan_max,
                'mid' => $permintaan_mid,
            ],

            'penjualan' => [
                'min' => (int) $penjualan_min,
                'max' => (int) $penjualan_max,
                'mid' => $penjualan_mid,
            ],

            'produksi' => [
                'min' => (int) $produksi_min,
                'max' => (int) $produksi_max,
                'mid' => $produksi_mid,
            ],
        ];

        // $data = [
        //     'persediaan' => [
        //         'min' => 200,
        //         'mid' => 500,
        //         'max' => 800,
        //     ],

        //     'permintaan' => [
        //         'min' => 400,
        //         'mid' => 700,
        //         'max' => 1000,
        //     ],

        //     'penjualan' => [
        //         'min' => 100,
        //         'mid' => 300,
        //         'max' => 500,
        //     ],

        //     'produksi' => [
        //         'min' => 450,
        //         'mid' => 700,
        //         'max' => 1000,
        //     ],
        // ];

        return $data;
    }

    public function getFuzzy($nilai)
    {
        
        $fuzzyfikasi = [
            'permintaan' => [
                'sedikit' => $this->permintaan_sedikit($nilai['permintaan']),
                'sedang' => $this->permintaan_sedang($nilai['permintaan']),
                'banyak' => $this->permintaan_banyak($nilai['permintaan']),
            ],
            'penjualan' => [
                'sedikit' => $this->penjualan_sedikit($nilai['penjualan']),
                'sedang' => $this->penjualan_sedang($nilai['penjualan']),
                'banyak' => $this->penjualan_banyak($nilai['penjualan']),
            ],
            'persediaan' => [
                'sedikit' => $this->persediaan_sedikit($nilai['persediaan']),
                'sedang' => $this->persediaan_sedang($nilai['persediaan']),
                'banyak' => $this->persediaan_banyak($nilai['persediaan']),
            ],
        ];

        return [
            'variable' => $this->variable(),
            'fuzzyfikasi' => $fuzzyfikasi,
            'inferensi' => $this->inferensi($fuzzyfikasi),
            'defuzzyfikasi' => $this->defuzzyfikasi($this->inferensi($fuzzyfikasi)),
        ];
    }

    public function inferensi($data)
    {
        $rule = Rules::all();

        $inferensi = [];

        foreach($rule as $key => $item){
            $permintaan  = 0;
            $penjualan  = 0;
            $persediaan  = 0;

            if($item->r1 == 'sedikit'){
                $penjualan = $data['penjualan']['sedikit'];
            }elseif($item->r1 == 'sedang'){
                $penjualan = $data['penjualan']['sedang'];
            }elseif($item->r1 == 'banyak'){
                $penjualan = $data['penjualan']['banyak'];
            }

            if($item->r2 == 'sedikit'){
                $permintaan = $data['permintaan']['sedikit'];
            }elseif($item->r2 == 'sedang'){
                $permintaan = $data['permintaan']['sedang'];
            }elseif($item->r2 == 'banyak'){
                $permintaan = $data['permintaan']['banyak'];
            }

            if($item->r3 == 'sedikit'){
                $persediaan = $data['persediaan']['sedikit'];
            }elseif($item->r3 == 'sedang'){
                $persediaan = $data['persediaan']['sedang'];
            }elseif($item->r3 == 'banyak'){
                $persediaan = $data['persediaan']['banyak'];
            }

            $index = (int) $key + 1;
            $predikat = min([$permintaan, $penjualan, $persediaan]);
            $hasil_predikat = $this->hasilPredikat($predikat, $item->produksi);

            $inferensi[] = [
                'nama' => 'R'.$index,
                'permintaan' => $permintaan,
                'penjualan' => $penjualan,
                'persediaan' => $persediaan,
                'predikat' => $predikat,
                'hasil_predikat' => $hasil_predikat,
                'perkalian' => $predikat * $hasil_predikat,
                'produksi' => $item->produksi,
            ];
        }

        return $inferensi;
    }

    public function hasilPredikat($predikat, $produksi)
    {
        $var = $this->variable();
        $min = $var['produksi']['min'];
        $max = $var['produksi']['max'];

        $hasil = $produksi == 'sedikit' ? $max - ($predikat * ($max - $min)) : $min + ($predikat * ($max - $min));
        // $hasil = $produksi == 'sedikit' ? 1 : 0;

        return (float) $hasil;
    }

    public function defuzzyfikasi($inferensi)
    {
        $predikat = [];
        $hasil = [];

        foreach($inferensi as $item){
            array_push($predikat, $item['predikat']);
            array_push($hasil, ($item['predikat'] * $item['hasil_predikat']));
        }

        $defuzzy = array_sum($hasil) / array_sum($predikat);
        return [
            'predikat' => array_sum($predikat),
            'jumlah' => array_sum($hasil),
            'hasil' => $defuzzy, 
        ];
    }

    // persediaan
    public function persediaan_sedikit($x)
    {
        $var = $this->variable();
        return $this->sedikit((int) $x, $var['persediaan']['min'], $var['persediaan']['mid'], $var['persediaan']['max']);
    }

    public function persediaan_sedang($x)
    {
        $var = $this->variable();
        return $this->sedang((int) $x, $var['persediaan']['min'], $var['persediaan']['mid'], $var['persediaan']['max']);
    }

    public function persediaan_banyak($x)
    {
        $var = $this->variable();
        return $this->banyak((int) $x, $var['persediaan']['min'], $var['persediaan']['mid'], $var['persediaan']['max']);
    }
    // end persediaan

    // permintaan
    public function permintaan_sedikit($x)
    {
        $var = $this->variable();
        return $this->sedikit((int) $x, $var['permintaan']['min'], $var['permintaan']['mid'], $var['permintaan']['max']);
    }

    public function permintaan_sedang($x)
    {
        $var = $this->variable();
        return $this->sedang((int) $x, $var['permintaan']['min'], $var['permintaan']['mid'], $var['permintaan']['max']);
    }

    public function permintaan_banyak($x)
    {
        $var = $this->variable();
        return $this->banyak((int) $x, $var['permintaan']['min'], $var['permintaan']['mid'], $var['permintaan']['max']);
    }
    // end permintaan

    // penjualan
    public function penjualan_sedikit($x)
    {
        $var = $this->variable();
        return $this->sedikit((int) $x, $var['penjualan']['min'], $var['penjualan']['mid'], $var['penjualan']['max']);
    }

    public function penjualan_sedang($x)
    {
        $var = $this->variable();
        return $this->sedang((int) $x, $var['penjualan']['min'], $var['penjualan']['mid'], $var['penjualan']['max']);
    }

    public function penjualan_banyak($x)
    {
        $var = $this->variable();
        return $this->banyak((int) $x, $var['penjualan']['min'], $var['penjualan']['mid'], $var['penjualan']['max']);
    }
    // end penjualan


    public function sedikit($x, $min, $mid, $max)
    {
        if($x >= $mid){
            // rendah salah
            return 0;
        }else if($x >= $min && $x <= $mid){
            // hitung
            return ($mid - $x) / ($mid - $min);
        }elseif($x <= $min){
            return 1;
        }else{
            return $x;
        }
    }

    public function sedang($x, $min, $mid, $max)
    {
        // bernilai 0
        if($x <= $min || $x >= $max){
            return 0;
        }else if($x >= $min && $x <= $mid){
            return ($x - $min) / ($mid - $min);
        }else if($x >= $mid && $x <= $max){
            return ($max - $x) / ($max -$mid);
        }else{
            return $x;
        }
    }

    public function banyak($x, $min, $mid, $max)
    {
        if($x <= $mid){
            return 0;
        }elseif($x >= $mid && $x <= $max){
            return ($x - $mid) / ($max - $mid);
        }elseif($x >= $max){
            return 1;
        }else{
            return $x;
        }
    }

}
