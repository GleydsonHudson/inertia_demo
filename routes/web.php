<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/', static function () {
    return inertia('Home');
});

Route::get('/users', static function () {
    return inertia('Users', [
        'users' => User::select(['id', 'name'])->paginate(10),
    ]);
});

Route::get('/settings', static function () {
    return inertia('Settings');
});

Route::post('/logout', static function () {
    dd('logging the user out');
});
