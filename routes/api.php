<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout')->middleware('auth:sanctum');
Route::get('/profil', 'AuthController@profil')->middleware('auth:sanctum');


Route::middleware('auth:sanctum')->group(function(){

    Route::prefix('dashboard')->group(function() {
        Route::get('/grafik', 'DashboardController@grafik');
    });

    Route::prefix('dataset')->group(function() {
        Route::get('/', 'DatasetController@index');
        Route::get('/{dataset}', 'DatasetController@show');
        Route::post('/store', 'DatasetController@store');
        Route::post('/import', 'DatasetController@import');
        Route::post('/{dataset}/update', 'DatasetController@update');
        Route::delete('/{dataset}/delete', 'DatasetController@destroy');
    });

    Route::prefix('rules')->group(function() {
        Route::get('/', 'RulesController@index');
        Route::get('/{rules}', 'RulesController@show');
        Route::post('/import', 'RulesController@import');
        Route::post('/store', 'RulesController@store');
        Route::post('/{rules}/update', 'RulesController@update');
        Route::delete('/{rules}/delete', 'RulesController@destroy');
    });

    Route::prefix('prediksi')->group(function() {
        Route::get('/', 'PrediksiController@index');
        Route::get('/{prediksi}/show', 'PrediksiController@show');
        Route::get('/fuzzy/{id}', 'PrediksiController@fuzzyfikasi');
        Route::get('/show-prediksi', 'PrediksiController@showPrediksi');
        Route::post('/store', 'PrediksiController@store');
        Route::post('/{prediksi}/update', 'PrediksiController@update');
        Route::delete('/{prediksi}/delete', 'PrediksiController@destroy');
    });

});