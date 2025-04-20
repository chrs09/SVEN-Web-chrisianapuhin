<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Appointment extends Model
{
    // use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'pet_name',
        'pet_type',
        'appointment_type',
        'start_date',
        'notes'
    ];
}
