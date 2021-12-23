<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ForgotPasswordController;
use App\Http\Controllers\Api\ResetPasswordController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login', [UserController::class, 'login']);
Route::post('register', [UserController::class, 'register']);
 

//Route::post('forgot-password', [ForgotPasswordController::class, 'sendResetLinkResponse'])->name('passwords.sent');
Route::post('reset', [ResetPasswordController::class, 'sendResetResponse'])->name('passwords.reset');

Route::group(['middleware' => 'auth:api'], function(){
 Route::post('user-details', [UserController::class, 'userDetails']);
});


Route::get('forget-password', [ForgotPasswordController::class, 'showForgetPasswordForm'])->name('forget.password.get');
Route::post('forget-password', [ForgotPasswordController::class, 'submitForgetPasswordForm'])->name('forget.password.post'); 
Route::get('reset-password/{token}', [ForgotPasswordController::class, 'showResetPasswordForm'])->name('reset.password.get');
Route::post('reset-password', [ForgotPasswordController::class, 'submitResetPasswordForm'])->name('reset.password.post');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
