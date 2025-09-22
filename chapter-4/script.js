const tinhTrungBinh = (toan, van, anh) => {
  return (toan + van + anh) / 3;
};

const xepLoai = (diem) => {
  if (diem >= 9) {
    return "Xuat sac";
  } else {
    if (diem >= 8 && diem < 9) {
      return "Gioi";
    } else {
      if (diem >= 6.5 && diem < 8) {
        return "Kha";
      } else {
        return "Trung binh";
      }
    }
  }
};

const diemToan = 3;
const diemVan = 8;
const diemAnh = 10;

console.log(`Diem trung binh: ${tinhTrungBinh(diemToan, diemAnh, diemVan)}
Xep loai: ${xepLoai(tinhTrungBinh(diemToan, diemAnh, diemVan))}`);
