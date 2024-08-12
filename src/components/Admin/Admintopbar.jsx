import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from '../toggle';

const AdminTopbar = () => {
  return (
    <div className='h-[8vh] w-full bg-black-100 flex justify-center items-center border-b border-gray-400'>
      <div className='w-[90%] flex items-center justify-end gap-4'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcxn.png" alt="@shadcn" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
    </div>
  );
}

export default AdminTopbar;
