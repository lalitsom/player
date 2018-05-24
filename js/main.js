var urlinp;
var player;
	
function load(){
	urlinp = document.getElementById('urlid');
	player = document.getElementById('preview-player').player;
	player.src(urlinp.value);

}

