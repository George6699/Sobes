const search = document.querySelector("#search");
const button_1 = document.querySelector("#button");
const button_2 = document.querySelector("#sum");


let user1 = {     
  name: "John",  
  age: 30        
};

let user2 = {     
  name: "Hana",  
  age: 22        
};

let user3 = {     
  name: "Ivan",  
  age: 37        
};

let user4 = {     
  name: "Kate",  
  age: 14        
};



button_1.onclick =  function (){
  let delay = setTimeout ( function(){
    if(search.value === 'google'){
      alert('Yandex круче. Но это не точно' + ' ' + user1.name)
    }else {alert(search.value + ' ' + user1.name);}
  },3000);
};

 


/*функция superSum*/
button_2.onclick = function superSum(){
  alert(parseFloat(document.getElementById('inp_1').value)+parseFloat(document.getElementById('inp_2').value));
}

/*сортировка массива по возрастанию*/
function sort(arrNum){
  var n = arrNum.length;
  for (var i = 0; i < n-1; i++)
   { for (var j = 0; j < n-1-i; j++)
      { if (arrNum[j+1] < arrNum[j])
         { var t = arrNum[j+1]; arrNum[j+1] = arrNum[j]; arrNum[j] = t; }
      }
   }                     
  return arrNum;   
} 

/*замена значений переменных*/
let g = 3;
let d = 5;

  g = g + d;
  d = d - g;
  d = -d;
  g = g - d;

/* алгоритм findMax*/
function findMax(Arr){
  return Math.max.apply(null, Arr);
}