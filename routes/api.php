<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\TrackController;

Route::get('/albums', [AlbumController::class, 'index']);
Route::post('/albums', [AlbumController::class, 'store']);
Route::delete('/albums/{album}', [AlbumController::class, 'destroy']);
Route::get('/search', [AlbumController::class, 'search']);

Route::post('/albums/{album}/tracks', [TrackController::class, 'store']);
Route::delete('/tracks/{track}', [TrackController::class, 'destroy']);

