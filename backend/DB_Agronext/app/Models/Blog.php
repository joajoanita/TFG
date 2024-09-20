<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $table = 'blog_post'; 
    
    protected $fillable = [
        'title',
        'description',
        'blogImage',
        'blogTag',
        'id_user',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
