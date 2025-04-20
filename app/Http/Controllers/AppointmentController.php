<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'pet_name' => 'required|string|max:255',
            'pet_type' => 'required|string|max:255',
            'appointment_type' => 'required|string|max:255',
            'start_date' => 'required|date|after_or_equal:today',
            'notes' => 'nullable|string',
        ]);

        Appointment::create($validatedData);

        return response()->json(['success' => true, 'message' => 'Appointment saved successfully']);
    }
}
