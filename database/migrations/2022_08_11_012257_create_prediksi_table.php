<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrediksiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prediksi', function (Blueprint $table) {
            $table->id();
            $table->string('kode_produksi')->unique()->nullable();
            // $table->string('barang')->nullable();
            $table->string('minggu_ke')->nullable();
            $table->string('bulan')->nullable();
            $table->string('tahun')->nullable();
            $table->float('persediaan')->nullable();
            $table->float('permintaan')->nullable();
            $table->float('penjualan')->nullable();
            $table->float('produksi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prediksi');
    }
}
