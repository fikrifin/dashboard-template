<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UsersController extends Controller
{
    /**
     * Display a listing of the users.
     */
    public function index(): Response
    {
        $users = User::select('id', 'name', 'email', 'created_at')
            ->latest()
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => 'user', // You can add a role column to your users table
                    'status' => 'active', // You can add a status column to your users table
                    'created_at' => $user->created_at->format('Y-m-d'),
                ];
            });

        return Inertia::render('Users', [
            'users' => $users,
        ]);
    }
}

