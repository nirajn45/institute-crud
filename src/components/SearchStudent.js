import React, { useState } from 'react';
import { getStudentsByInstitute } from '../firebase/firestoreService';
import { toast } from 'react-toastify';

const SearchStudent = ({ instituteList }) => {
  const [selectedInstitute, setSelectedInstitute] = useState('');
  const [students, setStudents] = useState([]);

  const handleSearch = async () => {
    if (!selectedInstitute) {
      toast.error('Please select an institute');
      return;
    }

    try {
      const data = await getStudentsByInstitute(selectedInstitute);
      setStudents(data);
      if (data.length === 0) {
        toast.info('No students found');
      }
    } catch (error) {
      toast.error('Error searching for students');
    }
  };

  return (
    <div className="mt-4">
      <div className="mb-4">
        <label className="block text-gray-700">Select Institute</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          value={selectedInstitute}
          onChange={(e) => setSelectedInstitute(e.target.value)}
        >
          <option value="">Select Institute</option>
          {instituteList.map((institute, index) => (
            <option key={index} value={institute.name}>
              {institute.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSearch} className="bg-blue-900 text-white p-2 rounded-md">
        Search Students
      </button>

      {students.length > 0 && (
        <table className="w-full bg-white shadow-md rounded-md mt-4">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-2">Student Name</th>
              <th className="p-2">Batch</th>
              <th className="p-2">Course</th>
              <th className="p-2">Semester</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className='shadow-lg '>
                <td className="p-3 text-center uppercase text-[15px] font-medium">{student.name}</td>
                <td className="p-3 text-center uppercase text-[15px] font-medium">{student.batch}</td>
                <td className="p-3 text-center uppercase text-[15px] font-medium">{student.course}</td>
                <td className="p-3 text-center uppercase text-[15px] font-medium">{student.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchStudent;
