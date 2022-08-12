<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rules;
use App\Http\Resources\RulesResource;

class RulesController extends Controller
{
    public function index(Request $request)
    {
        $data = Rules::paginate($request->total ?? 10);

        return RulesResource::collection($data);
    }

    public function show(Rules $rules)
    {
        return new RulesResource($rules);
    }

    public function store(Request $request)
    {
        $request->validate([
            'r1' => 'required',
            'r2' => 'required',
            'r3' => 'required',
            'produksi' => 'required',
        ]);

        $data = Rules::create([
            'r1' => $request->r1,
            'r2' => $request->r2,
            'r3' => $request->r2,
            'produksi' => $request->produksi,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil tambah Rules',
            'data' => new RulesResource($data),
        ], 200);
    }

    public function update(Request $request, Rules $rules)
    {
        $request->validate([
            'r1' => 'required',
            'r2' => 'required',
            'r3' => 'required',
            'produksi' => 'required',
        ]);

        $data = $rules->update([
            'r1' => $request->r1,
            'r2' => $request->r2,
            'r3' => $request->r2,
            'produksi' => $request->produksi,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil ubah Rules',
            'data' => new RulesResource($data),
        ], 200);
    }

    public function destroy(Rules $rules)
    {
        $data = $rules->delete();

        return response()->json([
            'success' => true,
            'message' => 'Berhasil hapus Rules',
            'data' => new RulesResource($data),
        ], 200);
    }
}
