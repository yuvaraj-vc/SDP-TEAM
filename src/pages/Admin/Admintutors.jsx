import React, { useState } from 'react';
import { Dialog, DialogOverlay, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const Admintutors = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);

  // Dummy tutor list with subjects
  const tutors = [
    { id: 1, name: 'Me', email: 'me@example.com', subjects: 'Math' },
    { id: 2, name: 'You', email: 'You@example.com', subjects: 'English' }
  ];

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  const openDeleteModal = (tutor) => {
    setSelectedTutor(tutor);
    setDeleteModalOpen(true);
  };
  const closeDeleteModal = () => setDeleteModalOpen(false);

  const openEditModal = (tutor) => {
    setSelectedTutor(tutor);
    setEditModalOpen(true);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Tutors</h2>
      
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">List of Tutors</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 ">S.No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 ">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 ">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 ">Subjects</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tutors.map((tutor, index) => (
              <tr key={tutor.id}>
                <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4  text-gray-500">{tutor.name}</td>
                <td className="px-6 py-4  text-gray-500">{tutor.email}</td>
                <td className="px-6 py-4 text-gray-500">{tutor.subjects}</td>
                <td className="px-6 py-4  font-medium">
                  <button onClick={() => openEditModal(tutor)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                  <button onClick={() => openDeleteModal(tutor)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <Dialog open={isAddModalOpen} onOpenChange={setAddModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-white p-4 rounded shadow-lg max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle>Add New Tutor</DialogTitle>
          </DialogHeader>
          <form >
            <div className="mb-2">
              <label className="block mb-1">Name</label>
              <input type="text" id="tutorName" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Email</label>
              <input type="email" id="tutorEmail" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Subjects</label>
              <input type="text" id="tutorSubjects" className="w-full p-2 border rounded" />
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              <button type="button" onClick={closeAddModal} className="bg-gray-300 text-black p-2 rounded">Cancel</button>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Tutor</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

    
      <Dialog open={isEditModalOpen} onOpenChange={setEditModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-white p-4 rounded shadow-lg max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle>Edit Tutor</DialogTitle>
          </DialogHeader>
          <form >
            <div className="mb-2">
              <label className="block mb-1">Name</label>
              <input type="text" id="editTutorName" defaultValue={selectedTutor?.name} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Email</label>
              <input type="email" id="editTutorEmail" defaultValue={selectedTutor?.email} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Subjects</label>
              <input type="text" id="editTutorSubjects" defaultValue={selectedTutor?.subjects} className="w-full p-2 border rounded" />
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              <button type="button" className="bg-gray-300 text-black p-2 rounded">Cancel</button>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Changes</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      
      <Dialog open={isDeleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-white p-4 rounded shadow-lg max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="mb-4">
            Are you sure you want to delete {selectedTutor?.name}?
          </div>
          <DialogFooter>
            <button className="bg-gray-300 text-black p-2 rounded mr-2">Cancel</button>
            <button  className="bg-red-500 text-white p-2 rounded">Delete</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="bg-white p-4 rounded shadow mb-4 flex justify-center">
        <button className="bg-blue-500 text-white p-2 rounded">Add New Tutor</button>
      </div>
    </div>
  );
};

export default Admintutors;
