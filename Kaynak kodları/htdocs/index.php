<?php
    $mail_yanlis_mesaj = 'E-posta veya şifre yanlış, lütfen tekrar deneyiniz.';
    $mail_bos_mesaj = 'Şifre veya e-posta kutusu boş olamaz.';
    $mail_dogru_mesaj = 'Hoşgeldin b221210100. Lütfen bekleyiniz...';
    $mail_dogru = 'b221210100@sakarya.edu.tr';
    $sifre_dogru = 'b221210100';
    
    ?>
    <div id="uyari"></div>
    <?php

    if(isset($_POST['kullaniciAdi']))
    {
        $kullaniciAdi = $_POST['kullaniciAdi'];
        $sifre = $_POST['sifre'];

        if($kullaniciAdi == null || $sifre == null)
        {
            ?>
            <div class="alert alert-warning" id="uyari" role="alert"><?= $mail_bos_mesaj ?></div>
            <?php
        }

        else if($kullaniciAdi != $mail_dogru && $sifre != $sifre_dogru){?>
            <div class="alert alert-danger" id="uyari" role="alert"><?= $mail_yanlis_mesaj ?></div>
            <?php
        }

        else if($kullaniciAdi == $mail_dogru && $sifre == $sifre_dogru)
        {?>
            <div class="alert alert-success" id="basarili" role="alert"><?= $mail_dogru_mesaj ?></div>
            <?php 
            header('Refresh:2; anasayfa.html');
        }


    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

    <style>
        body {
            background-color: white;
            background-image: url("https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            background-repeat:no-repeat;
            background-attachment:fixed;
            background-size:cover;
            background-position:center;

        }

        #btn_login{
            color: black;
            display: block;
            margin-top: 100px;

        }

        #div_giris{
            background-color:white;
            color: black;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 40%;
            border-radius:10px;
        }

        #etiket{
            margin-top: 50px;
            margin-bottom: 50px;
            width: auto;
        }

        #basarili
        {
            color: black;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 40%;
            margin-top:250px;
        }

        #uyari{
            color: black;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 40%;
            margin-top:250px;
        }

        #btn_tamam
        {
            color: black;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 40%;
        }
    </style>
</head>

<body align="center">


    <form action="" method="post" align="center">
        
        <div id="div_giris">

            <label id="etiket">E-posta</label><br>
            <input type="email" class="txt_input" name="kullaniciAdi" placeholder="E-posta adresini giriniz..."><br>
                
            <label id="etiket">Şifre</label><br>
            <input type="password" class="txt_input" name="sifre" placeholder="Şifrenizi giriniz..."><br>
                    
            <button type="submit" id="etiket">Giriş Yap</button>

        </div>
    </form>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
    
</body>
</html>
