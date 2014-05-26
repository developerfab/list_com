function purge_url(){
	var url = $('#url').val();
	var id_url =url.split("http://youtu.be/");
	if(id_url.length==2){
		var x = id_url[1];
	}
	else{
		id_url =url.split("https://www.youtube.com/watch?v=");
	}
	$('#you').html('<iframe width="400" height="300" src="http://www.youtube.com/embed/'+id_url[1]+'?playlist=vQ3RF6FXFug,YaSt3K47iMc&theme=ligth" frameborder="0" allowfullscreen></iframe>');
}
