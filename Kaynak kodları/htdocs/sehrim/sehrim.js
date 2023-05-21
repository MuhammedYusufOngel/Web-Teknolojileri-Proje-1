            var _slayt = document.getElementsByClassName("slayt");
            var slaytSayisi = _slayt.length;
            var slaytNo = 0;
            var i = 0;

            var slayt_bilgi = new Array();
            slayt_bilgi[0] = "Ankara Kalesi";
            slayt_bilgi[1] = "Anıtkabir";
            slayt_bilgi[2] = "Hamamönü";
            slayt_bilgi[3] = "I. TBMM Binası";
            slayt_bilgi[4] = "Mogan Parkı";

            var resimBilgiNotu = document.getElementById("slider_bilgiNotu");

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
