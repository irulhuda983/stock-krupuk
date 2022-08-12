<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prediksi;
use App\Http\Resources\PrediksiResource;

class PrediksiController extends Controller
{
    public function index(Request $request)
    {
        $data = Prediksi::paginate($request->total ?? 10);

        return PrediksiResource::collection($data);
    }

    public function show(Prediksi $prediksi)
    {
        return new PrediksiResource($prediksi);
    }

    public function store(Request $request)
    {
        $request->validate([
            'minggu_ke' => 'required',
            'bulan' => 'required',
            'tahun' => 'required',
            'persediaan' => 'required',
            'permintaan' => 'required',
            'penjualan' => 'required',
            'produksi' => 'required',
        ]);

        $data = Prediksi::create([
            'minggu_ke' => $request->minggu_ke,
            'bulan' => $request->bulan,
            'tahun' => $request->tahun,
            'persediaan' => $request->persediaan,
            'permintaan' => $request->permintaan,
            'penjualan' => $request->penjualan,
            'produksi' => $request->produksi,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil tambah Prediksi',
            'data' => new PrediksiResource($data),
        ], 200);
    }

    public function update(Request $request, Prediksi $prediksi)
    {
        $request->validate([
            'minggu_ke' => 'required',
            'bulan' => 'required',
            'tahun' => 'required',
            'persediaan' => 'required',
            'permintaan' => 'required',
            'penjualan' => 'required',
            'produksi' => 'required',
        ]);

        $data = $prediksi->update([
            'minggu_ke' => $request->minggu_ke,
            'bulan' => $request->bulan,
            'tahun' => $request->tahun,
            'persediaan' => $request->persediaan,
            'permintaan' => $request->permintaan,
            'penjualan' => $request->penjualan,
            'produksi' => $request->produksi,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil ubah Prediksi',
            'data' => new PrediksiResource($data),
        ], 200);
    }

    public function destroy(Prediksi $prediksi)
    {
        $data = $prediksi->delete();

        return response()->json([
            'success' => true,
            'message' => 'Berhasil hapus Prediksi',
            'data' => new PrediksiResource($data),
        ], 200);
    }
}
