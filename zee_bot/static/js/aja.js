$(function() {
            $('#chatbot-form-btn').click(function(e) {
                e.preventDefault();
                $('#chatbot-form').submit();
            });

            $('#chatbot-form').submit(function(e) {
                e.preventDefault();
                var bot_name= "zee:"
                var message = $('#messageText').val();
                if(message!=""){
                $(".media-list").append('<li class="media"><div class="media-body"><div class="media"><div class="media-body">' + message + '<hr/></div></div></div></li>');
                $.ajax({
                    type: "POST",
                    url: "/ask",
                    data: $(this).serialize(),
                    success: function(response) {

                        $('#messageText').val('');

                        var answer = response.answer;
                           speak(answer );

                        var chatPanel = document.getElementById("chatPanel");

                        $(".media-list").append('<li class="media"><div class="media-body"><div class="media"><div class="media-body">'  + bot_name.concat(answer) + '<hr/></div></div></div></li>');

                        DivElmnt = document.getElementById('MyDivName');
                        DivElmnt.scrollTop=DivElmnt.scrollHeight;
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });

}

// say a message
function speak(text, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang = 'en-US';

    u.onend = function () {
        if (callback) {
            callback();
        }
    };

    u.onerror = function (e) {
        if (callback) {
            callback(e);
        }
    };

    speechSynthesis.speak(u);
}



            });
        });