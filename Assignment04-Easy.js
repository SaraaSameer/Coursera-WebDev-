(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    function speak1(name) {
        var speakWord = "Hello";
        console.log(speakWord + " " + name);
      }
      
      function speak2(name) {
        var speakWord = "Good Bye";
        console.log(speakWord + " " + name);
      }
      for(var i=0;i<names.length;i++){
        var res=names[i].charAt(0);
        if(res==="j"||res==="J"){
            speak2(names[i])
        }
        else{
           speak1(names[i]);
        }
    }
})()