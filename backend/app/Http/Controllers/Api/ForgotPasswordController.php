<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\PasswordReset;

class ForgotPasswordController extends Controller
{
    //
    protected function sendResetLinkResponse(Request $request)
    {
		$email = $request->only('email');
		var_dump($email);
		$validator = Validator::make($request->all(), [
			'email' => "required|email"
		]);
		if ($validator->fails()) {
			return response(['errors'=>$validator->errors()->all()], 422);
		}
		$response =  Password::sendResetLink($email);
		var_dump($response);
		var_dump(Password::RESET_LINK_SENT);
		if($response == Password::RESET_LINK_SENT){
			$message = "Mail send successfully";
		}else{
			$message = "Email could not be sent to this email address";
		}
		/* $message = $response == Password::RESET_LINK_SENT ? 'Mail send successfully' : GLOBAL_SOMETHING_WANTS_TO_WRONG;
		$response = ['data'=>'','message' => $message];
			return response($response, 200);
		} */
	}
}
