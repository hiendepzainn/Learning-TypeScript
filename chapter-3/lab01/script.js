const fullName = "Dinh Xuan Hien";
const birthYear = 2003;
let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

console.log(`
    Tên: ${fullName}
    Tuổi: ${currentYear - birthYear}
    Sinh viên: ${isStudent}
    `);
