var socket = io.connect('http://localhost:6677',{'forceNew':true});

socket.on('messages', function(data){
    render(data);
});

function render(data){
    var html = data.map(function(message,index){
        return (`
            <div class="messages">
                <strong>${message.nickname}</strong> says:
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');

    var div_message = document.getElementById("mensajes");
    div_message.innerHTML = html;
    div_message.scrollTop = div_message.scrollHeight;
}

function addMessage(e){
    var message = {
        nickname: document.getElementById("nickname").value,
        text: document.getElementById("texto").value
    };

    document.getElementById("nickname").style.display = 'none';
    socket.emit('add-message',message);
    return false;
}