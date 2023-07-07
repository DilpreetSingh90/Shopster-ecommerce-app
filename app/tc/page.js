import React from 'react'

export const metadata = {
  title: "Shopster",
};

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-16 md:mt-24 lg:mt-10 text-black'>
        <h1 className='text-2xl font-extrabold md:text-4xl lg:text-5xl'>Terms & Conditions</h1>
        <p className='mt-10 text-xl font-semibold w-[80vw] md:w-[65vw] lg:w-[50vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className='mt-10 text-xl font-semibold w-[80vw] md:w-[65vw] lg:w-[50vw] mb-20'>
        Egestas tellus rutrum tellus pellentesque eu. Interdum velit laoreet id donec ultrices tincidunt. 
        Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Integer malesuada nunc vel 
        risus commodo viverra maecenas accumsan lacus. Eget est lorem ipsum dolor sit amet consectetur. Senectus 
        et netus et malesuada. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Et ligula 
        ullamcorper malesuada proin libero nunc consequat interdum. Vel turpis nunc eget lorem dolor. Suscipit 
        adipiscing bibendum est ultricies integer quis auctor. Eleifend quam adipiscing vitae proin sagittis nisl 
        rhoncus. Netus et malesuada fames ac turpis egestas sed tempus urna.
        </p>
    </div>
  )
}

export default page