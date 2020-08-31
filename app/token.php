<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class token extends Model
{
    protected $table = 'tokens';
    protected $primaryKey = 'ID_TOKEN';
    public $timestamps = true;
    protected $fillable = [
        'ID_USER',
        'TOKEN_USERNAME',
        'TOKEN_PASSWORD',
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    protected $hidden = [
        'ID_USER'
    ];

    public function user()
    {
        return $this->belongsTo(User::class,'id');
    }
}
