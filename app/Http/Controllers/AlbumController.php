<?php

namespace App\Http\Controllers;

use App\Models\Album;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function index()
    {
        return Album::with('tracks')->get();
    }

    public function store(Request $request)
    {
        $album = Album::create($request->only('name'));
        return response()->json($album, 201);
    }

    public function destroy(Album $album)
    {
        $album->delete();
        return response()->json(null, 204);
    }

    public function search(Request $request)
    {
        $query = $request->query('query');
        $results = Album::where('name', 'LIKE', "%{$query}%")
                        ->orWhereHas('tracks', function ($q) use ($query) {
                            $q->where('name', 'LIKE', "%{$query}%");
                        })
                        ->get();

        return response()->json($results);
    }
}
