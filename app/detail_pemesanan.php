<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class detail_pemesanan extends Model
{
    protected $table="detail_pemesanan";
    protected $primaryKey="ID_DETAIL_PEMESANAN";
    public $timestamps=true;
    protected $fillable=[
        'ID_SPAREPARTS','ID_PEMESANAN','JUMLAH_PEMESANAN','HARGA_BELI_PEMESANAN','SATUAN'
    ];

    public function pemesanan_sparepart()
    {
        return $this->belongsTo(pemesanan_sparepart::class,'ID_PEMESANAN');
    }
    public function sparepart()
    {
        return $this->belongsTo(sparepart::class,'ID_SPAREPARTS');
    }
}
