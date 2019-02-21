function redirectToBackground() {
	//alert("will be redirecting");
	window.location = "background.html";
}

function redirectToData() {
	window.location = "data.html";
}

$(document).ready(function() {
	$(".topLeftCornerSlideIn").mouseenter(function() {
		$(".backgroundCircle").css("backgroundColor", "white");
	});

	$(".topLeftCornerSlideIn").mouseleave(function() {
		setTimeout(
    		function() {
      			$(".backgroundCircle").css("backgroundColor", "rgb(90, 180, 240)");
    	}, 200);
	});

	$(".topRightCornerSlideIn").mouseenter(function() {
		$(".dataCircle").css("backgroundColor", "white");
	});

	$(".topRightCornerSlideIn").mouseleave(function() {
		setTimeout(
    		function() {
      			$(".dataCircle").css("backgroundColor", "rgb(240, 90, 90)");
    	}, 200);
	});

	$(".bottomLeftCornerSlideIn").mouseenter(function() {
		$(".resultsCircle").css("backgroundColor", "white");
	});

	$(".bottomLeftCornerSlideIn").mouseleave(function() {
		setTimeout(
    		function() {
      			$(".resultsCircle").css("backgroundColor", "rgb(220, 232, 80)");
    	}, 200);
	});

	$(".bottomRightCornerSlideIn").mouseenter(function() {
		$(".aboutCircle").css("backgroundColor", "white");
	});

	$(".bottomRightCornerSlideIn").mouseleave(function() {
		setTimeout(
    		function() {
      			$(".aboutCircle").css("backgroundColor", "rgb(110, 232, 80)");
    	}, 200);
	});
});
