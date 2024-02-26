import React from 'react'

function Footer() {
  return (
    <footer className=' h-3/4  border sticky py-16 bg-slate-950 w-full text-white '>
    <div className='flex flex-wrap justify-around w-full'>
            <div className='h-fit'>
                <h1 className='text-5xl font-bold py-5'>CRED!</h1>
            </div>
            <div className='gap-y-3 h-fit'>
                <ul className=''>
                    <li className='font-bold text-md py-5'>Product</li>
                    <li className='text-sm'>CRED Pay</li>
                    <li className='text-sm'>credit score check</li>
                </ul>
            </div>
            <div className='h-fit'>
                <ul>
                    <li className='font-bold text-md py-5'>CRED</li>
                    <li className='text-sm'>about</li>
                    <li className='text-sm'>careers</li>
                    <li className='text-sm'>IPL</li>
                    <li className='text-sm'>customer care</li>
                </ul>
            </div>
            <div className='h-fit'>
                <ul>
                    <li className='font-bold text-md py-5'>Resources</li>
                    <li className='text-sm'>articles</li>
                    <li className='text-sm'>tech blogs</li>
                    <li className='text-sm'>calculator</li>
                    <li className='text-sm'>credit card payment guid</li>
                    <li className='text-sm'>credit score</li>
                </ul>
            </div>
        </div>
        <div className=' flex justify-around items-center h-3/4 bg-slate-950 '>
            <p className='text-md text-gray-500'>copyright © 2020-23 Aakash Malviya.</p>
            <p className='text-md text-gray-500'>privacy policy | terms and conditions | returns and refund</p>
        </div>
    </footer>
  )
}

export default Footer
