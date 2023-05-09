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
slayt_bilgi[0] = "Ankara Kalesi'nin içi";
slayt_bilgi[1] = "Anýtkabir";
slayt_bilgi[2] = "I. TBMM Binasý";
slayt_bilgi[3] = "Hamamönü";
slayt_bilgi[4] = "Mogan Parký";

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

let txt_hakkimda = "Merhaba, ben Yusuf. Sakarya Üniversitesi Bilgisayar Mühendisliði 1.Sýnýf öðrencisiyim. Ankara'da oturuyorum. Kitap okumayý, video oyunu oynamayý, spor, film ve dizi izlemeyi severim. C++, C#, Java, Pyhton, Javascript dillerini temel düzeyde bilgim var. Bu sitede ise þehrimden ve onun miraslarýndan, takýmýdan ve kendi ilgi alanlarýmdan bahsedeceðim.";
let txt_sehrim = "Ankara, Türkiye'nin güzide þehirlerinden biridir. Nüfusu 5,6 milyondur. Rakýmý 938 metredir. Türkiye'nin baþkenti ve Ýstanbul'dan sonra Türkiye'deki en kalabalýk nüfusa sahip þehirdir. Eðer Ankara'ya geldiyseniz Ankara Kalesi'nin özellikle içini görmenizi tavsiye ederiz. Bunun dýþýnda eðer tarihe ilginiz varsa I. ve II. TBMM Binasý'ný da ziyaret etmelisiniz. Ayný zamanda Hamamönü'ndeki tarihi evler de güzeldir. Mavi Göl Parký ve Mogan Gölü de estetik anlamda güzeldir. Anýtkabir'i zaten söylememe gerek yoktur sanýrým."
let txt_mirasimiz = "Birinci Türkiye Büyük Millet Meclisi binasý olarak kullanýlan yapý, döneminde parti binasý olarak inþa edilmiþtir. 1916 yýlýnda Ýttihat ve Terakki Fýrkasý binasý olarak yapýmýna karar verilmiþtir. Harbiye Nazýrý Enver Paþa'nýn emriyle Mimar Salim Bey tarafýndan bina projelendirilmiþ ve proje yapým iþi ise Askerî Mimar Hasip Bey'e verilmiþtir. Hasip Bey, binanýn büyük bölümünü baþarý ile bitirmiþ ancak çatý ve diðer bölümler, sürmekte olan savaþ, yaþanan malzeme sýkýntýsý ve Ýttihat ve Terakki Fýrkasýnýn kapanmasý gibi nedenlerle tamamlanamamýþtýr. Birinci Dünya Savaþý sonrasý, Mondros Mütarekesi þartlarý gereðince bir grup Ýngiliz ve Fransýz askeri Ankara'ya gelmiþ, Fransýz askerlerinin baþýndaki komutan ise henüz çatýsýnýn bir bölümü örtülmemiþ olan bu binanýn ilk odasýný makam olarak kullanmýþtýr. 19 Mayýs 1919'da Mustafa Kemal Paþa'nýn Samsun'a çýkmasýndan sonra Havza ve Amasya genelgeleri yayýmlanmýþ; Erzurum ve Sivas kongreleri yapýlmýþ, Mustafa Kemal Paþa, Ankara'yý Millî Mücadele'nin merkezi olarak seçmiþ ve Temsil Heyeti ile birlikte 27 Aralýk 1919'da Ankara'ya gelmiþtir. Ýstanbul’un iþgalinden birkaç gün önce ise yabancý birlikler Ankara’yý terk etmiþtir. 16 Mart 1920'de Ýstanbul Ýngilizler tarafýndan resmen iþgal edilmiþ ve 18 Mart 1920'de Meclis-i Mebusan kendini feshetmiþtir. Türkiye Büyük Millet Meclisinin 23 Nisan 1920'de açýlmasýna karar verildiðinde, Ankara'da Meclisin toplanabilmesi için gerekli büyüklük ve donanýma sahip bir binanýn bulunmadýðý görülmüþtür. Bu þartlar altýnda, inþasý yarým kalan Ýttihat ve Terakki Fýrkasý binasýnýn Meclis binasý olarak kullanýlmasý kararlaþtýrýlmýþ, Ankara halký, Ankara’da bulunan 20. Kolordu askerleri ve Ankara Müdafaa-i Hukuk Cemiyeti büyük destek vermiþtir. Böylece Meclis binasý, Ankaralýlarýn evlerinden ve Ulucanlar'daki Numune Mektebinden getirilen kiremitlerle, halkýn fedakârlýklarý ile tamamlanmýþtýr. 23 Nisan 1920 ile 15 Ekim 1924 tarihleri arasýnda Türkiye Büyük Millet Meclisi olarak kullanýlan bina, daha sonra Cumhuriyet Halk Fýrkasý Genel Merkezi olarak kullanýlmýþtýr. Bununla birlikte Ankara Üniversitesi Hukuk Fakültesinin temeli olan Hukuk Mektebi burada kurulmuþ, bina mektebe kýsa bir süreliðine ev sahipliði yapmýþtýr. 1957 yýlýnda Millî Eðitim Bakanlýðý Komisyonunca alýnan kararla müzeye dönüþtürülmek üzere çalýþmalara baþlanmýþ ve 23 Nisan 1961 tarihinde 'Türkiye Büyük Millet Meclisi Müzesi' adýyla halkýn ziyaretine açýlmýþtýr. 23 Nisan 1981 tarihinde ise 'Kurtuluþ Savaþý Müzesi' adýný alan müze, günümüzde TBMM Basýn, Yayýn ve Halkla Ýliþkiler Baþkanlýðý bünyesinde hizmet vermektedir.";

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
        
        resimBilgiNotu.innerHTML = "En sevdiðim spor: MotoGP";

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
        resimOlusturma(resim2,resimDOM2,"Anýtkabir","anitkabir.jpg");
        resimOlusturma(resim3,resimDOM3,"I. TBMM Binasý","meclisBinasi.jpg");
        resimOlusturma(resim4,resimDOM4,"Hamamönü","hamamonu.jpg");
        resimOlusturma(resim5,resimDOM5, "Mogan Parký","mogan_parki.jpeg");

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
    document.getElementById("baslik").innerHTML = "I.TBMM Binasý (Kurtuluþ Savaþý Müzesi)";
    document.getElementById("txt_bilgi").innerHTML = txt_mirasimiz;

    if (mirasResim === false) {
        const resimDOM = document.createElement("img");
        const resim = document.getElementById("image_2");

        resim.innerHTML = "";
        if(kontrol_style.style.display == ""){
            kontrol_style.style.display = "none";
        }

        resimOlusturma(resim,resimDOM,"I. TBMM Binasý","meclisBinasi.jpg");
        
        resimBilgiNotu.innerHTML = "I. TBMM Binasý";

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