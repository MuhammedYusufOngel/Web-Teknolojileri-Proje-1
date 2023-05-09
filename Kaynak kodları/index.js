"use strict";
var motoGPresim = false;
var sehrimResim = false;
var mirasResim = false;
var tiklanma = 0;

var _slayt = document.getElementsByClassName("slayt");
var slaytSayisi = _slayt.length;
var slaytNo = 0;
var i = 0;
var slayt_bilgi = new Array();
slayt_bilgi[0] = "Ankara Kalesi'nin i�i";
slayt_bilgi[1] = "An�tkabir";
slayt_bilgi[2] = "I. TBMM Binas�";
slayt_bilgi[3] = "Hamam�n�";
slayt_bilgi[4] = "Mogan Park�";

const hakkimda = document.querySelector("#btn_hakkimda");
const sehrim = document.querySelector("#btn_sehrim");
const mirasimiz = document.querySelector("#btn_mirasimiz");
const resim1 = document.querySelector("#image_2_1");
const resim2 = document.querySelector("#image_2_2");
const resim3 = document.querySelector("#image_2_3");
const resim4 = document.querySelector("#image_2_4");
const resim5 = document.querySelector("#image_2_5");
const kontrol1 = document.querySelector("#kontrol_1");
const kontrol2 = document.querySelector("#kontrol_2");
const resimBilgiNotu = document.querySelector("#image2_bilgiNotu");
const baslik = document.querySelector("#baslik");

const kontrol_style = document.getElementById("kontrol");

kontrol_style.style.display = "none";
//resimBilgiNotu.style.display = "none";

let txt_hakkimda = "Merhaba, ben Yusuf. Sakarya �niversitesi Bilgisayar M�hendisli�i 1.S�n�f ��rencisiyim. Ankara'da oturuyorum. Kitap okumay�, video oyunu oynamay�, spor, film ve dizi izlemeyi severim. C++, C#, Java, Pyhton, Javascript dillerini temel d�zeyde bilgim var. Bu sitede ise �ehrimden ve onun miraslar�ndan, tak�m�dan ve kendi ilgi alanlar�mdan bahsedece�im.";
let txt_sehrim = "Ankara, T�rkiye'nin g�zide �ehirlerinden biridir. N�fusu 5,6 milyondur. Rak�m� 938 metredir. T�rkiye'nin ba�kenti ve �stanbul'dan sonra T�rkiye'deki en kalabal�k n�fusa sahip �ehirdir. E�er Ankara'ya geldiyseniz Ankara Kalesi'nin �zellikle i�ini g�rmenizi tavsiye ederiz. Bunun d���nda e�er tarihe ilginiz varsa I. ve II. TBMM Binas�'n� da ziyaret etmelisiniz. Ayn� zamanda Hamam�n�'ndeki tarihi evler de g�zeldir. Mavi G�l Park� ve Mogan G�l� de estetik anlamda g�zeldir. An�tkabir'i zaten s�ylememe gerek yoktur san�r�m."
let txt_mirasimiz = "Birinci T�rkiye B�y�k Millet Meclisi binas� olarak kullan�lan yap�, d�neminde parti binas� olarak in�a edilmi�tir. 1916 y�l�nda �ttihat ve Terakki F�rkas� binas� olarak yap�m�na karar verilmi�tir. Harbiye Naz�r� Enver Pa�a'n�n emriyle Mimar Salim Bey taraf�ndan bina projelendirilmi� ve proje yap�m i�i ise Asker� Mimar Hasip Bey'e verilmi�tir. Hasip Bey, binan�n b�y�k b�l�m�n� ba�ar� ile bitirmi� ancak �at� ve di�er b�l�mler, s�rmekte olan sava�, ya�anan malzeme s�k�nt�s� ve �ttihat ve Terakki F�rkas�n�n kapanmas� gibi nedenlerle tamamlanamam��t�r. Birinci D�nya Sava�� sonras�, Mondros M�tarekesi �artlar� gere�ince bir grup �ngiliz ve Frans�z askeri Ankara'ya gelmi�, Frans�z askerlerinin ba��ndaki komutan ise hen�z �at�s�n�n bir b�l�m� �rt�lmemi� olan bu binan�n ilk odas�n� makam olarak kullanm��t�r. 19 May�s 1919'da Mustafa Kemal Pa�a'n�n Samsun'a ��kmas�ndan sonra Havza ve Amasya genelgeleri yay�mlanm��; Erzurum ve Sivas kongreleri yap�lm��, Mustafa Kemal Pa�a, Ankara'y� Mill� M�cadele'nin merkezi olarak se�mi� ve Temsil Heyeti ile birlikte 27 Aral�k 1919'da Ankara'ya gelmi�tir. �stanbul�un i�galinden birka� g�n �nce ise yabanc� birlikler Ankara�y� terk etmi�tir. 16 Mart 1920'de �stanbul �ngilizler taraf�ndan resmen i�gal edilmi� ve 18 Mart 1920'de Meclis-i Mebusan kendini feshetmi�tir. T�rkiye B�y�k Millet Meclisinin 23 Nisan 1920'de a��lmas�na karar verildi�inde, Ankara'da Meclisin toplanabilmesi i�in gerekli b�y�kl�k ve donan�ma sahip bir binan�n bulunmad��� g�r�lm��t�r. Bu �artlar alt�nda, in�as� yar�m kalan �ttihat ve Terakki F�rkas� binas�n�n Meclis binas� olarak kullan�lmas� kararla�t�r�lm��, Ankara halk�, Ankara�da bulunan 20. Kolordu askerleri ve Ankara M�dafaa-i Hukuk Cemiyeti b�y�k destek vermi�tir. B�ylece Meclis binas�, Ankaral�lar�n evlerinden ve Ulucanlar'daki Numune Mektebinden getirilen kiremitlerle, halk�n fedak�rl�klar� ile tamamlanm��t�r. 23 Nisan 1920 ile 15 Ekim 1924 tarihleri aras�nda T�rkiye B�y�k Millet Meclisi olarak kullan�lan bina, daha sonra Cumhuriyet Halk F�rkas� Genel Merkezi olarak kullan�lm��t�r. Bununla birlikte Ankara �niversitesi Hukuk Fak�ltesinin temeli olan Hukuk Mektebi burada kurulmu�, bina mektebe k�sa bir s�reli�ine ev sahipli�i yapm��t�r. 1957 y�l�nda Mill� E�itim Bakanl��� Komisyonunca al�nan kararla m�zeye d�n��t�r�lmek �zere �al��malara ba�lanm�� ve 23 Nisan 1961 tarihinde 'T�rkiye B�y�k Millet Meclisi M�zesi' ad�yla halk�n ziyaretine a��lm��t�r. 23 Nisan 1981 tarihinde ise 'Kurtulu� Sava�� M�zesi' ad�n� alan m�ze, g�n�m�zde TBMM Bas�n, Yay�n ve Halkla �li�kiler Ba�kanl��� b�nyesinde hizmet vermektedir.";

