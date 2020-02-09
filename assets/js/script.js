let quotes = '{ "quotesString" : [' +
    '{ "quote": "It is beautiful. It is well worth the trip. It is something everyone should do if they get the chance." , "who": "Mark Hamill, Star Wars actor" },' +
    '{ "quote": "You do not get to Dingle by accident. It is on the way to nothing but itself." , "who": "Andrew McCarthy, travel writer" },' +
    '{ "quote": "You can feel the past and history of the people who went before you. There is an aura there, a feeling, it is mystical." , "who": "Joe Bloggs, tourist" },' +
    '{ "quote": "Kenmare quote 1" , "who": "Kenmare person 1" },' +
    '{ "quote": "Kenmare quote 2" , "who": "Kenmare person 2" },' +
    '{ "quote": "Kenmare quote 3" , "who": "Kenmare person 3" },' +
    '{ "quote": "Killarney quote 1" , "who": "Killarney person 1" },' +
    '{ "quote": "Killarney quote 2" , "who": "Killarney person 2" },' +
    '{ "quote": "Killarney quote 3" , "who": "Killarney person 3" },' +
    '{ "quote": "Listowel quote 1" , "who": "Listowel person 1" },' +
    '{ "quote": "Listowel quote 2" , "who": "Listowel person 2" },' +
    '{ "quote": "Listowel quote 3" , "who": "Listowel person 3" },' +
    '{ "quote": "Tralee quote 1" , "who": "Tralee person 1" },' +
    '{ "quote": "Tralee quote 2" , "who": "Tralee person 2" },' +
    '{ "quote": "Tralee quote 3" , "who": "Tralee person 3" } ]}';

let quotesObject = JSON.parse(quotes);

document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/kenmare.jpg')" });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[3].quote + " " + quotesObject.quotesString[3].who });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[4].quote });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("who-two").innerHTML = quotesObject.quotesString[4].who });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[5].quote + " " + quotesObject.quotesString[5].who });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-one").src = 'assets/images/kenmare-reenagross.jpg'});
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-two").src = 'assets/images/kenmare-square.jpg' });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-three").src = 'assets/images/kenmare-main.jpg' });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-one").alt = 'Reenagross Park in Kenmare'});
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-two").alt = 'The Square in Kenmare' });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-three").alt = 'Main Street in Kenmare' });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("text-one").innerHTML = 'Reenagross' });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("text-two").innerHTML = 'Square' });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("text-three").innerHTML = 'Main St' });

document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/killarney.jpg')" });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[6].quote + " " + quotesObject.quotesString[6].who });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[7].quote + " " + quotesObject.quotesString[7].who });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[8].quote + " " + quotesObject.quotesString[8].who });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-one").src = 'assets/images/killarney-muckross.jpg' });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-two").src = 'assets/images/killarney-horses.jpg' });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-three").src = 'assets/images/killarney-town.jpg' });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-one").alt = 'Muckross House in Killarney' });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-two").alt = 'Jaunting cars in Killarney' });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-three").alt = 'Killarney town centre' });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("text-one").innerHTML = 'Muckross' });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("text-two").innerHTML = 'Jaunting' });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("text-three").innerHTML = 'Town' });

document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/listowel.jpg')" });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[9].quote + " " + quotesObject.quotesString[9].who });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[10].quote + " " + quotesObject.quotesString[10].who });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[11].quote + " " + quotesObject.quotesString[11].who });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-one").src = 'assets/images/listowel-monorail.jpg' });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-two").src = 'assets/images/listowel-castle.jpg' });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-three").src = 'assets/images/listowel-garden.jpg' });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-one").alt = 'Lartigue Monorail in Listowel' });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-two").alt = 'Listowel Castle' });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-three").alt = 'Gardens of Europe in Listowel' });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("text-one").innerHTML = 'Monorail' });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("text-two").innerHTML = 'Castle' });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("text-three").innerHTML = 'Gardens' });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("list-stay").style.display = "none" });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("list-more").style.display = "none" });

document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/tralee.jpg')" });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[12].quote + " " + quotesObject.quotesString[12].who });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[13].quote + " " + quotesObject.quotesString[13].who });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[14].quote + " " + quotesObject.quotesString[14].who });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-one").src = 'assets/images/tralee-blennerville.jpg' });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-two").src = 'assets/images/tralee-park.jpg' });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-three").src = 'assets/images/tralee-aquadome.jpg' });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-one").alt = 'Blennerville Windmill in Tralee' });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-two").alt = 'Tralee town park' });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-three").alt = 'Aquadome swimming pool in Tralee' });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("text-one").innerHTML = 'Blennerville' });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("text-two").innerHTML = 'Park' });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("text-three").innerHTML = 'Aquadome' });

document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/dingle.jpg')" });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[0].quote + " " + quotesObject.quotesString[0].who });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[1].quote + " " + quotesObject.quotesString[1].who });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[2].quote + " " + quotesObject.quotesString[2].who });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-one").src = 'assets/images/dingle-fungie.jpg' });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-two").src = 'assets/images/dingle-inch.jpg' });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-three").src = 'assets/images/dingle-oceanworld.jpg' });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-one").alt = 'Statue of Fungie the dolphin in Dingle' });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-two").alt = 'Inch Beach on the Dingle Peninsula' });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-three").alt = 'Tunnel aquarium at Dingle Oceanworld' });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("text-one").innerHTML = 'Fungie' });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("text-two").innerHTML = 'Inch' });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("text-three").innerHTML = 'Oceanworld' });

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("eat").innerHTML = ("Places to eat")
  } else {
    document.getElementById("eat").innerHTML = ("Eat")
  }

    if (x.matches) { // If media query matches
    document.getElementById("stay").innerHTML = ("Places to stay")
  } else {
    document.getElementById("stay").innerHTML = ("Stay")
  }

  if (x.matches) { // If media query matches
    document.getElementById("go").innerHTML = ("Places to go")
  } else {
    document.getElementById("go").innerHTML = ("Go")
  }

  if (x.matches) { // If media query matches
    document.getElementById("more").innerHTML = ("Zoom out for more")
  } else {
    document.getElementById("more").innerHTML = ("More")
  }

}

var x = window.matchMedia("(min-width: 630px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes