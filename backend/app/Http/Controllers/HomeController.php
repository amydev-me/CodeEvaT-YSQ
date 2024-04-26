<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use App\Models\Category;

class HomeController extends Controller
{
    public function index() {
        // $images = Image::with('category')->get();
        $images = Image::join('categories', 'images.category_id', '=', 'categories.id')->select(['images.*', 'categories.name'])->get();
        $categories =   Category::whereIn('id', $images->pluck('category_id'))->distinct('name')->orderBy('name')->get()->pluck('name');

        return response()->json([
            'images' => $images,
            'categories' => $categories
        ]);
    }
}
