// Declares vars
var url;
var myWindow;

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function getRandom(min, max, millisecs) {
      
      shuffle(abc123);
      shuffle(list);
      url = ( Math.floor(Math.random() * (max - min)) + min );
      myWindow = window.open(list[url]);
      window.setTimeout(closePage, millisecs); 
 
}

function closePage() {
 
      myWindow.close();
      getRandom(0, list.length, millisecs);
 
}
