document.getElementById("count").textContent = document.getElementsByTagName("p").length;

for(var i=0; i<document.getElementsByClassName("trash").length; i++){
  document.getElementsByClassName("trash")[i].addEventListener("click",
    function(){
      this.parentNode.remove();
      document.getElementById("count").textContent = document.getElementsByTagName("p").length;
    }
  )
}

var row = document.getElementsByClassName('row');

document.getElementById("cta").addEventListener("click",
function(){

  var newMessage = document.createElement('div');
  newMessage.className = 'row';

  var newDiv = document.createElement('div');

  var p = document.createElement('p');

  var newText = document.createTextNode(document.getElementById('message').value);

  var newName = document.createElement('h6');
  var newName2 = document.createTextNode('Julio Boloss');

  var newAvatar = document.createElement('img');
  newAvatar.src = 'avatar-1.jpg';
  newAvatar.className = 'avatar';

  var trash = document.createElement('img');
  trash.src = 'trash.png';
  trash.className = 'trash';
  trash.addEventListener('click', function() {
    this.parentNode.remove();
    document.getElementById("count").textContent = document.getElementsByClassName("trash").length;
  })

  p.appendChild(newText);
  newName.appendChild(newName2);
  document.body.appendChild(newMessage);
  newMessage.appendChild(newAvatar);
  newMessage.appendChild(newDiv);
  newDiv.appendChild(newName);
  newDiv.appendChild(p);
  newMessage.appendChild(trash);

  document.getElementById("count").textContent = document.getElementsByClassName("trash").length;

});
