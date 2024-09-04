import React, { useState } from 'react';
import { addStudent } from '../firebase/firestoreService';
import { toast } from 'react-toastify';

const StudentForm = ({ institute }) => {
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = {
      name ,
      batch,
      course,
      semester,
      institute: institute.name
    };

    try {
      await addStudent(studentData);
      toast.success('Student added successfully');
      setName('');
      setBatch('');
      setCourse('');
      setSemester('');
    } catch (error) {
      toast.error('Error adding student');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4  bg-slate-50  shadow-lg rounded-md mt-4">
      <div className="mb-4">
        <label className="block text-gray-700">Student Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Batch</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Course</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Semester</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-blue-900 text-white p-2 rounded-md">
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;
