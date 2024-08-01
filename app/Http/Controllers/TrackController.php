<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Models\Track;
use Illuminate\Http\Request;

class TrackController extends Controller
{
    public function store(Request $request, Album $album)
    {
        $albumId = $request->input('albumId');
        $name = $request->input('name');
        $track = $album->tracks()->insert(['albums_id'=>$albumId, 'name'=>$name]);
        return response()->json($track, 201);
    }

    public function destroy(Track $track)
    {
        $track->delete();
        return response()->json(null, 204);
    }
}
