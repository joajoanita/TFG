<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserController;

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
     Route::get('/displayPost/{id}',     [BlogController::class, 'displayPost']);
     Route::put('/editBlog/{id}',        [BlogController::class, 'editBlog']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'user'
], function($router){
    Route::get('/displayUsers',         [UserController::class, 'displayUsers']);
    Route::put('/editUsers/{id}',       [UserController::class, 'editUsers']);
    Route::delete('/deleteUsers/{id}',  [UserController::class, 'deleteUsers']);
});

