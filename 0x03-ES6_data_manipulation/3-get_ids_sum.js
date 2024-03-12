/* function that returns the sum of all student ids */

export default function getStudentIdsSum(getListStudents) {
  const arr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return arr.reduce(((reducer, arr) => reducer + arr.id), 0);
}