hakkimda.addEventListener("click", () => {

    document.getElementById("txt_bilgi").innerHTML = txt_hakkimda;

    resimBilgiNotu.style.display = "";

    
    const resimDOM = document.createElement("img");
    const resim = document.getElementById("image_2");

    resim.innerHTML = "";
    resim1.innerHTML = "";
    resim2.innerHTML = "";
    resim3.innerHTML = "";
    resim4.innerHTML = "";
    kontrol1.innerHTML = "";
    kontrol2.innerHTML = "";

    if (motoGPresim === false)
    {

        resimOlusturma(resim,resimDOM,"MotoGP","motogp-racing-2022.jpg");
        
        resimBilgiNotu.innerHTML = "En sevdi�im spor: MotoGP";

        if(kontrol_style.style.display == ""){
            kontrol_style.style.display = "none";
        }

        baslik.innerHTML = "";

        motoGPresim = true;
        sehrimResim = false;
        mirasResim = false;
    }
})

slaytGoster(slaytNo);

function sonrakiSlayt() {
    slaytNo++;
    slaytGoster(slaytNo);
}

function oncekiSlayt() {
    slaytNo--;
    slaytGoster(slaytNo);
}

function slaytGoster(slaytNumarasi) {

    slaytNo = slaytNumarasi;

    if (slaytNumarasi >= slaytSayisi){
        slaytNo = 0;
    }
        if (slaytNumarasi < 0)
            slaytNo = slaytSayisi - 1;

        for (i = 0; i < slaytSayisi; i++) {
            _slayt[i].style.display = "none";
        }

        _slayt[slaytNo].style.display = "block";
        resimBilgiNotu.innerHTML = slayt_bilgi[slaytNo];
}

sehrim.addEventListener("click", () => {

    document.getElementById("baslik").innerHTML = "Ankara";
    document.getElementById("txt_bilgi").innerHTML = txt_sehrim;
    document.getElementById("image_2").innerHTML = "";
    
    resimBilgiNotu.style.display = "";
    resimBilgiNotu.innerHTML = slayt_bilgi[slaytNo];

    if (sehrimResim === false) {
        const resimDOM1 = document.createElement("img");
        const resimDOM2 = document.createElement("img");
        const resimDOM3 = document.createElement("img");
        const resimDOM4 = document.createElement("img");
        const resimDOM5 = document.createElement("img");

        resimOlusturma(resim1,resimDOM1,"Ankara Kalesi","ankaraKalesi.jpg");
        resimOlusturma(resim2,resimDOM2,"An�tkabir","anitkabir.jpg");
        resimOlusturma(resim3,resimDOM3,"I. TBMM Binas�","meclisBinasi.jpg");
        resimOlusturma(resim4,resimDOM4,"Hamam�n�","hamamonu.jpg");
        resimOlusturma(resim5,resimDOM5, "Mogan Park�","mogan_parki.jpeg");

        if(kontrol_style.style.display === "none"){
            kontrol_style.style.display = "";
        }

        kontrol1.innerHTML = "<";
        kontrol2.innerHTML = ">";
        
        motoGPresim = false;
        sehrimResim = true;
        mirasResim = false;
    }

})

mirasimiz.addEventListener("click", () => {
    document.getElementById("baslik").innerHTML = "I.TBMM Binas� (Kurtulu� Sava�� M�zesi)";
    document.getElementById("txt_bilgi").innerHTML = txt_mirasimiz;

    if (mirasResim === false) {
        const resimDOM = document.createElement("img");
        const resim = document.getElementById("image_2");

        resim.innerHTML = "";
        if(kontrol_style.style.display == ""){
            kontrol_style.style.display = "none";
        }

        resimOlusturma(resim,resimDOM,"I. TBMM Binas�","meclisBinasi.jpg");
        
        resimBilgiNotu.innerHTML = "I. TBMM Binas�";

        motoGPresim = false;
        sehrimResim = false;
        mirasResim = true;

    }



})

function resimOlusturma(resimalani, resimDOM, resimAdi, resimURL)
{
    resimDOM.setAttribute("height", 350);
    resimDOM.setAttribute("width", 600);
    resimDOM.setAttribute("src", resimURL);
    resimDOM.setAttribute("alt", resimAdi);

    resimalani.appendChild(resimDOM);
}