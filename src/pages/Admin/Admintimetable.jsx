import React, { useState } from 'react';
import { Dialog, DialogOverlay, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const AdminTimetable = () => {
  const [isGenerateModalOpen, setGenerateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedTimetable, setSelectedTimetable] = useState(null);

  const timetables = [
    { id: 1, course: 'Math', day: 'Monday', startTime: '10:00 AM', endTime: '12:00 PM' },
    { id: 2, course: 'English', day: 'Wednesday', startTime: '1:00 PM', endTime: '3:00 PM' }
  ];

  const openGenerateModal = () => setGenerateModalOpen(true);
  const closeGenerateModal = () => setGenerateModalOpen(false);

  const openDeleteModal = (timetable) => {
    setSelectedTimetable(timetable);
    setDeleteModalOpen(true);
  };
  const closeDeleteModal = () => setDeleteModalOpen(false);

  const openEditModal = (timetable) => {
    setSelectedTimetable(timetable);
    setEditModalOpen(true);
  };
  const closeEditModal = () => setEditModalOpen(false);

  const openViewModal = (timetable) => {
    setSelectedTimetable(timetable);
    setViewModalOpen(true);
  };
  const closeViewModal = () => setViewModalOpen(false);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Timetable</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Timetable Overview</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">S.No</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Course</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Day</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Start Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">End Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {timetables.map((timetable, index) => (
                <tr key={timetable.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{timetable.course}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{timetable.day}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{timetable.startTime}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{timetable.endTime}</td>
                  <td className="px-6 py-4 text-sm font-medium flex space-x-2">
                    <button onClick={() => openEditModal(timetable)} className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">Edit</button>
                    <button onClick={() => openDeleteModal(timetable)} className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">Delete</button>
                    <button onClick={() => openViewModal(timetable)} className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={isGenerateModalOpen} onOpenChange={setGenerateModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle>Generate Timetable Automatically</DialogTitle>
          </DialogHeader>
          <div className="mb-4">
            Click the button below to generate a timetable automatically based on the predefined rules and available data.
          </div>
          <DialogFooter>
            <button onClick={closeGenerateModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2">Cancel</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Generate Timetable</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditModalOpen} onOpenChange={setEditModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle>Edit Timetable Entry</DialogTitle>
          </DialogHeader>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Course</label>
              <input type="text" id="editTimetableCourse" defaultValue={selectedTimetable?.course} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Day</label>
              <input type="text" id="editTimetableDay" defaultValue={selectedTimetable?.day} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Start Time</label>
              <input type="text" id="editTimetableStartTime" defaultValue={selectedTimetable?.startTime} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">End Time</label>
              <input type="text" id="editTimetableEndTime" defaultValue={selectedTimetable?.endTime} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            </div>
            <div className="flex justify-end space-x-4">
              <button type="button" onClick={closeEditModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Save Changes</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="mb-4">
            Are you sure you want to delete the timetable entry for {selectedTimetable?.course} on {selectedTimetable?.day}?
          </div>
          <DialogFooter>
            <button onClick={closeDeleteModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2">Cancel</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Delete</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isViewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle>View Timetable Entry</DialogTitle>
          </DialogHeader>
          <div className="mb-4">
            <p className="text-sm text-gray-700">Course: {selectedTimetable?.course}</p>
            <p className="text-sm text-gray-700">Day: {selectedTimetable?.day}</p>
            <p className="text-sm text-gray-700">Start Time: {selectedTimetable?.startTime}</p>
            <p className="text-sm text-gray-700">End Time: {selectedTimetable?.endTime}</p>
          </div>
          <DialogFooter>
            <button onClick={closeViewModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Close</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="bg-white p-6 rounded-lg shadow mt-6 flex justify-center">
        <button onClick={openGenerateModal} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Generate Timetable</button>
      </div>
    </div>
  );
};

export default AdminTimetable;
