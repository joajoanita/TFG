<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;


class BlogController extends Controller
{

    //Crear un post y almacenar una imagen junto a él
    public function blogStore(Request $request){
        $request->validate([
            'title' => 'required|string|max:50',
            'description' => 'required|string|max:2000',
            'blogImage' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'blogTag' => 'nullable|string',
        ]);

        try {
            $imageName = null;
            if ($request->hasFile('blogImage')) {
                $imageName = time().'.'.$request->blogImage->extension();
                $request->blogImage->move(public_path('images/blogPost'), $imageName);
            }

            $userId = Auth::id();

            $blogPost = Blog::create([
                'title' => $request->title,
                'description' => $request->description,
                'blogImage' => $imageName,
                'blogTag' => $request->blogTag,
                'user_id' => $userId,
            ]);
            
            return response()->json(['message' => 'El blog se ha creado con éxito', 'blogPost' => $blogPost], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'No se ha podido crear el post', 'error' => $e->getMessage()], 500);
        }
    }

    //Indexar(mostrar) TODOS los post que tenemos creados en el blog
    public function index(){
        $blogPosts = Blog::all();
        return response()->json($blogPosts, 200);
    }

    //Eliminar el post que queramos según ID
    public function delete($id) {

        $blogPost = Blog::find($id);
        

        if (!$blogPost) {
            return response()->json(['message' => 'No se ha encontrado el post buscado'], 404);
        } else{

        // Le estamos asignando a imageFile el nombre de la imagen del post
        $imageFile = $blogPost->blogImage; 
        //Aquí le estamos asignando la ruta donde he almacenado la imagen y la concateno con el nombre de la imagen 
        $imagePath = public_path('images/blogPost/' . $imageFile); 

        //Estamos haciendo un condicional para ver si existe, si existe, lo elimina y sino me da error 500
        if ($imageFile && file_exists($imagePath)) {  //Aquí verificamos que el nombre de la imagen existe en esa ruta
            if (!unlink($imagePath)) { //Si no existe, no puede eliminarla y me da error 500
                return response()->json(['message' => 'No se ha podido borrar la imagen'], 500); 
            }
        }
            $blogPost->delete();
        
            return response()->json(['message' => 'El post se ha eliminado con éxito'], 200);
        }

       
    }

    //Mostrar por pantalla un ÚNICO post de blog (para visualizarlo)
    public function displayPost($id){
        $blogPost = Blog::find($id);

        if (!$blogPost) {
            return response()->json(['message' => 'No se ha encontrado ese post'], 404);
        } else {
            return response()->json($blogPost, 200);
        }
    }

    //Editar un ÚNICO post de blog 
    public function editBlog($id, Request $request){
        $blogPost = Blog::find($id);
        
        if (!$blogPost) {
            return response()->json(['error' => 'Blog post not found'], 404);
        }
        
        $blogPost->title = $request->title;
        $blogPost->description = $request->description;
        $blogPost->blogTag = $request->blogTag;
        $blogPost->blogImage = $request->blogImage;
        $blogPost->update();
    }
}
