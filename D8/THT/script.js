const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // mencegah reload halaman

  // ambil nilai value tiap input
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  let valid = true;

  // reset tampilan error sebelumnya
  document.querySelectorAll(".error").forEach(err => {
    err.textContent = "";
  });

  successMsg.textContent = "";

  // Validasi Nama
  if (nameInput.value.trim() === "") {
    nameInput.nextElementSibling.textContent = "Nama tidak boleh kosong.";
    nameInput.style.border = "1px solid red";
    valid = false;
  } else {
    nameInput.style.border = "1px solid #ccc";
  }

  // Validasi Email
  if (emailInput.value.trim() === "") {
    emailInput.nextElementSibling.textContent = "Email tidak boleh kosong.";
    emailInput.style.border = "1px solid red";
    valid = false;
  } else {
    emailInput.style.border = "1px solid #ccc";
  }

  // Validasi Pesan
  if (messageInput.value.trim() === "") {
    messageInput.nextElementSibling.textContent = "Pesan tidak boleh kosong.";
    messageInput.style.border = "1px solid red";
    valid = false;
  } else {
    messageInput.style.border = "1px solid #ccc";
  }

  // Jika semua valid
  if (valid) {
    successMsg.textContent = "Pesan berhasil dikirim!";
    successMsg.style.color = "green";

    form.reset(); // kosongkan form
  }
});
