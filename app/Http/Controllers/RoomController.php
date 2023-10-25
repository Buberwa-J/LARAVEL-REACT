<?php

namespace App\Http\Controllers;

use App\Models\Messages;
use App\Models\Room;
use App\Models\UserRelations;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $myRelations = UserRelations::where('user_id', $user->id)
            ->get();

        $myPublicRooms = collect();
        $myPrivateRooms = collect();
        if ($myRelations) {
            foreach ($myRelations as $relation) {
                $room = Room::where('id', $relation->room_id)
                    ->first();
                if ($room->room_type === 'private')
                    $myPrivateRooms->push($room);
                else
                    $myPublicRooms->push($room);
            }
        }
        return Inertia::render('Room/AllRooms', compact('myPublicRooms', 'myPrivateRooms'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Room $room)
    {
        $user = Auth::user();
        $messages = Messages::where('room_id', $room->id)
            ->get();
        return Inertia::render('Messages/ChatWindow', compact('messages', 'user'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Room $room)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Room $room)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Room $room)
    {
        //
    }
}
