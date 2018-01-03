// función que permite poner visible o no una sección div, asi conseguimos que
// la tabla se oculte cuando inciamos partida
function ponerVisible(div, visible) {
	let
	estado = visible ? "block" : "none"; // block para que se vea, o none
											// para que no se vea
	div.css({
		"display" : estado
	});
}

$(function() {
    

    $("#contact").click(
			function() {
                    
					ponerVisible($("#myCarousel"), false);
                    ponerVisible($("#imagenesJuegos"), false);
                    ponerVisible($("#container"), false);
					ponerVisible($("#survival"), false);
                    ponerVisible($("#contactos"), true);
					
				})
    
    $("#BInfoMazeQuiz").click(
			function() {
					$('.navbar li.active').removeClass('active');
                    ponerVisible($("#imagenesJuegos"), false);
					ponerVisible($("#myCarousel"), false);
                    ponerVisible($("#container"), true);
                    ponerVisible($("#contactos"), false);
					ponerVisible($("#survival"), false);
					
				})
    
    $("#BMazeQuiz").click(
			function() {
					window.open("https://grupomaajwebyredessociales.github.io/MazeQuiz/");
					
				})
				
	$("#BInfoSurvival").click(
			function() {
					$('.navbar li.active').removeClass('active');
                    ponerVisible($("#imagenesJuegos"), false);
					ponerVisible($("#myCarousel"), false);
                    ponerVisible($("#container"), false);
                    ponerVisible($("#contactos"), false);
					ponerVisible($("#survival"), true);
					
				})
    
    $("#BSurvival").click(
			function() {
					window.open("https://drive.google.com/drive/folders/1eYHOTFNuSkmbpkb2sqYwDEJM3giRd4W7");
					
				})
    
    $("#home").click(
			function() {
                    ponerVisible($("#imagenesJuegos"), true);
                    ponerVisible($("#container"), false);
					ponerVisible($("#survival"), false);
					ponerVisible($("#myCarousel"), true);
                    ponerVisible($("#contactos"), false);
					
				})
    
    $('.navbar li').click(function(e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }

    });

    
})