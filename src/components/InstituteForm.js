import React, { useState, useEffect } from 'react';
import { addInstitute, updateInstitute } from '../firebase/firestoreService';
import { toast } from 'react-toastify';

const InstituteForm = ({ selectedInstitute, onFormSubmit }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (selectedInstitute) {
      setName(selectedInstitute.name);
      setAddress(selectedInstitute.address);
      setContact(selectedInstitute.contact);
      setEmail(selectedInstitute.email);
    } else {
      resetForm();
    }
  }, [selectedInstitute]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedInstitute) {
        await updateInstitute(selectedInstitute.id, { name, address, contact, email });
        toast.success('Institute updated successfully');
      } else {
        await addInstitute({ name, address, contact, email });
        toast.success('Institute added successfully');
      }
      resetForm();
      onFormSubmit();
    } catch (error) {
      toast.error('Error submitting form');
    }
  };

  const resetForm = () => {
    setName('');
    setAddress('');
    setContact('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-4">
        <label className="block mb-2">Institute Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Contact No</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-900 text-white p-2 rounded-md">
        {selectedInstitute ? 'Update Institute' : 'Add Institute'}
      </button>
    </form>
  );
};

export default InstituteForm;
