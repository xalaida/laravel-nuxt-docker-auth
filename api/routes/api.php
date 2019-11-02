<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'namespace' => 'Auth',
], function () {
    Route::get('user', 'UsersController@show');
    Route::post('register', 'RegisterController@store');
});

Route::group([
    'middleware' => 'auth',
], function () {
    Route::get('dashboard', function () {
        return ['status' => 'success'];
    });
});
