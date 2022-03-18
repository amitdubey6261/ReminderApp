cardcreate = 0 ;
const makechildcard = (cardheading , cardtext , cardid ) =>{
x = document.createElement('div');
x.className = " col-md-3 mx-3 card text-white bg-dark mb-3 mt-3 " ;
x.id = `${101+cardid}`;

y = document.createElement('div');
y.className = "card-header" ;
headtext = document.createTextNode(`NOTE`);
y.appendChild(headtext);

a = document.createElement('div');
a.className = "card-body" ;

b = document.createElement('h5');
b.className = "card-title" ;
cardtitle = document.createTextNode(`${cardheading}`);
b.appendChild(cardtitle);

c = document.createElement('p');
c.className = "card-text" ;
cardtexto = document.createTextNode(`${cardtext}`);
c.appendChild(cardtexto);

d = document.createElement('button');
btntext = document.createTextNode("Delete");
d.className = "btn btn-primary  mb-3 btn-sm" ;
d.id = `${cardid}`;
d.appendChild(btntext);
d.addEventListener('click', func2) ;

a.appendChild(b);
a.appendChild(c);
y.appendChild(a);
x.appendChild(y);
x.appendChild(d);

return x ;
}

const func2 = (event) =>{
  cardid = Number(event.srcElement.id) ;
  x = document.getElementById(cardid) ;
  parentIS = x.parentNode ;
  parentid = parentIS.id ;
  parentIS.remove();
}


const func1 = () =>{
  console.log("Cmnd To Add card !");
  const text1 = document.getElementById("floatingTextarea1").value;
  const text2 = document.getElementById("floatingTextarea2").value;
  if(text1.length == 0 || text2.length == 0){
    if(text1.length ==0 ){
      alert("Title is empty ...!");
    }
    else{
      alert("Your Text Block is empty ...!");
    }
  }else{
    cardid = cardcreate ++ ; 
    var mycard = makechildcard(text1 , text2 , cardid );
    x = document.getElementById("toadd") ;
    x.appendChild(mycard); 
  }
  
}

document.getElementById("addcard").addEventListener('click' , func1) ;