function redirectToBackground() {
	//alert("will be redirecting");
	backgroundMouseLeave();
	window.location = "background.html";
}

function redirectToData() {
	dataMouseLeave();
	window.location = "data.html";
}

function redirectToResults() {
	resultsMouseLeave();
	window.location = "results.html";
}

function redirectToAbout() {
	aboutMouseLeave();
	window.location = "about.html";
}

function dataMouseLeave() {
	setTimeout(
    	function() {
      		$(".dataCircle").css("backgroundColor", "rgb(240, 90, 90)");	
    }, 250);
}

function backgroundMouseLeave() {
	setTimeout(
    	function() {
     		$(".backgroundCircle").css("backgroundColor", "rgb(90, 180, 240)");
   	}, 250);
}

function resultsMouseLeave() {
	setTimeout(
   		function() {
   			$(".resultsCircle").css("backgroundColor", "rgb(220, 232, 80)");
   	}, 250);
}

function aboutMouseLeave() {
	setTimeout(
   		function() {
   			$(".aboutCircle").css("backgroundColor", "rgb(110, 232, 80)");
   	}, 250);
}

function goHome() {
	window.location = "index.html";
}

$(document).ready(function() {
	$(".topLeftCornerSlideIn").mouseenter(function() {
		$(".backgroundCircle").css("backgroundColor", "white");
	});

	$(".topLeftCornerSlideIn").mouseleave(function() {
		backgroundMouseLeave();
	});

	$(".topRightCornerSlideIn").mouseenter(function() {
		$(".dataCircle").css("backgroundColor", "white");
	});

	$(".topRightCornerSlideIn").mouseleave(function() {
		dataMouseLeave();
	});

	$(".bottomLeftCornerSlideIn").mouseenter(function() {
		$(".resultsCircle").css("backgroundColor", "white");
	});

	$(".bottomLeftCornerSlideIn").mouseleave(function() {
		resultsMouseLeave();
	});

	$(".bottomRightCornerSlideIn").mouseenter(function() {
		$(".aboutCircle").css("backgroundColor", "white");
	});

	$(".bottomRightCornerSlideIn").mouseleave(function() {
		aboutMouseLeave();
	});
});
