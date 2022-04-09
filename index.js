// Write your solution here!

const cats =["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name) { {
    return cats.push(name)
}
destructivelyAppendCat("Ralph")
console.log(cats);
}

function destructivelyPrependCat(name) { {
    return cats.unshift(name)
   }
   destructivelyPrependCat("Bob")
   console.log(cats);
   }

   function destructivelyRemoveLastCat(name) { {
    return cats.pop()
   }
   destructivelyRemoveLastCat;
   console.log(cats);
   }

   function destructivelyRemoveFirstCat(name) { {
    return cats.shift()
   }
   destructivelyRemoveFirstCat;
   console.log(cats);
   }

   function appendCat(name) { {
    return [...cats ,name]
   }
   appendCat("Broom")
   console.log(cats);
   }

  function prependCat(name) { {
    return [name, ...cats];
  }
  prependCat("Arnold");
  console.log(cats);
}
  
  function removeFirstCat() { {
    return cats.slice(1);
  }
  removeFirstCat;
  console.log(cats);
}
  
  function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }
  removeLastCat;
  console.log(cats);
