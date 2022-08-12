<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dataset;
use App\Http\Resources\DatasetResource;
use App\Imports\DatasetImport;
use Maatwebsite\Excel\Facades\Excel;

class DatasetController extends Controller
{
    
    public function index(Request $request)
    {
        $data = Dataset::paginate($request->total ?? 10);

        return DatasetResource::collection($data);
    }

    public function show(Dataset $dataset)
    {
        return new DatasetResource($dataset);
    }

    public function import(Request $request)
    {
        $request->validate([
            'file' => 'required|max:10000|mimes:xlsx,xls'
        ]);

        $path = $request->file('file');

        Excel::import(new DatasetImport, $path);

        return response()->json([
            'status' => 'success',
        ]);
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

        $data = Dataset::create([
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
            'message' => 'Berhasil tambah dataset',
            'data' => new DatasetResource($data),
        ], 200);
    }

    public function update(Request $request, Dataset $dataset)
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

        $data = $dataset->update([
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
            'message' => 'Berhasil ubah dataset',
            'data' => new DatasetResource($data),
        ], 200);
    }

    public function destroy(Dataset $dataset)
    {
        $data = $dataset->delete();

        return response()->json([
            'success' => true,
            'message' => 'Berhasil hapus dataset',
            'data' => new DatasetResource($data),
        ], 200);
    }
}
