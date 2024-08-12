import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Userprofile = () => {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(!editing);
  };

  return (
    <div className='max-w-3xl mx-auto p-6 bg-ivory rounded-lg shadow-md'>
      <div className='flex items-center mb-6'>
        <Avatar className='w-24 h-24'>
          <AvatarImage src='https://github.com/shadcn.png' alt='Profile Picture' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='ml-4'>
          <h1 className='text-3xl font-bold'>Demo User</h1>
          <p className='text-gray-600'>demo@gmail.com</p>
        </div>
        <button 
          onClick={handleEditClick} 
          className='ml-auto p-2 text-blue-500 hover:text-blue-700 focus:outline-none'
        >
          <Edit2 size={20} />
        </button>
      </div>

      <div className='mt-10'>
        {editing ? (
          <EditProfile />
        ) : (
          <div>
            <div className='border-t border-gray-200 pt-6'>
              <h2 className='text-2xl font-semibold'>User Information</h2>
              <div className='mt-6 space-y-2'>
                <div>
                  <h3 className='font-medium'>Username</h3>
                  <p className='text-gray-600'>demouser</p>
                </div>
                <div>
                  <h3 className='font-medium'>Email</h3>
                  <p className='text-gray-600'>demo@example.com</p>
                </div>
                <div>
                  <h3 className='font-medium'>Phone</h3>
                  <p className='text-gray-600'>+91 7806935124</p>
                </div>
                <div>
                  <h3 className='font-medium'>Address</h3>
                  <p className='text-gray-600'>w33,wblock,kovaipudur</p>
                </div>
              </div>
            </div>
            
            <div className='mt-6 text-center'>
              <Link 
                to='/user/resume' 
                className='inline-block px-4 py-2 bg-gray-200 text-black rounded-md transition-colors font-semibold'>
                 Back 
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EditProfile = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold'>Edit Profile</h2>
      <form className='mt-6 space-y-4'>
        <div>
          <label className='block text-sm font-medium'>Username</label>
          <input 
            type='text' 
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md' 
            placeholder='demo'
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Email</label>
          <input 
            type='email' 
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md' 
            placeholder='demo@example.com'
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Phone</label>
          <input 
            type='text' 
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md' 
            placeholder='+91 7806953279'
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Address</label>
          <input 
            type='text' 
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md' 
            placeholder='w33,wblock,kovaipudur.'
          />
        </div>
        <div className='text-right'>
          <button 
            type='submit' 
            className='inline-block px-4 py-2 bg-indigo-600 text-white rounded-md transition-colors font-semibold hover:bg-indigo-700'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Userprofile;
