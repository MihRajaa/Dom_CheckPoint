// button plus

var plusButton = document.querySelectorAll('.plus');

function increment (e){

    var plusButton = e.target;
    var parent = plusButton.parentElement.parentElement;
    var qteTag = parent.querySelector('p');
    var qte = Number(qteTag.innerHTML);
    qte++;
    qteTag.innerHTML = qte;

    //get unit price
    var grandParent = plusButton.parentElement.parentElement.parentElement;
    var uPrice = grandParent.querySelector('.unitPrice');
    var unitPrice =uPrice.innerHTML;
    // modify price
    var price = grandParent.querySelector('.price');
    price.innerHTML = qte * unitPrice;

    // update total

    var total = document.getElementById('total');
    addUpdateTotal(total);

}

for (let i = 0; i<plusButton.length; i++)
{

    plusButton[i].addEventListener("click", increment);
}

// button minus

var minusButton = document.querySelectorAll('.minus');

function decrement (e){

    var minusButton = e.target;
    var parent = minusButton.parentElement.parentElement;
    var qteTag = parent.querySelector('p');
    var qte = Number(qteTag.innerHTML);
    if (qte >0) {
        qte--;
    }
    qteTag.innerHTML = qte;

    //get unit price
    var grandParent = minusButton.parentElement.parentElement.parentElement;
    var uPrice = grandParent.querySelector('.unitPrice');
    var unitPrice =uPrice.innerHTML;
    // modify price
    var price = grandParent.querySelector('.price');
    price.innerHTML = qte * unitPrice;

    // update total

    var total = document.getElementById('total');
    addUpdateTotal(total);
    
     
}

for (let i = 0; i<minusButton.length; i++)
{

    minusButton[i].addEventListener("click", decrement);
}

// like button

var likeButton = document.querySelectorAll('.like');

function like (e)
{
    var likeButton = e.target;
    
    if (likeButton.style.color == "rgb(66, 66, 66)")
    {
        likeButton.style.color = "red";
    }else{
        likeButton.style.color = "rgb(66, 66, 66)";
    }
}

for (let i = 0; i<likeButton.length; i++)
{

    likeButton[i].addEventListener("click", like);
}

// total function
var p = document.getElementsByClassName('price');
function addUpdateTotal(x)
{
var total =0;
for (let i = 0; i < p.length; i++) {
    total = total+Number(p[i].innerHTML);
}
x.innerHTML = total;

}
