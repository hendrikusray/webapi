<?php

namespace App\Transformers;
use League\Fractal\TransformerAbstract;
use App\User;

class User_Transformer extends TransformerAbstract
{
    /**
     * Transform Barang.
     *
     * @param user $user
     */
    public function transform(user $user)
    {
        return [
            'id' => $user->id,
            'username' => $user->username,
            'password' => $user->password,

            // 'NAME' => optional($user->pegawai)->name
        ];
    }
}