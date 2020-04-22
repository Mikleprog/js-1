/*-1---splitAndMerge---*/

/*function splitAndMerge (string, sp) { 
  return  string
  .split(" ")// разбил на слова
  .join('') // соеденил  в одну строку 
  .split('')// разбил на символы
  .join(sp); // соеденил с разделителем sp
 }*/
function splitAndMerge (string, sp) { 
       return string.split(" ")
        .map(function(item) {
        return item.split("").join(sp);
         })
        .join("");
   }
    
    
/*-2---cjonvertHash to array [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]---*/

/*function  convertHash(hash) {
  let newAray =[];
  
  for (key in hash) {
    newAray.push(key);
  }
   for (let i = 0; i < newAray.length; i++) {
     let key = newAray[i];
     newAray[i] = [key, hash[key]];
   }
   return newAray;
 }*/
var hash = {name: 'Jeremy', age: 24, role: 'Software Engineer'}
        function  convertHash(hash){
        var newAray =[];
          for (key in hash) {
           newAray.push([key, hash[key]]);
        }
    
        return newAray;
                      
       }
 
 
 /*-3---converts dash/underscore delimited words into camel casing-----*/
 
 /*function toCamelCase (str) {
   return str.split('')
   .map((word) => word != '_' ? word : '-') // Замена ниж. подчеркивания на дефис
   .join('')
   .split('-')
   .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
   .join('');
  }*/

  function toCamelCase (str){
     return str.split('')
     .map(function(word) {
        return word = (word != '_') ? word : '-'; }) 
     .join('')
     .split('-')
     .map(function(word, index) {
        return word = (index == 0) ? word : word[0].toUpperCase() + word.slice(1);})
     .join('');
 
 }
  
  /*-4-----Write a function that takes a sentence (string) and reverses each word in the sentence---*/
  
/*function reverseWords (str) {
  let str = str.split('')
  .reverse()
  .join('')
  .split(' ');

  let newAr = [];

    for (let i = 0; i < str.length; i++) {
    newAr[str.length-1-i] = str[i];
    }

    return newAr.join(' ');
  }*/
function reverseWords (str) {
  return str = str.split('')
  .reverse()
  .join('')
  .split(' ')
  .reverse()   // after looks nice
  .join(' ');
}


/*-5----Write a function stringExpansion-----*/

 /*function stringExpansion (str) {
    str = Array.from(str);
    let newArray = [];

    for (let i = 0; i < str.length; i++) {
      if (+str[i] && i!=str.length-1) {

        for (let j = 0; j < str[i]; j++) {
        newArray.push(str[i+1]);
        }
      }
    }
    newArray = (newArray.length==0)?str:newArray;// проверка на изменение массива newArray

  return newArray.join('');
  }*/
function stringExpansion(str) {
 var  arr = str.split(''); 
  var newArray=[];
    for (let i = 0; i < arr.length; i++ ) {
      if (+arr[i] && !isFinite(+arr[i+1])) {
        newArray.push(arr[i+1].repeat(arr[i]));
        i++;
      } else if (!isFinite(+arr[i])) {
          newArray.push(arr[i]);
        }
   }
   return newArray.join('');
 }
  
  
  /*-6----Write largest and smallest functions ----*/
  
 /* function largest(...arg) {
    let maxNumber = -Infinity;

    for (let key of arg) {
      maxNumber = Math.max(maxNumber, +key);
    }
    
    return maxNumber;
  }
  
   // а теперь smallest
  function smallest(...arg) {
    let minNumber = +Infinity;

    for (let key of arg) {
      minNumber = Math.min(minNumber, +key);
    }
    
    return minNumber;
  }*/
function largest() {
    var arg =[].slice.call(arguments);
    var maxNumber = -Infinity;

    for (var key of arg) {
      maxNumber = Math.max(maxNumber, +key);
    }
    
    return maxNumber;
  }
//test for the largest
  alert (largest(2, 0.1, -5, 100, 3));//100 

    function smallest() {
    var arg = [].slice.call(arguments);
    var minNumber = +Infinity;

    for (var key of arg) {
      minNumber = Math.min(minNumber, +key);
    }
    
    return minNumber;
  }


/*---7 ---Write function transform that will transform array of numbers to array of functions---*/

/*function transform (arr) {
    return arr.map(item => function () {
      return item;}());
  }*/
function transform (arr) {
    return arr.map(function(item) {
    return  function () {
      return item;}()});
  }
    
  
/*-8---Function expects arbitrary number of digit arguments and returns compound value of them. Note: function should use recursion--*/

/*function summ (...arr) { 
    return summArray(arr, arr.length);

    function summArray (arr, index) {
      if (index==1) {
        return arr[0];
      } else {
          return  arr[index-1] + summArray(arr, index-1);
        }
    }
}*/
function summ () { 
    var arr = [].slice.call(arguments);
    return summArray(arr, arr.length);

    function summArray (arr, index) {
      if (index==1) {
        return arr[0];
      } else {
          return  arr[index-1] + summArray(arr, index-1);
        }
    }
}

/*-9---Write function countDown-----*/

/*function countDown (number) {
  for (let i = number; i>=0; i--) {
    setTimeout(() => alert(i), 1000)
  }
}*/
function countDown(number) {
  let current = number;

  setTimeout(function go() {
    alert(current);
    if (current > 0) {
      setTimeout(go, 1000);
    }
    current--;
  }, 1000);
}
 
 
 /*-10--- Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind()
   function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1) // 10---*/
 
 Function.prototype.myBind = function (context) {
   var fn = this;

    return function(args) {
      return fn.call(context, args);
    }
  }
 
 
   
