import React from "react";
import { Head, Link } from "@inertiajs/react";
import { InertiaLink } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ChatWindow({ messages,user }) {
    return (
        <>
            {/* Main Container */}
            <div>
            <ul>
                    {messages ? (
                        messages.map((message, index) => (
                   
                            <li key={index} className="'text-black m-2 p-2">
                                @if (message.sender_id == user.id) ?
                                    (<p className="text-blue-500">Message: {message.content} Sent By:{message.sender_id}</p>)
                                :(
  <p className="text-green-500">Message: {message.content} Sent By:{message.sender_id}</p>
                                )
             </li>
                    ))):
                        (<h1> Start texting now!</h1>)
                }
                     </ul>
            </div>
        </>
    )
}