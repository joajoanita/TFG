<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

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

/*
Route::group([
    'middleware' => 'api',
    'prefix' => 'blog'
], function ($router){
     //Este almacena los post en la base de datos
     Route::post('', [BlogPostController::class, 'blogPostStore']);
     //Este nos muestra los post cuando los pidamos
     Route::get('/blogPost', [BlogPostController::class, 'index']);
     
     Route::delete('/blogPost/{id}', [BlogPostController::class, 'delete']);
     Route::get('/blogPost/{id}', [BlogPostController::class, 'showBlog']);
     Route::put('/blogEdit/{id}', [BlogPostController::class, 'editBlog']);
});

*/