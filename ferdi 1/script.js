function merhaba(){
    let ad,soyad,yas,takım;
    ad=document.getElementById("txtad").value;
    soyad=document.getElementById("txtsoyad").value;
    yas=document.getElementById("txtyas").value;
    takım=document.getElementById("lıstetakımlar").selectedIndex;
    document.getElementById("sonucbaslık").innerHTML="";
    console.log(takım); console.log(takım);
    if(takım==0){
       document.body.style.backgroundColor="red";
       yazı.innerHTML="TÜRKİYENİN MEGA ŞEHRİ"
       document.getElementById("resim").setAttribute("src","https://i.pinimg.com/originals/13/32/4c/13324cbb3b9f5b897378603dfbb00f70.gif")
    }
    else if(takım==1){
        document.body.style.backgroundColor="blue"
        yazı.innerHTML="TÜRKİYENİN KALBİ"
        document.getElementById("resim").setAttribute("src","https://media4.giphy.com/avatars/Sepulchral/evXpjVpvBuIV.gif")
     }
     else if(takım==2){
        document.body.style.backgroundColor="green";
        yazı.innerHTML="İZMİR İN YOLLARINDA ÇİCELER AÇAR"
        document.getElementById("resim").setAttribute("src","https://i.pinimg.com/originals/0b/fc/d9/0bfcd9dc6ec3dc3c05ead6e1a7ccfaa3.gif")

     }
     else if(takım==3){
        document.body.style.backgroundColor="orange";
         yazı.innerHTML="BİTLİS BEŞ MİNARESİ"
         document.getElementById("resim").setAttribute("src","http://www.adilcevaz13.com/d/news/13325.jpg")
     }
     else if(takım==4){
         document.body.style.backgroundColor="brown"
         yazı.innerHTML="VAN KEDİSİ"
         document.getElementById("resim").setAttribute("src","https://matillaatasever.files.wordpress.com/2012/05/van-kedisi-gif-video.gif")
    
    }
 }