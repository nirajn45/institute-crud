import React, { useState } from 'react';
import InstituteForm from '../components/InstituteForm';
import InstituteList from '../components/InstituteList';
import ToastNotification from '../components/ToastNotification';

const InstitutesPage = () => {
  const [selectedInstitute, setSelectedInstitute] = useState(null);

  const handleFormSubmit = () => {
    setSelectedInstitute(null); // Reset selected institute after form submission
  };

  return (
    <div className="p-6 w-9/12 ml-32 bg-slate-50 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">INSTITUTES</h2>
      <InstituteForm selectedInstitute={selectedInstitute} onFormSubmit={handleFormSubmit} />
      <InstituteList onSelectInstitute={setSelectedInstitute} />
      <ToastNotification />
    </div>
  );
};

export default InstitutesPage;
