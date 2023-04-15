const origin = "EaWCMCS/v2"; // กำหนด origin ที่ต้องการ
const config = {
  css: ["/extension/bootstrap.min.css", "/extension/custom.css", "/extension/font/bootstrap-icons.css"],
  js: ["/extension/jquery.min.js", "/extension/bootstrap.bundle.min.js"]
};
const cssList = config.css.map((url) => `<link rel="stylesheet" href="${url}">`).join("");
const jsList = config.js.map((url) => `<script src="${url}"></script>`).join("");
document.write(`<meta name="origin" content="${origin}">`); // เพิ่ม meta tag เพื่อกำหนด origin
document.write(cssList);
document.write(jsList);

// เช็คว่าอยู่ในหน้า login.html หรือไม่
if (window.location.pathname !== '/login.html') {
  // ถ้าไม่ใช่ ตรวจสอบว่ามีคีย์ Status ใน localStorage หรือไม่
  const status = localStorage.getItem('Status');
  if (!status) {
    // ถ้าไม่มี ให้เปลี่ยนหน้าไปที่ login.html
    window.location.href = '/login.html';
  }
}

if (window.location.pathname === '/login.html') {
  // ตรวจสอบว่ามีคีย์ Status ใน localStorage และมีค่าเป็น 'OK' หรือไม่
  const status = localStorage.getItem('Status');
  if (status == 'OK') {
    // ถ้าไม่มีหรือค่าไม่เป็น 'OK' ให้เปลี่ยนหน้าไปที่ login.html
    window.location.href = '/main.html';
  }
} 

const ipAddress = localStorage.getItem('ipAddress');
const port = localStorage.getItem('port');