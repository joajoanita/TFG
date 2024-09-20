<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;



class AuthController extends Controller
{
    // Para que no haya una clase accesible sin token, exluiremos login y register. 
    // Es decir, si no te logueas no puedes acceder.
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request){
        
        $validator = Validator::make($request->all(),[
            'email' => 'required|email',
            'password' => [
                'required',
                'string',
                'min:8',
                'regex:/[A-Z]/',     // Uppercase password
                'regex:/[a-z]/',     // Lowercase password
                'regex:/[0-9]/',     // Number password
                'regex:/[@$!%*?&#]/' //Alphanumeric password
            ],
        ]);

        if ($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    public function register(Request $request){

        $existingUser = User::find(1);


        $validator = Validator::make($request->all(),[
            'name' => 'required|string|between:2,20',
            'email' => 'required|email|string|max:100|unique:users',
            'password' => [
                'required',
                'string',
                'min:8',
                'regex:/[A-Z]/',     // Uppercase password
                'regex:/[a-z]/',     // Lowercase password
                'regex:/[0-9]/',     // Number password
                'regex:/[@$!%*?&#]/' //Alphanumeric password
            ],
        ]);

        if ($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        // Determinar el privilegio del nuevo usuario
        $privilege = $existingUser ? 'user' : 'admin';

         // Crear el nuevo usuario con el rol adecuado
         $user = User::create(array_merge(
        $validator->validated(),
        [
            'password' => bcrypt($request->password),
            'privilege' => $privilege
        ]
         ));
    }

    public function logout(){
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }

    // Crea un nuevo token en un corto periodo de tiempo para invalidar el usuario que está logued en eses momento si el token JWT no es nuevo.
    public function refresh(){
        return $this->createNewToken(auth()->refresh());
    }
        
    // Renderiza los datos del usuario que ha iniciado sesión 
    public function userProfile() {
        return response()->json(auth()->user());
    }

 

    // Crea un nuevo token de autentificación JWT durante el tiempo que hemos puesto (expires_in)
    protected function createNewToken($token){
        return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL() * 60,
        'user' => auth()->user()
        ]);
    }
}
