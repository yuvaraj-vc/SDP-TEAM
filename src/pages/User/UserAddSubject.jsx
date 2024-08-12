import { Label } from '@/components/ui/label';
import React, { useState, useEffect } from 'react';
import cn from 'classnames';

const UserAddSubject = () => {
  const [subjectCode, setSubjectCode] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [subjectCredit, setSubjectCredit] = useState('');
  const [subjectHours, setSubjectHours] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subject added');
    setSubjectCode('');
    setSubjectName('');
    setSubjectCredit('');
    setSubjectHours('');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='font-mono h-[80vh] overflow-hidden'>
      <div className='text-2xl mr-[70vw] font-bold'>
        Add Subject
        </div>
        <div className='flex flex-col justify-center items-center'>

      <form onSubmit={handleSubmit} className=''>
        <div className='font-mono flex flex-col gap-5'>
          <div className="flex items-center ">
            <Label className="w-2/4 text-[15px]">Enter Subject Code</Label>
            <input
              type="text"
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.target.value)}
              required
              className={cn(
                "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
                "focus:border-b-[4px_solid_#ea8f21] text-black"
              )}
            />
          </div>
          <div className="flex items-center">
            <Label className="w-2/4 text-[15px]">Enter Subject Name</Label>
            <input
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              required
              className={cn(
                "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
                "focus:border-b-[4px_solid_#ea8f21] text-black"
              )}
            />
          </div>
          <div className="flex items-center">
            <Label className="w-2/4 text-[15px]">Enter Subject Credit</Label>
            <input
              type="text"
              value={subjectCredit}
              onChange={(e) => setSubjectCredit(e.target.value)}
              required
              className={cn(
                "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
                "focus:border-b-[4px_solid_#ea8f21] text-black"
              )}
            />
          </div>
          <div className="flex items-center">
            <Label className="w-2/4 text-[15px]">Enter Subject Hours</Label>
            <input
              type="text"
              value={subjectHours}
              onChange={(e) => setSubjectHours(e.target.value)}
              required
              className={cn(
                "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
                "focus:border-b-[4px_solid_#ea8f21] text-black"
              )}
            />
          </div>
        </div>
        <div className='flex justify-center mt-8 h-[50vh]'>
          <button 
            type="submit"
            className={cn(
              "outline-[none] flex justify-center items-center flex-col no-underline rounded-[5px] w-[30%] h-[10%] border-[none] bg-[rgb(227,_227,_232)] text-[#020227] duration-700",
              "hover:bg-[#060620] hover:text-[rgb(227,_227,_232)] hover:border-[1px] hover:border-[solid] hover:border-[rgb(250,250,250)] hover:decoration-clone"
            )}
          >
            Add Subject 
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default UserAddSubject;
