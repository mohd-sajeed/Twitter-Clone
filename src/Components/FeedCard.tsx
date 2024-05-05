import React from 'react' 
import { BiBarChart, BiMessageRounded, BiRepost } from 'react-icons/bi' 
import { IoHeartOutline } from 'react-icons/io5' 
import { RiShare2Line } from 'react-icons/ri' 
 
const FeedCard:React.FC = () => { 
  return ( 
    <div className='border border-gray-800 p-4 hover:bg-gray-900 cursor-pointer border-b-0'> 
      <div className='grid grid-cols-12'> 
        <div className='col-span-1'> 
          <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' alt='user-avatar' className='h-10 w-10'/> 
        </div> 
        <div className='col-span-11'> 
          <h5>Mohd Sajeed</h5> 
          <p className='text-sm'> 
            I came across firebase. it is amazing it also provides backend, DB, Auth, real-time DB services. As compared to strapi 😵‍💫 this was more easy to understand.</p> 
            <div className='flex justify-between text-xl text-gray-500 font-bold w-[518px] mt-2'>  
              <div> 
              <BiMessageRounded /> 
              </div> 
              <div> 
              <BiRepost /> 
              </div> 
              <div> 
              <IoHeartOutline />  
              </div> 
              <div> 
              <BiBarChart /> 
              </div> 
              <div> 
              <RiShare2Line /> 
              </div> 
            </div> 
        </div> 
 
      </div> 
    </div> 
  ) 
} 
 
export default FeedCard