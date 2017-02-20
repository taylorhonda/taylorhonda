$(document).ready(function(){
	
	$(".pages").hover(
		
		function() {
		$(this).css({"color":"#20b2aa"});
	},
	function() {
		$(this).css({"color":"black"});
	});

	$("#title").hover(
		
		function() {
		$(this).css({"color":"#20b2aa"});
	},
	function() {
		$(this).css({"color":"black"});
	});


	$("#design1").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin1").fadeIn();
	
	});

	$("#design2").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin2").fadeIn();

	});

	$("#design3").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin3").fadeIn();
	});

	$("#design4").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin4").fadeIn();
	});

	$("#design5").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin5").fadeIn();
	});

	$("#design6").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin6").fadeIn();
	});

	$("#design7").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin7").fadeIn();
	});

	$("#design8").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin8").fadeIn();
	});

	$("#photo1").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin9").fadeIn();

	});

	$("#photo2").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin10").fadeIn();

	});

	$("#photo3").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin11").fadeIn();

	});

	$("#photo4").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin12").fadeIn();

	});

	$("#photo5").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin13").fadeIn();

	});

	$("#photo6").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin14").fadeIn();

	});

	$("#photo7").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin15").fadeIn();

	});

	$("#photo8").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin16").fadeIn();

	});

	$("#photo9").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin17").fadeIn();

	});

	$("#photo10").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin18").fadeIn();

	});

	$("#photo11").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin19").fadeIn();

	});

	$("#photo12").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin20").fadeIn();

	});

	$("#photo13").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin21").fadeIn();

	});

	$("#photo14").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin22").fadeIn();

	});

	$("#photo15").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin23").fadeIn();

	});

	$("#photo16").click(function() {
		$(".overlay").fadeIn();
		$("#zoomin24").fadeIn();

	});



	$(".overlay").click(function() {
		$(".overlay").fadeOut();
		$("#zoomin1").fadeOut();
		$("#zoomin2").fadeOut();
		$("#zoomin3").fadeOut();
		$("#zoomin4").fadeOut();
		$("#zoomin5").fadeOut();
		$("#zoomin6").fadeOut();
		$("#zoomin7").fadeOut();
		$("#zoomin8").fadeOut();
		$("#zoomin9").fadeOut();
		$("#zoomin10").fadeOut();
		$("#zoomin11").fadeOut();
		$("#zoomin12").fadeOut();
		$("#zoomin13").fadeOut();
		$("#zoomin14").fadeOut();
		$("#zoomin15").fadeOut();
		$("#zoomin16").fadeOut();
		$("#zoomin17").fadeOut();
		$("#zoomin18").fadeOut();
		$("#zoomin19").fadeOut();
		$("#zoomin20").fadeOut();
		$("#zoomin21").fadeOut();
		$("#zoomin22").fadeOut();
		$("#zoomin23").fadeOut();
		$("#zoomin24").fadeOut();

	});

	$("#selfie").click(function() {
		if ($("#selfie").hasClass("opacity")) {
			$("#selfie").removeClass("opacity");
		}
		else {
			$("#selfie").addClass("opacity");
		}
	});



});