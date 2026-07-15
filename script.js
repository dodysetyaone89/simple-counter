let count = 0;

const elAngka  = document.getElementById('angka');
const elStatus = document.getElementById('status');

function updateTampilan() {
  elAngka.textContent = count;

  // warna angka
  elAngka.className = 'angka ' + (count > 0 ? 'positif' : count < 0 ? 'negatif' : 'nol');

  // status teks
  if (count > 0)      elStatus.textContent = '🟢 Positif';
  else if (count < 0) elStatus.textContent = '🔴 Negatif';
  else                elStatus.textContent = 'Mulai hitung ✨';

  // animasi pop
  elAngka.classList.add('pop');
  setTimeout(() => elAngka.classList.remove('pop'), 150);
}

function tambah() { count++; updateTampilan(); }
function kurang() { count--; updateTampilan(); }
function reset()  { count = 0; updateTampilan(); }
