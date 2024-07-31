<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['api'])->name('dashboard');

Route::middleware('api')->group(function () {
    Route::get('/albums', [AlbumController::class, 'index']);
    Route::post('/albums', [AlbumController::class, 'store']);
    Route::delete('/albums/{album}', [AlbumController::class, 'destroy']);
    Route::get('/search', [AlbumController::class, 'search']);
    
    Route::post('/albums/{album}/tracks', [TrackController::class, 'store']);
    Route::delete('/tracks/{track}', [TrackController::class, 'destroy']);
});

require __DIR__.'/api.php';
