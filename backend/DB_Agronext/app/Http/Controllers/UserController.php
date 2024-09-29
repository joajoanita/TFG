<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //

    public function displayUsers(){
        $users= User::all();
        return response()->json($users, 200);
    }

    public function deleteUsers($id){
        $user = User::find($id);
        

        if (!$user) {
            return response()->json(['message' => 'No se ha encontrado el usuario buscado'], 404);
        } else{

        // Le estamos asignando a imageFile el nombre de la imagen del post
        $imageFile = $user->userImage; 
        //Aquí le estamos asignando la ruta donde he almacenado la imagen y la concateno con el nombre de la imagen 
        $imagePath = public_path('images/userProfileImage/' . $imageFile); 

        //Estamos haciendo un condicional para ver si existe, si existe, lo elimina y sino me da error 500
        if ($imageFile && file_exists($imagePath)) {  //Aquí verificamos que el nombre de la imagen existe en esa ruta
            if (!unlink($imagePath)) { //Si no existe, no puede eliminarla y me da error 500
                return response()->json(['message' => 'No se ha podido borrar la imagen'], 500); 
            }
        }
            $user->delete();
        
            return response()->json(['message' => 'El post se ha eliminado con éxito'], 200);
        }

    }

    public function editUsers(){
        $user = User::find($id);
        
        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }
        
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->password_confirmation = $request->password_confirmation;
        $user->update();
    }
}
