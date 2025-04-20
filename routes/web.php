<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;

Route::get('/', function () {
    return view('app');
});

Route::post('/appointments', [AppointmentController::class, 'store']);
