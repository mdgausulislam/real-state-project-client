import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { FaFacebookMessenger } from "react-icons/fa";

const CustomChatbot = () => {
    const [botOpen, setBotOpen] = useState(false);

    const steps = [
        {
            id: 'greeting',
            message: 'Welcome to Our Real Estate project!',
            trigger: 'askName',
        },
        {
            id: 'askName',
            message: 'Please Enter Your Name!',
            trigger: 'waiting1',
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name',
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}, please select your issue',
            trigger: 'issues',
        },
        {
            id: 'issues',
            options: [
                { value: 'React', label: 'React', trigger: 'React' },
                { value: 'Angular', label: 'Angular', trigger: 'Angular' },
            ],
        },
        {
            id: 'React',
            message: 'Thanks for reporting your React issues',
            end: true,
        },
        {
            id: 'Angular',
            message: 'Thanks for reporting your Angular issues',
            end: true,
        },
    ];

    const handleEnd = ({ steps, values }) => {
        // Handle the end of the chat (if needed)
        // For example, you might want to toggle the chatbot off here
        setBotOpen(false);
    };

    const handleTrigger = (event) => {
        // Handle user interaction based on the trigger
        const { trigger } = event;

        if (trigger === 'openChatbot') {
            setBotOpen(true);
        } else if (trigger === 'closeChatbot') {
            setBotOpen(false);
        }
        // Add other trigger actions if needed
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '1000',
        }}>
            {botOpen ? (
                <React.Fragment>
                    <ChatBot
                        steps={steps}
                        handleEnd={handleEnd}
                        handleTrigger={handleTrigger}
                    />
                    <button onClick={() => setBotOpen(false)}><FaFacebookMessenger className='w-8 h-8 text-blue-500' /></button>
                </React.Fragment>
            ) : (
                <button onClick={() => setBotOpen(true)}><FaFacebookMessenger className='w-8 h-8 text-blue-500' /></button>
            )}
        </div>
    );
};

export default CustomChatbot;

