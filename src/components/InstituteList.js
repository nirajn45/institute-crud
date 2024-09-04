import React, { useEffect, useState } from 'react';
import { getInstitutes, deleteInstitute } from '../firebase/firestoreService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const InstituteList = ({ onSelectInstitute }) => {
  const [institutes, setInstitutes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInstitutes = async () => {
      const data = await getInstitutes();
      setInstitutes(data);
    };
    fetchInstitutes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteInstitute(id);
      setInstitutes(institutes.filter(institute => institute.id !== id));
      toast.success('Institute deleted successfully');
    } catch (error) {
      toast.error('Error deleting institute');
    }
  };

  const handleViewStudents = (institute) => {
    navigate(`/students`, { state: { institute } });
  };

  return (
    <div className="mt-4">
      <table className="w-full bg-white rounded-md shadow-lg">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="p-2 text-center">Institute Name</th>
            <th className="p-2 text-center">Address</th>
            <th className="p-2 text-center">Contact No</th>
            <th className="p-2 text-center">Email</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {institutes.map(institute => (
            <tr key={institute.id} className="text-center shadow-lg ">
              <td className="p-3 uppercase text-[15px] font-medium">{institute.name}</td>
              <td className="p-3 uppercase text-[15px] font-medium">{institute.address}</td>
              <td className="p-3 uppercase text-[15px] font-medium">{institute.contact}</td>
              <td className="p-3 uppercase text-[15px] font-medium">{institute.email}</td>
              <td className="p-3 uppercase text-[15px] font-medium">
                <button
                  onClick={() => handleViewStudents(institute)}
                  className="bg-blue-900 text-white p-2 rounded-md mr-2"
                >
                  View Students
                </button>
                <button
                  onClick={() => onSelectInstitute(institute)}
                  className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(institute.id)}
                  className="bg-red-500 text-white p-2 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstituteList;
