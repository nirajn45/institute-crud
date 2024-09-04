import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Add a new institute
export const addInstitute = async (institute) => {
  await addDoc(collection(db, 'institutes'), institute);
};

// Get all institutes
export const getInstitutes = async () => {
  const snapshot = await getDocs(collection(db, 'institutes'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Update an institute
export const updateInstitute = async (id, updatedData) => {
  const instituteRef = doc(db, 'institutes', id);
  await updateDoc(instituteRef, updatedData);
};

// Delete an institute
export const deleteInstitute = async (id) => {
  const instituteRef = doc(db, 'institutes', id);
  await deleteDoc(instituteRef);
};

// Add student data
export const addStudent = async (student) => {
  await addDoc(collection(db, 'students'), student);
};

// Get students by institute
export const getStudentsByInstitute = async (instituteName) => {
  const snapshot = await getDocs(collection(db, 'students'));
  return snapshot.docs
    .filter(doc => doc.data().institute === instituteName)
    .map(doc => ({ id: doc.id, ...doc.data() }));
};

// export const getStudentsByInstituteId = async (instituteId) => {
//   try {
//     const studentsCollection = collection(db, 'students');
//     const q = query(studentsCollection, where('institute', '==', instituteId));
//     const querySnapshot = await getDocs(q);
//     const students = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     return students;
//   } catch (error) {
//     console.error("Error fetching students: ", error);
//     throw error;
//   }
// };