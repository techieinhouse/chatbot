var recognition;
var img1 = document.getElementById('zdd');
 var img = document.getElementById('z');
  var la = document.getElementById('la');
    img1.style.visibility = 'hidden';
      recognition = new webkitSpeechRecognition();
function startDictation() {

      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.lang = "en-US";


      recognition.onresult = function(e) {
      for (var i = e.resultIndex; i < e.results.length; ++i) {
            if (e.results[i].isFinal) {
        document.getElementById('messageText').value
                                        = e.results[i][0].transcript;

       // recognition.stop();




         document.getElementById('chatbot-form-btn').click();
        // recognition.start();
        }}
      };
 recognition.start();

     la.innerText="listening";


    img.style.visibility = 'hidden';
    img1.style.visibility = 'visible';


      recognition.onerror = function(e) {
        recognition.stop();

      }

    }






function stopDictation() {
         la.innerText="start speech";
        img.style.visibility = 'visible';
         img1.style.visibility = 'hidden';
        recognition.stop();

       }