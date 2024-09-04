import React, { useState, useEffect } from 'react';
import { getInstitutes } from '../firebase/firestoreService';
import StudentForm from '../components/StudentForm';
import SearchStudent from '../components/SearchStudent';
import Button from '../components/Button';
import ToastNotification from '../components/ToastNotification';

const StudentsPage = () => {
  const [instituteList, setInstituteList] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchInstitutes = async () => {
      const data = await getInstitutes();
      setInstituteList(data);
    };
    fetchInstitutes();
  }, []);
  useEffect(() => {
    console.log('Students data:', students); // Verify the data
  }, [students]);

  return (
    <div className="p-4 w-9/12 ml-32  bg-slate-50 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">STUDENTS</h2>
      <SearchStudent instituteList={instituteList} />
      <StudentForm institute={instituteList[0]} setStudents={setStudents} />
      <Button data={students} />
      <ToastNotification />
    </div>
  );
};

export default StudentsPage;
