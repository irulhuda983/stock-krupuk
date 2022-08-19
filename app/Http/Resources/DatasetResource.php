<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DatasetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'minggu_ke' => $this->minggu_ke,
            'bulan' => date('M', strtotime('01-'.$this->bulan.'-'.$this->tahun)),
            'tahun' => $this->tahun,
            'persediaan' => $this->persediaan,
            'permintaan' => $this->permintaan,
            'penjualan' => $this->penjualan,
            'produksi' => $this->produksi,
        ];
    }
}
