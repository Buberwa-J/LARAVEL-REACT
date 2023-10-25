import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ShowFriends({ auth, friends }) {
    return (
        <>
      
            <Head title="My Friends" />

            {/* Main Container */}
            <div className="flex h-screen bg-white p-4">
                <div className="w-full">
                    <h1 className="text-xl font-bold mb-4">My Friends</h1>
                    <ul>
                        {friends && friends.length ? (
                            friends.map((friend, index) => (
                                <li key={index} className="mb-2">
                                    <InertiaLink href={`/user/${friend.id}`} className="text-blue-500 hover:underline">
                                        {friend.name}
                                    </InertiaLink>
                                    <span className="ml-2 text-gray-500">{friend.email}</span>
                                </li>
                            ))
                        ) : (
                            <p>You have no friends added yet.</p>
                        )}
                    </ul>
                </div>
            </div>

            </>
    );
}
