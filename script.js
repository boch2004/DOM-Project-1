var hearts=document.getElementsByClassName("fas fa-heart");
console.log(hearts)

for(let i=0; i<hearts.length; i++){
    let heart=hearts[i];
    heart.style.color=""
    heart.addEventListener("click", function(){
        
        if(heart.style.color=="red")
            heart.style.color=""
        else{
            heart.style.color="red"
        }
    })
}

var plus=document.getElementsByClassName("fas fa-plus-circle");
var minus=document.getElementsByClassName("fas fa-minus-circle");
var quantitys=document.getElementsByClassName("quantity");
var sbat=document.getElementById("sbat")
var socks=document.getElementById("socks")
var bag=document.getElementById("bag")
var bouton=document.getElementById("bouton")
var blus1=document.getElementById("plus1")
var blus2=document.getElementById("plus2")
var blus3=document.getElementById("plus3")
var munis1=document.getElementById("munis1")
var munis2=document.getElementById("munis2")
var munis3=document.getElementById("munis3")
var all=document.querySelectorAll(".all")
var trashs=document.getElementsByClassName("fas fa-trash-alt")
var trash = document.getElementById("trash")
var trash2 = document.getElementById("trash2")
var trash3 = document.getElementById("trash3")
var conter1 = document.getElementById("conter1")
var conter2 = document.getElementById("conter2")
var conter3 = document.getElementById("conter3")
var total =document.getElementById("total")

for(let i=0; i<plus.length;i++){
    let oneplus=plus[i];
    oneplus.addEventListener("click", function(){
        oneplus.nextElementSibling.textContent++
        // let a= parseInt( oneplus.nextElementSibling.innerText )
        // oneplus.nextElementSibling.innerText=a+1
    updateTotal();
    })
}
for(let i=0; i<minus.length;i++){
    let minu=minus[i];
    minu.addEventListener("click", function(){
        // let a= parseInt( minu.previousElementSibling.innerText )
        // minu.previousElementSibling.innerText=a-1
        if(minu.previousElementSibling.textContent>1){minu.previousElementSibling.textContent--}
        updateTotal();
    })
}


    blus1.addEventListener('click', function (){
    let number = parseInt(sbat.textContent);
    number+=100;
    sbat.textContent = number;
    });

    blus2.addEventListener('click', function (){
        let number = parseInt(socks.textContent);
        number+=20;
        socks.textContent = number;
        });

    blus3.addEventListener('click', function (){
        let number = parseInt(bag.textContent);
        number+=50;
        bag.textContent = number;
        });

    munis1.addEventListener('click', function (){
        let number = parseInt(sbat.textContent);
        number-=100;
        if(sbat.textContent>100){ sbat.textContent = number}
        });

    munis2.addEventListener('click', function (){
        let number = parseInt(socks.textContent);
        number-=20;
        if(socks.textContent>20){ socks.textContent = number}
        });

    munis3.addEventListener('click', function (){
        let number = parseInt(bag.textContent);
        number-=50;
        if(bag.textContent>50){ bag.textContent = number}
        });




    trash.addEventListener("click",function(){
        let number = parseInt(sbat.textContent);
        number=100;
        sbat.textContent = number;
        conter1.textContent = 1;
        updateTotal();
    })
    trash2.addEventListener("click",function(){
        let number = parseInt(socks.textContent);
        number=20;
        socks.textContent = number;
        conter2.textContent = 1;
        updateTotal();
    })
    trash3.addEventListener("click",function(){
        let number = parseInt(bag.textContent);
        number=50;
        bag.textContent = number;
        conter3.textContent = 1;
        updateTotal();
    })


        function updateTotal() {
            let totalValue = parseInt(sbat.textContent) +parseInt(socks.textContent) +parseInt(bag.textContent) ;
            total.textContent = totalValue;
            console.log(totalValue);}