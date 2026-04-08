// 1. Proje Verileri (Array)
const projeler = [
    { ad: "Klinik Randevu Sistemi", kategori: "Web", resim: "proje1.jpg" },
    { ad: "Unity Macera Oyunu", kategori: "Oyun", resim: "proje2.jpg" },
    { ad: "Döviz Takip Paneli", kategori: "Web", resim: "proje3.jpg" },
    { ad: "E-Ticaret Arayüzü", kategori: "Web", resim: "proje4.jpg" },
    { ad: "Mobil Skor Takibi", kategori: "Oyun", resim: "proje5.jpg" }
];

const projeGaleri = document.getElementById('projeGaleri');

// 2. Projeleri Listeleme Fonksiyonu (Map kullanımı)
function projeleriGoster(liste) {
    projeGaleri.innerHTML = "";
    liste.forEach(proje => {
        const kart = `
            <div class="proje-kart">
                <h3>${proje.ad}</h3>
                <p>Kategori: ${proje.kategori}</p>
            </div>`;
        projeGaleri.innerHTML += kart;
    });
}

// 3. İnteraktif Filtreleme (Filter kullanımı)
function projeleriFiltrele(kategori) {
    if (kategori === 'Hepsi') {
        projeleriGoster(projeler);
    } else {
        const filtreliListe = projeler.filter(p => p.kategori === kategori);
        projeleriGoster(filtreliListe);
    }
}

// 4. Karanlık/Aydınlık Mod
const temaButon = document.getElementById('temaDegistir');
temaButon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 5. Typewriter Efekti (Ekstra Efekt 1)
const metin = "Merhaba, Ben Antoine Bryan.";
let index = 0;
function yaz() {
    if (index < metin.length) {
        document.getElementById("yaziEfekti").innerHTML += metin.charAt(index);
        index++;
        setTimeout(yaz, 100);
    }
}

// Başlangıçta çalışacaklar
projeleriGoster(projeler);
yaz();
