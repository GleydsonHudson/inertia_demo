<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', static function () {
    return inertia('Home');
});

Route::get('/users', static function () {
    return inertia('Users',[
        'time' => now()->toTimeString()
    ]);
});

Route::get('/settings', static function () {
    return inertia('Settings');
});

Route::post('/logout', static function () {
    dd('logging the user out');
});