var Ho_ten = "Lê thị bé Nhỏ";
var So_ky_tu = Ho_ten.length;
console.log(So_ky_tu);
var Ho_ten_Chu_hoa = Ho_ten.toUpperCase();
var Ho_ten_Chu_thuong = Ho_ten.toLocaleLowerCase();
console.log(Ho_ten_Chu_hoa);
console.log(Ho_ten_Chu_thuong);
var Ky_tu_dau = Ho_ten[0];
var Ky_tu_cuoi = Ho_ten[Ho_ten.length - 1];
console.log(`Ký tự đầu: ${Ky_tu_dau} Ký tự cuối: ${Ky_tu_cuoi}`);
var Loi_chao= "Xin chào " + Ho_ten;
console.log(Loi_chao);
var Hop_le=Ho_ten.trim() !="";
var Dieu_kien=Ho_ten.includes("K");
var Chi_so=Ho_ten.indexOf("t");
console.log(`Hợp lệ: ${Hop_le}`)
console.log(`Điều kiện: ${Dieu_kien}`)
console.log(`Chỉ số: ${Chi_so}`)
var Thanh_phan_con=Ho_ten.split(" ");
console.log(Thanh_phan_con)
var  Ho=Thanh_phan_con[0];
var Ten=Thanh_phan_con[Thanh_phan_con.length-1]
console.log(Ho)
console.log(Ten)
var Chu_lot=Ho_ten.replace(Ho,"").replace(Ten,"").trim();
console.log(Chu_lot);