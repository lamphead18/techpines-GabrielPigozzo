<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Models\Track;
use Illuminate\Http\Request;

class TrackController extends Controller
{
    public function store(Request $request, Album $album)
    {
        $track = $album->tracks()->create($request->only('name'));
        return response()->json($track, 201);
    }

    public function destroy(Track $track)
    {
        $track->delete();
        return response()->json(null, 204);
    }
}
