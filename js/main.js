/*global $, console, roles*/

$(document).ready(function () {
    "use strict";
	var filtedRoles = [], pos;
	console.log(roles);
	
	function position(element) {
		return element.Position === pos;
	}
	
    $("input[name='position']").on("click", function () {
        var i;
		pos = $(this).val();
		for (i = 0; i < roles.length; i += 1) {
			filtedRoles = roles.filter(position);
		}
		
		console.log(filtedRoles);
    });
});

