<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SparepartMotor extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sparepart_motor', function (Blueprint $table) {
            $table->increments('ID_SPAREPART_MOTOR');
            $table->string('ID_SPAREPARTS')->nullable();
            $table->foreign('ID_SPAREPARTS')->references('ID_SPAREPARTS')->on('sparepart')->onUpdate('cascade');
            $table->integer('ID_MOTOR')->unsigned();
            $table->foreign('ID_MOTOR')->references('ID_MOTOR')->on('motor')->onUpdate('cascade');
        
           
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
        Schema::dropIfExists('sparepart_motor');
    }
}
