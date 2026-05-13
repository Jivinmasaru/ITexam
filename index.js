var form = document.getElementById("form");
var message = document.getElementById("message");

var fromSubmit = false; 
form.addEventListener("submit", function(event) {
  event.preventDefault();

  var valid = true;

  document.getElementById("errNama").innerText = "";
  document.getElementById("errKelas").innerText = "";
  document.getElementById("errJadwal").innerText = "";

  var nama = document.getElementById("nama").value.trim();
  var kelas = document.getElementById("kelas").value.trim();
  var jadwal = document.querySelector('input[name="jadwal"]:checked');

  if (nama === "") {
    document.getElementById("errNama").innerText = "Nama wajib diisi";
    valid = false;
  }

  if (kelas === "") {
    document.getElementById("errKelas").innerText = "Kelas wajib diisi";
    valid = false;
  }

  if (!jadwal) {
    document.getElementById("errJadwal").innerText = "Pilih jadwal belajar";
    valid = false;
  }

  if (valid) {
    fromSubmit = true;

    message.style.display = "block";
    message.style.backgroundColor = "#4CAF50";
    message.style.color = "white";
    message.innerText = "Pendaftaran berhasil!";

    form.reset();
  }
});

form.addEventListener("reset", function() {
  if (!fromSubmit) {
    message.style.display = "block";
    message.style.backgroundColor = "#f44336";
    message.style.color = "white";
    message.innerText = "Form telah direset!";
  }

  fromSubmit = false; 
});