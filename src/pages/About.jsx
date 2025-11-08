import React from 'react'

export default function About() {
  return (
    <div className='sm:px-16 px-4 mt-8'>
      <h1 className='font-medium text-2xl text-center'>This is <span className='text-green-600'>iNoteBook</span></h1>
      <div className='flex md:flex-row flex-col md:gap-24 gap-3 mt-8'>
        <div className='md:w-[400px] h-fit bg-gray-300 rounded overflow-hidden'>
          <img loading='lazy' src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
         <p className='flex-1 text-gray-500 line-clamp-4 sm:line-clamp-none'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident obcaecati, explicabo dignissimos fugit voluptas maiores rem aliquam enim et quia tenetur sint in nam architecto, quas nisi autem nesciunt illo laboriosam perspiciatis pariatur ratione. Expedita natus laborum et, vero rem, officiis molestiae voluptates ut sunt, numquam magni facere minima corporis officia aliquam. Ab maxime unde architecto accusantium impedit, aliquid ipsam voluptate soluta porro pariatur beatae eveniet, cumque a quia numquam quidem officiis sed doloremque quas! Sit consequuntur natus est reprehenderit dolore soluta ut distinctio magnam illum voluptate excepturi inventore in harum laborum architecto sed possimus, nisi aspernatur iure doloribus at.</p>
      </div>
      <div className='flex md:flex-row-reverse flex-col md:gap-24 gap-3 mt-8'>
        <div className='md:w-[400px] h-fit  bg-gray-300 rounded overflow-hidden'>
          <img loading='lazy' src="https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
         <p className='flex-1 text-gray-500 line-clamp-4 sm:line-clamp-none'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident obcaecati, explicabo dignissimos fugit voluptas maiores rem aliquam enim et quia tenetur sint in nam architecto, quas nisi autem nesciunt illo laboriosam perspiciatis pariatur ratione. Expedita natus laborum et, vero rem, officiis molestiae voluptates ut sunt, numquam magni facere minima corporis officia aliquam. Ab maxime unde architecto accusantium impedit, aliquid ipsam voluptate soluta porro pariatur beatae eveniet, cumque a quia numquam quidem officiis sed doloremque quas! Sit consequuntur natus est reprehenderit dolore soluta ut distinctio magnam illum voluptate excepturi inventore in harum laborum architecto sed possimus, nisi aspernatur iure doloribus at.</p>
      </div>

    </div>
  )
}
