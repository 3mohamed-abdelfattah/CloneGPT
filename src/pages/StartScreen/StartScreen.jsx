import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, BigLight, Discord, Flash, Light, Limit, Logout, Send, Updates } from '@/utils/icons.util';
import { MainScreen } from '../MainScreen';

export const StartScreen = () => {
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
        ResponseContainer: 'flex gap-8 w-full mx-52 my-5',
        ResponseText: 'text-base leading-7 max-w-2xl text-left',
    };

    return (
        result ? (
            <MainScreen search={searchQuery} />
        ) : (
            <div className='grid grid-cols-1 md:grid-cols-5 text-white h-screen'>
                {/* SideBar */}
                <div className='grid col-span-1 bg-[#202123] content-between'>
                    <div>
                        <Link to='/ChatGPT/main' className='flex items-center gap-4 py-4 px-4 text-[13.5px]/[27px] border-solid border-2 border-[#444654] m-2 rounded-md'>
                            <Plus />
                            <p>New chat</p>
                        </Link>
                    </div>
                    <div>
                        <hr className='mx-2 border-[#444654]' />
                        <div className='grid gap-9 p-5 text-sm'>
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
                    <p className='text-2xl md:text-4xl leading-5 my-16'>ChatGPT</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className={styles.CenterGrid}>
                            <BigLight />
                            <p className='text-base my-4'>Examples</p>
                            <div className={styles.DescriptionTextGap}>
                                <p className={styles.DescriptionText}>“Explain quantum computing in simple terms” →</p>
                                <p className={styles.DescriptionText}>“Got any creative ideas for a 10 year old’s birthday?” →</p>
                                <p className={styles.DescriptionText}>“How do I make an HTTP request in Javascript?” →</p>
                            </div>
                        </div>
                        <div className={styles.CenterGrid}>
                            <Flash />
                            <p className='text-base my-4'>Capabilities</p>
                            <div className={styles.DescriptionTextGap}>
                                <p className={styles.DescriptionText}>Remembers what user said earlier in the conversation</p>
                                <p className={styles.DescriptionText}>Allows user to provide follow-up corrections</p>
                                <p className={styles.DescriptionText}>Trained to decline inappropriate requests</p>
                            </div>
                        </div>
                        <div className={styles.CenterGrid}>
                            <Limit />
                            <p className='text-base my-4'>Limitations</p>
                            <div className={styles.DescriptionTextGap}>
                                <p className={styles.DescriptionText}>May occasionally generate incorrect information</p>
                                <p className={styles.DescriptionText}>May occasionally produce harmful instructions or biased content</p>
                                <p className={styles.DescriptionText}>Limited knowledge of world and events after 2021</p>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className='grid w-full px-4 md:px-0'>
                        <div className='flex mx-2 md:mx-48 items-center mt-24 mb-14 h-12 bg-[#40414E] rounded border-1 border-[#303139]'>
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
        )
    );
};