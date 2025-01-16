function hesapla1() {
    const vize1 = 
    parseFloat(document.getElementById("vize1").value);

    const final1 = 
    parseFloat(document.getElementById("final1").value);


    if (isNaN(vize1) || isNaN(final1)) {
        document.getElementById("sonuc1").innerText = "Lütfen İki Sayı Giriniz!";
            return;
    }

    const son1 = ((vize1/100)*40) + ((final1/100)*60);
    
    if ((son1>=90) && (son1<100)) {
        sonuc1 = son1 + " = AA" ;
    }
    else if ((son1>=85) && (son1<90)) {
        sonuc1 = son1 + " = BA" ;
    }
    else if ((son1>=80) && (son1<85)) {
        sonuc1 = son1 + " = BB" ;
    }
    else if ((son1>=75) && (son1<80)) {
        sonuc1 = son1 + " = CB" ;
    }
    else if ((son1>=70   ) && (son1<75)) {
        sonuc1 = son1 + " = CC" ;
    }
    else if ((son1>=65) && (son1<70)) {
        sonuc1 = son1 + " = DC" ;
    }
    else if ((son1>=60) && (son1<65)) {
        sonuc1 = son1 + " = DD" ;
    }
    else if ((son1>=50) && (son1<60)) {
        sonuc1 = son1 + " = FD" ;
    }
    else if ((son1>=0) && (son1<50)) {
        sonuc1 = son1 + " = FF" ;
    } 
    

    document.getElementById("sonuc1").innerText = "Sonuç: " + sonuc1 ;

   return son1;

}
function hesapla2() {
const vize2 = 
    parseFloat(document.getElementById("vize2").value);

    const final2 = 
    parseFloat(document.getElementById("final2").value);


    if (isNaN(vize2) || isNaN(final2)) {
        document.getElementById("sonuc2").innerText = "Lütfen İki Sayı Giriniz!";
            return;
    }

    const son2 = ((vize2/100)*40) + ((final2/100)*60);
    
    if ((son2>=90) && (son2<100)) {
        sonuc2 = son2 + " = AA" ;
    }
    else if ((son2>=85) && (son2<90)) {
        sonuc2 = son2 + " = BA" ;
    }
    else if ((son2>=80) && (son2<85)) {
        sonuc2 = son2 + " = BB" ;
    }
    else if ((son2>=75) && (son2<80)) {
        sonuc2 = son2 + " = CB" ;
    }
    else if ((son2>=70   ) && (son2<75)) {
        sonuc2 = son2 + " = CC" ;
    }
    else if ((son2>=65) && (son2<70)) {
        sonuc2 = son2 + " = DC" ;
    }
    else if ((son2>=60) && (son2<65)) {
        sonuc2 = son2 + " = DD" ;
    }
    else if ((son2>=50) && (son2<60)) {
        sonuc2 = son2 + " = FD" ;
    }
    else if ((son2>=0) && (son2<50)) {
        sonuc2 = son2 + " = FF" ;
    } 
    document.getElementById("sonuc2").innerText = "Sonuç: " + sonuc2 ;
    return son2;
}    
function hesapla3() {
const vize3 = 
    parseFloat(document.getElementById("vize3").value);

    const final3 = 
    parseFloat(document.getElementById("final3").value);


    if (isNaN(vize3) || isNaN(final3)) {
        document.getElementById("sonuc3").innerText = "Lütfen İki Sayı Giriniz!";
            return;
    }

    const son3 = ((vize3/100)*40) + ((final3/100)*60);
    
    if ((son3>=90) && (son3<100)) {
        sonuc3 = son3 + " = AA" ;
    }
    else if ((son3>=85) && (son3<90)) {
        sonuc3 = son2 + " = BA" ;
    }
    else if ((son3>=80) && (son3<85)) {
        sonuc3 = son3 + " = BB" ;
    }
    else if ((son3>=75) && (son3<80)) {
        sonuc3 = son3 + " = CB" ;
    }
    else if ((son3>=70   ) && (son3<75)) {
        sonuc3 = son3 + " = CC" ;
    }
    else if ((son3>=65) && (son3<70)) {
        sonuc3 = son3 + " = DC" ;
    }
    else if ((son3>=60) && (soson3n2<65)) {
        sonuc3 = son3 + " = DD" ;
    }
    else if ((son3>=50) && (son3<60)) {
        sonuc3 = son3 + " = FD" ;
    }
    else if ((son3>=0) && (son3<50)) {
        sonuc3 = son3 + " = FF" ;
    } 
    document.getElementById("sonuc3").innerText = "Sonuç: " + sonuc3 ;
    return son3;
}    
function hesapla4() {
const vize4 = 
    parseFloat(document.getElementById("vize4").value);

    const final4 = 
    parseFloat(document.getElementById("final4").value);


    if (isNaN(vize4) || isNaN(final4)) {
        document.getElementById("sonuc4").innerText = "Lütfen İki Sayı Giriniz!";
            return;
    }

    const son4 = ((vize4/100)*40) + ((final4/100)*60);
    
    if ((son4>=90) && (son4<100)) {
        sonuc4 = son4 + " = AA" ;
    }
    else if ((son4>=85) && (son4<90)) {
        sonuc4 = son4 + " = BA" ;
    }
    else if ((son4>=80) && (son4<85)) {
        sonuc4 = son4 + " = BB" ;
    }
    else if ((son4>=75) && (son4<80)) {
        sonuc4 = son4 + " = CB" ;
    }
    else if ((son4>=70   ) && (son4<75)) {
        sonuc4 = son4 + " = CC" ;
    }
    else if ((son4>=65) && (son4<70)) {
        sonuc4 = son4 + " = DC" ;
    }
    else if ((son4>=60) && (son4<65)) {
        sonuc4 = son4 + " = DD" ;
    }
    else if ((son4>=50) && (son4<60)) {
        sonuc4 = son4 + " = FD" ;
    }
    else if ((son4>=0) && (son4<50)) {
        sonuc4 = son4 + " = FF" ;
    } 
    document.getElementById("sonuc4").innerText = "Sonuç: " + sonuc4 ;
    return son4;
}    
function hesapla5() {
const vize5 = 
    parseFloat(document.getElementById("vize5").value);

    const final5 = 
    parseFloat(document.getElementById("final5").value);


    if (isNaN(vize5) || isNaN(final5)) {
        document.getElementById("sonuc5").innerText = "Lütfen İki Sayı Giriniz!";
            return;
    }

    const son5 = ((vize5/100)*40) + ((final5/100)*60);
    
    if ((son5>=90) && (son5<100)) {
        sonuc5 = son5 + " = AA" ;
    }
    else if ((son5>=85) && (son5<90)) {
        sonuc5 = son5 + " = BA" ;
    }
    else if ((son5>=80) && (son5<85)) {
        sonuc5 = son5 + " = BB" ;
    }
    else if ((son5>=75) && (son5<80)) {
        sonuc5 = son5 + " = CB" ;
    }
    else if ((son5>=70   ) && (son5<75)) {
        sonuc5 = son5 + " = CC" ;
    }
    else if ((son5>=65) && (son5<70)) {
        sonuc5 = son5 + " = DC" ;
    }
    else if ((son5>=60) && (son5<65)) {
        sonuc5 = son5 + " = DD" ;
    }
    else if ((son5>=50) && (son5<60)) {
        sonuc5 = son5 + " = FD" ;
    }
    else if ((son5>=0) && (son5<50)) {
        sonuc5 = son5 + " = FF" ;
    } 
    document.getElementById("sonuc5").innerText = "Sonuç: " + sonuc5 ;
    return son5;
}
function hesapla6() {
const vize6 = 
    parseFloat(document.getElementById("vize6").value);

    const final6 = 
    parseFloat(document.getElementById("final6").value);


    if (isNaN(vize6) || isNaN(final6)) {
        document.getElementById("sonuc6").innerText = "Lütfen İki Sayı Giriniz!";
            return;
    }

    const son6 = ((vize6/100)*40) + ((final6/100)*60);
    
    if ((son6>=90) && (son6<100)) {
        sonuc6 = son6 + " = AA" ;
    }
    else if ((son6>=85) && (son6<90)) {
        sonuc6 = son6 + " = BA" ;
    }
    else if ((son6>=80) && (son6<85)) {
        sonuc6 = son6 + " = BB" ;
    }
    else if ((son6>=75) && (son6<80)) {
        sonuc6 = son6 + " = CB" ;
    }
    else if ((son6>=70   ) && (son6<75)) {
        sonuc6 = son6 + " = CC" ;
    }
    else if ((son6>=65) && (son6<70)) {
        sonuc6 = son6 + " = DC" ;
    }
    else if ((son6>=60) && (son6<65)) {
        sonuc6 = son6 + " = DD" ;
    }
    else if ((son6>=50) && (son6<60)) {
        sonuc6 = son6 + " = FD" ;
    }
    else if ((son6>=0) && (son6<50)) {
        sonuc6 = son6 + " = FF" ;
    } 
    document.getElementById("sonuc6").innerText = "Sonuç: " + sonuc6 ;
    return son6;
}
function hesapla7() {
const vize7 = 
    parseFloat(document.getElementById("vize7").value);

    const final7 = 
    parseFloat(document.getElementById("final7").value);


    if (isNaN(vize7) || isNaN(final7)) {
        document.getElementById("sonuc7").innerText = "Lütfen İki Sayı Giriniz!";
            return;
    }

    const son7 = ((vize7/100)*40) + ((final7/100)*60);
    
    if ((son7>=90) && (son7<100)) {
        sonuc7 = son7 + " = AA" ;
    }
    else if ((son7>=85) && (son7<90)) {
        sonuc7 = son7 + " = BA" ;
    }
    else if ((son7>=80) && (son7<85)) {
        sonuc7 = son7 + " = BB" ;
    }
    else if ((son7>=75) && (son7<80)) {
        sonuc7 = son7 + " = CB" ;
    }
    else if ((son7>=70   ) && (son7<75)) {
        sonuc7 = son7 + " = CC" ;
    }
    else if ((son7>=65) && (son7<70)) {
        sonuc7 = son7 + " = DC" ;
    }
    else if ((son7>=60) && (son7<65)) {
        sonuc7 = son7 + " = DD" ;
    }
    else if ((son7>=50) && (son7<60)) {
        sonuc7 = son7 + " = FD" ;
    }
    else if ((son7>=0) && (son7<50)) {
        sonuc7 = son7 + " = FF" ;
    } 
    document.getElementById("sonuc7").innerText = "Sonuç: " + sonuc7 ;
    return son7;
}
function hesapla8() {
const vize8 = 
    parseFloat(document.getElementById("vize8").value);

    const final8 = 
    parseFloat(document.getElementById("final8").value);


    if (isNaN(vize8) || isNaN(final8)) {
        document.getElementById("sonuc8").innerText = "Lütfen İki Sayı Giriniz!";
            return;
    }

    const son8 = ((vize8/100)*40) + ((final8/100)*60);
    
    if ((son8>=90) && (son8<100)) {
        sonuc8 = son8 + " = AA" ;
    }
    else if ((son8>=85) && (son8<90)) {
        sonuc8 = son8 + " = BA" ;
    }
    else if ((son8>=80) && (son8<85)) {
        sonuc8 = son8 + " = BB" ;
    }
    else if ((son8>=75) && (son8<80)) {
        sonuc8 = son8 + " = CB" ;
    }
    else if ((son8>=70   ) && (son8<75)) {
        sonuc8 = son8 + " = CC" ;
    }
    else if ((son8>=65) && (son8<70)) {
        sonuc8 = son8 + " = DC" ;
    }
    else if ((son8>=60) && (son8<65)) {
        sonuc8 = son8 + " = DD" ;
    }
    else if ((son8>=50) && (son8<60)) {
        sonuc8 = son8 + " = FD" ;
    }
    else if ((son8>=0) && (son8<50)) {
        sonuc8 = son8 + " = FF" ;
    } 
    document.getElementById("sonuc8").innerText = "Sonuç: " + sonuc8 ;
    return son8;
}
function hesapla9() {
const vize9 = 
    parseFloat(document.getElementById("vize9").value);

    const final9 = 
    parseFloat(document.getElementById("final9").value);


    if (isNaN(vize9) || isNaN(final9)) {
        document.getElementById("sonuc9").innerText = "Lütfen İki Sayı Giriniz!";
            return;
    }

    const son9 = ((vize9/100)*40) + ((final9/100)*60);
    
    if ((son9>=90) && (son9<100)) {
        sonuc9 = son9 + " = AA" ;
    }
    else if ((son9>=85) && (son9<90)) {
        sonuc9 = son9 + " = BA" ;
    }
    else if ((son9>=80) && (son9<85)) {
        sonuc9 = son9 + " = BB" ;
    }
    else if ((son9>=75) && (son9<80)) {
        sonuc9 = son9 + " = CB" ;
    }
    else if ((son9>=70   ) && (son9<75)) {
        sonuc9 = son9 + " = CC" ;
    }
    else if ((son9>=65) && (son9<70)) {
        sonuc9 = son9 + " = DC" ;
    }
    else if ((son9>=60) && (son9<65)) {
        sonuc9 = son9 + " = DD" ;
    }
    else if ((son9>=50) && (son9<60)) {
        sonuc9 = son9 + " = FD" ;
    }
    else if ((son9>=0) && (son9<50)) {
        sonuc9 = son9 + " = FF" ;
    } 
    document.getElementById("sonuc9").innerText = "Sonuç: " + sonuc9 ;
    return son9;
}
function hesapla10() {
const d1 = hesapla1();
const d2 = hesapla2();
const d3 = hesapla3();
const d4 = hesapla4();
const d5 = hesapla5();
const d6 = hesapla6();
const d7 = hesapla7();
const d8 = hesapla8();
const d9 = hesapla9();

sonuc10 = ((d1*4)+ (d2*4) + (d3*3) + (d4*3) + (d5*2) + (d6*2) + (d7*2) + (d8*2) + (d9*2))/24;

document.getElementById("sonuc10").innerText = "GANO: "+ (sonuc10/25) ;

}