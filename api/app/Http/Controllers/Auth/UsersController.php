<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Authenticated user action.
     *
     * @param Request $request
     * @return mixed
     */
    public function show(Request $request)
    {
        return $request->user();
    }
}
