function purge_url(){
	var url = $('#url').val();
	var id_url =url.split("http://youtu.be/");

	$('#you').html('<iframe width="500" height="500" src="http://www.youtube.com/embed/'+id_url[1]+'" frameborder="0" allowfullscreen></iframe>')
		
}
