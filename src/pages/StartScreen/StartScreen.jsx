import React from 'react'
import { Plus, BigLight, Discord, Flash, Light, Limit, Logout, Send, Updates } from '@/utils/icons.util'
import { Link } from 'react-router-dom'

export const StartScreen = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 text-white h-screen'>

            <div className='grid col-span-1 bg-[#202123] content-between'>
                <div>
                    <div className='flex items-center gap-4 py-4 px-4 text-[13.5px]/[27px] border-solid border-2 border-[#444654] m-2 rounded-md'>
                        <Plus />
                        <p>New chat</p>
                    </div>
                </div>
                <div className=''>
                    <hr className='mx-2 border-[#444654]' />
                    <div className='grid gap-9 p-5 text-sm'>
                        <span className='flex items-center gap-3'>
                            <Light />
                            <p className='leading-7'>Light mode</p>
                        </span>
                        <span className='flex items-center gap-3'>
                            <Discord />
                            <p className='leading-7'>OpenAI Discord</p>
                        </span>
                        <span className='flex items-center gap-3'>
                            <Updates />
                            <p className='leading-7'>Updates & FAQ</p>
                        </span>
                        <span className='flex items-center gap-3'>
                            <Logout />
                            <p className='leading-7'>Log out</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className='grid col-span-4 content-center justify-items-center text-center leading-5'>
                <p className='text-2xl md:text-4xl leading-5 my-16'>ChatGPT</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='grid content-center justify-items-center'>
                        <BigLight />
                        <p className='text-base my-4'>Examples</p>
                        <div className='grid gap-4 justify-items-center'>
                            <p className='text-sm bg-TextBackground rounded w-60 h-16 flex items-center justify-center p-1'>“Explain quantum computing in simple terms” →</p>
                            <p className='text-sm bg-TextBackground rounded w-60 h-16 flex items-center justify-center p-1'>“Got any creative ideas for a 10 year old’s birthday?” →</p>
                            <p className='text-sm bg-TextBackground rounded w-60 h-16 flex items-center justify-center p-1'>“How do I make an HTTP request in Javascript?” →</p>
                        </div>
                    </div>
                    <div className='grid content-center justify-items-center'>
                        <Flash />
                        <p className='text-base my-4'>Capabilities</p>
                        <div className='grid gap-4 justify-items-center'>
                            <p className='text-sm bg-TextBackground rounded w-60 h-16 flex items-center justify-center p-1'>Remembers what user said earlier in the conversation</p>
                            <p className='text-sm bg-TextBackground rounded w-60 h-16 flex items-center justify-center p-1'>Allows user to provide follow-up corrections</p>
                            <p className='text-sm bg-TextBackground rounded w-60 h-16 flex items-center justify-center p-1'>Trained to decline inappropriate requests</p>
                        </div>
                    </div>
                    <div className='grid content-center justify-items-center'>
                        <Limit />
                        <p className='text-base my-4'>Limitations</p>
                        <div className='grid gap-4 justify-items-center'>
                            <p className='text-sm bg-TextBackground rounded w-60 h-16 flex items-center justify-center p-1'>May occasionally generate incorrect information</p>
                            <p className='text-sm bg-TextBackground rounded w-60 h-16 flex items-center justify-center p-1'>May occasionally produce harmful instructions or biased content</p>
                            <p className='text-sm bg-TextBackground rounded w-60 h-16 flex items-center justify-center p-1'>Limited knowledge of world and events after 2021</p>
                        </div>
                    </div>
                </div>
                <div className='grid w-full px-4 md:px-0'>
                    <div className='flex items-center mt-24 mb-14 mx-48 h-12 bg-[#40414E] rounded border-1 border-[#303139]'>
                        <input className='flex-1 h-full bg-[#40414E] p-3' />
                        <span className='mx-3'><Send /></span>
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
}