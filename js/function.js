var cartItem=[];
var numberProduct=0;

var localStorage=localStorage.getItem("cartItem");
if(localStorage.getItem("cartItem")){
    cartItem=JSON.parse(localStorage.getItem("cartItem"));
    numberProduct=cartItem.length;
}else{
    cartItem=[];
}

function addToCart(name,price,desc){
    var checkProduct=true;
    if(cartItem.length>0){
        cartItem.forEach((cart,index)=>{
            if(cartItem[index]["name"]==name){
                checkProduct=false;
            }
        })
        id=cartItem.length+1;
    }else{
        id=1;
    }
    if(checkProduct){
        var obj={
            "id":id,
            "name":name,
            "price":price,
            "desc":desc
        }
        cartItem.push(obj);
        $(".cart-menu").html("<i class='fas fa-shopping-cart'> <p class='broj-u-korpi'>"+cartItem.length+"</p>");
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
        // $("#cart-value").load(location.href+" #cart-value>*","");
        showCartItem(cartItem);
        $("#openForm").show();
    }else{
        alert("Ovaj proizvod je vec ubacen");
    }
}
var cartValue = document.getElementById('cart-value');
function showCartItem(cartItem){
    $("#cart-value").html("");
    if(cartItem !=null){
        cartItem.forEach((cart,index)=>{
            $("#cart-value").append("<div class='product-item'><button onclick='deleteItem("+cart["id"]+")'>&#10005</button> <div class='product-name'><b>Naziv prozvoda:</b> <br>" +cart["name"]+"</div><div class='product-price'><b>Cena: </b>" +cart["price"]+"</.button><div class='description'><b>Opis:</b><br>"+cart["desc"]+"</div></div>");
        });
    }
}
$(".cart-menu").click(function(){
    showCartItem(cartItem);
    if(cartItem==0){
        $("#openForm").hide();
    }
})
$("#openForm").click(function(){
    $(".form").addClass("active");
})
$("#closeForm").click(function(){
    $(".form").removeClass("active");
})
function deleteItem(id){
    cartItem.forEach((cart,index)=>{
        if(cart["id"]==id){
            cartItem.splice(index,1);
            localStorage.setItem("cartItem", JSON.stringify(cartItem));
        }
    });
    $(".cart-menu").html("<i class='fas fa-shopping-cart'></i> <p class='broj-u-korpi'>"+cartItem.length+"</p>");
    showCartItem(cartItem);
    if(cartItem==0){
        $("#openForm").hide();
    }
} 


function sendEmail(name,email,question){
    var jsonString = JSON.stringify(cartItem);
    var message="Sadrzaj korpe:"+jsonString+"\nKorisnik:" +name+ "\nEmail:"+email+"\nPitanje:"+question;
    $.ajax({
        type: "POST",
        url: "email.php",
        data: {data : message}, 
        cache: false,
            success: function(data){
                var jsonString = JSON.stringify(data);
                console.log(jsonString);
            }
        });
}

$("#sendMail").click(function(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var question=document.getElementById("question").value;
    sendEmail(name,email,question);
})


