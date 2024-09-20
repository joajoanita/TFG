<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login',       [AuthController::class, 'login']);
    Route::post('/register',    [AuthController::class, 'register']);
    Route::post('/logout',      [AuthController::class, 'logout']);
    Route::post('/refresh',     [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'blog'
], function ($router){
     Route::post('/blogStore',           [BlogController::class, 'blogStore']);
     Route::get('/blogIndex',            [BlogController::class, 'index']);
     Route::delete('/deletePost/{id}',   [BlogController::class, 'delete']);
     Route::get('/displayPost/{id}',     [BlogController::class, 'displayBlog']);
     Route::put('/editPost/{id}',        [BlogController::class, 'editBlog']);
});

