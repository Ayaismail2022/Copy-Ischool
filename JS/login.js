// users الافتراضيين
const users = [
  { email: 'test1@example.com', password: '123456' },
  { email: 'admin@ischool.com', password: 'admin123' },
  { email: 'user@domain.com', password: 'pass1234' }
];

// لما يضغط المستخدم على زرار Login
document.getElementById('loginBtn').addEventListener('click', function () {
  const emailInput = document.getElementById('email').value.trim();
  const passwordInput = document.getElementById('password').value.trim();

  const foundUser = users.find(user => user.email === emailInput && user.password === passwordInput);

  if (foundUser) {
    // لو البيانات صح ننتقل للصفحة الجديدة
    window.location.href = "./index.html";
    // ← غيري دي للرابط اللي عندك
  } else {
    alert("البريد الإلكتروني أو كلمة السر غير صحيحة ⚠️");
  }
});



// شكل العين

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("toggleIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}
