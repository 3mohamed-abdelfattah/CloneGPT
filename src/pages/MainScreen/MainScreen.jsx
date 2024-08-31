import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, BigLight, Discord, Flash, Light, Limit, Logout, Send, Updates } from '@/utils/icons.util';
import { AIIcon, Chat, Delete, DesLike, Edit, Like, Reload, UserIcon } from '../../utils/icons.util';

export const MainScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState('');

    const handleSearch = () => {
        setResult(searchQuery);
    };

    const styles = {
        DescriptionText: 'text-sm bg-TextBackground rounded w-60 h-16 flex items-center justify-center p-1',
        CenterGrid: 'grid content-center justify-items-center',
        DescriptionTextGap: 'grid gap-4 justify-items-center',
        SideBarText: 'flex items-center gap-3',
        ResponseContainer: 'flex gap-8 w-full p-2 md:pl-48 my-5',
        ResponseText: 'text-sm md:text-base leading-7 max-w-2xl text-left text-white',
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-5 text-white h-screen'>
            {/* SideBar */}
            <div className='grid col-span-1 bg-[#202123] content-between'>
                <div>
                    <Link to='/ChatGPT/start' className='flex items-center gap-4 py-4 px-4 text-[13.5px]/[27px] border-solid border-2 border-[#444654] m-2 rounded-md'>
                        <Plus />
                        <p>New chat</p>
                    </Link>
                    <Link to='/ChatGPT/start' className='flex items-center gap-4 py-4 px-4 text-[13.5px]/[27px] border-solid border-2 bg-[#343540] border-[#343540] m-2 rounded-md'>
                        <Chat />
                        <p>Chatbot definition exp</p>
                        <Edit />
                        <Delete />
                    </Link>
                </div>
                <div>
                    <hr className='mx-2 border-[#444654]' />
                    <div className='grid gap-9 p-5 text-sm'>
                        <Link to='/ChatGPT/start' className={styles.SideBarText}>
                            <Delete />
                            <p className='leading-7'>Clear conversations</p>
                        </Link>
                        <span className={styles.SideBarText}>
                            <Light />
                            <p className='leading-7'>Light mode</p>
                        </span>
                        <Link to='https://discord.com/invite/openai' className={styles.SideBarText}>
                            <Discord />
                            <p className='leading-7'>OpenAI Discord</p>
                        </Link>
                        <Link to='https://help.openai.com/en/articles/8554407-gpts-faq' className={styles.SideBarText}>
                            <Updates />
                            <p className='leading-7'>Updates & FAQ</p>
                        </Link>
                        <Link to='/ChatGPT/login' className={styles.SideBarText}>
                            <Logout />
                            <p className='leading-7'>Log out</p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Page */}
            <div className='grid col-span-4 content-center justify-items-center text-center leading-5'>
                {/* Search Result */}
                <div className='h-[70vh] w-full'>
                    <div className='grid text-sm text-[#9A9B9F] font-normal p-1 '>

                        {/* User */}
                        <div className={styles.ResponseContainer}>
                            <UserIcon />
                            <p className={styles.ResponseText}>{result ? result : 'Search for something...'}</p>
                        </div>

                        {/* AI */}
                        <div className='bg-[#444654]'>
                            <div className={styles.ResponseContainer}>
                                <div>
                                    <AIIcon />
                                </div>
                                <p className={styles.ResponseText}>A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.</p>
                                <div className='flex gap-4 h-fit'>
                                    <Like />
                                    <DesLike />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Search Bar */}
                <div className='grid w-full px-4 md:px-0'>
                    <div className='flex mx-2 md:mx-48 items-center mt-24 mb-14 h-12 bg-[#40414E] rounded border-1 border-[#303139]'>
                        <div>
                            <Link to='/ChatGPT/start' className='flex gap-2  absolute -bottom- left-1/2 md:bottom-36 md:left-1/2 items-center py-1 px-3 text-[13.5px]/[27px] border-solid border-2 border-[#444654] m-2 rounded-md'>
                                <Reload />
                                <p className='text-[#C5C5D1]'>Regenerate response</p>
                            </Link>
                            <br />
                        </div>
                        <input
                            className='flex-1 h-full bg-[#40414E] p-3'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button onClick={handleSearch} className='mx-3'>
                            <Send />
                        </button>
                    </div>
                    <p className='text-sm text-[#9A9B9F] font-normal p-1'>
                        <Link to='https://help.openai.com/en/articles/6825453-chatgpt-release-notes' className='underline decoration-solid'>
                            ChatGPT Jan 9 Version.
                        </Link> Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.
                    </p>
                </div>
            </div>
        </div>
    );
}