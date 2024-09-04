import React from 'react';
import { utils, writeFile } from 'xlsx';

const Button = ({ data }) => {
  const handleExport = () => {
    if (data.length === 0) {
      alert('No data to export'); // Provide user feedback if no data is available
      return;
    }

    // Transform data if needed
    const formattedData = data.map(student => ({
      Name: student.name,
      Batch: student.batch,
      Course: student.course,
      Semester: student.semester,
      Institute: student.institute,
    }));

    const worksheet = utils.json_to_sheet(formattedData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Students');
    writeFile(workbook, 'students_data.xlsx');
  };

  return (
    <button onClick={handleExport} className="bg-green-600 text-white p-2 rounded-md mt-4">
      Export to Excel
    </button>
  );
};

export default Button;
