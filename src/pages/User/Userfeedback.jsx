import React from 'react';
import { Button} from '@/components/ui/button';
import{Input} from'@/components/ui/input';
import{Label} from'@/components/ui/label';
import{Textarea} from'@/components/ui/textarea';

const Userfeedback = ({ handleSubmit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Submit Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label className="block text-sm font-medium text-gray-700">
            Name
          </Label>
          <Input type="text"id="name"name="name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <Label className="block text-sm font-medium text-gray-700">
            Subject
          </Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <Label  className="block text-sm font-medium text-gray-700">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Submit Feedback
        </Button>
      </form>
    </div>
  );
};

export default Userfeedback;
