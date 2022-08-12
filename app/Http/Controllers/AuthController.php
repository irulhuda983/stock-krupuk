<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        $log = auth()->attempt($credentials);

        if(!$log){
            return response()->json(['message' => 'username atau password salah'], 401);
        }

        $user = User::where('username', $request->username)->first();

        $token = $user->createToken('web-token')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token], 200);

    }

    // get profil
    public function profil(Request $request)
    {
        $user = $request->user();

        return response()->json($user, 200);
    }

    // logout
    public function logout(Request $request)
    {
        // $request->user()->tokens()->delete();
        $request->user()->currentAccessToken()->delete();

        return response()->json(['berhasil logout'], 200);
    }
}
