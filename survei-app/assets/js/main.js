$(document).ready(function () {
	$(".question-content").slice(0, 1).show();
	$("#loadMore").on("click", function (e) {
		e.preventDefault();
		$(".question-content:hidden").slice(0, 1).slideDown();
		if ($(".question-content:hidden").length == 0) {
			$("#loadMore").text("Opps udah habis :)").addClass("noContent");
		}
	});
});
