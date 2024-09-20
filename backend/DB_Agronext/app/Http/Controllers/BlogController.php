<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\Auth;


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
    public function delete($id){
        $blogPost = Blog::find($id);

        if(!$blogPost) {
            return response()->json(['message' => 'No se ha encontrado el post buscado'], 404);
        } else {
            $blogPost->delete();
            return response()->json(['message' => 'El post se ha eliminado con éxito'], 200);
        }  
    }

    //Mostrar por pantalla un ÚNICO post de blog (para visualizarlo)
    public function displayPost($id){
        $blogPost = Blog::find($id);

        if (!$blogPost) {
            return response()->json(['message' => 'No se ha encontrado ese post específico'], 404);
        } else {
            return response()->json($blogPost, 200);
        }
    }

    //Editar un ÚNICO post de blog 
    public function editBlog($id, Request $request){
        $blogPost = BlogPost::find($id);
        
        $blogPost->title = $request->title;
        $blogPost->description = $request->description;
        $blogPost->blogTag = $request->blogTag;
        $blogPost->blogImage = $request->blogImage;
        $blogPost->update();
    }
}
