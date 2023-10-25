import React from "react";
import { Head, Link } from "@inertiajs/react";
import { InertiaLink } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function AllRooms({ myPrivateRooms, myPublicRooms }) {
    return <>
        <Head title="My Rooms" />
        {/* Main Content */}
        <div className="p-4 h-screen bg-white flex">
            <div className="h-full w-full text-black p-2">
                <ul>
                    { myPrivateRooms ?
                        (myPrivateRooms.map((room, index) =>(
                            <Link href={route('room.instance', room.id)} key={index} className="m-2 p-2">
                                <span  className="text-orange-500 text-2xl">Room ID:</span> <span className="text-black text-2xl">{room.id}</span>
                            </Link>
                       ))):(<h1> You Dont have any chats yet</h1>)
                    }
                </ul>
            </div>
        </div>
    </>
}