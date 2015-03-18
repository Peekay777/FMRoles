/*global $, console, roles*/

$(document).ready(function () {
    "use strict";
	var filtedRoles = [], pos;
	console.log(roles);
	
	// Filter on position
	function position(element) {
		return element.Position === pos;
	}
	
	function uniqueItemsInRoles(array, prop) {
		var unique = {}, distinct = [];
		array.forEach(function (x) {
			if (!unique[x[prop]]) {
				distinct.push(x[prop]);
				unique[x[prop]] = true;
			}
		});
		return distinct;
	}
	
	function filterSelect(rolesArray, instruction) {
		var uniqueOptions = [], $el;
		uniqueOptions = uniqueItemsInRoles(rolesArray, instruction);
		$el = $("#" + instruction);
		$el.empty();
		$.each(uniqueOptions, function (value, key) {
			$el.append($("<option></option>").attr("value", key).text(key));
		});
		$el.prepend("<option selected> -- select an option -- </option>");
	}
	
	// Position selected
    $("input[name='position']").on("click", function () {
        var i, newOptions;
		pos = $(this).val();
		for (i = 0; i < roles.length; i += 1) {
			filtedRoles = roles.filter(position);
		}
		
		//update filters options
		filterSelect(filtedRoles, "HoldUpBall");
		filterSelect(filtedRoles, "Shooting");
		filterSelect(filtedRoles, "Dribbling");
		filterSelect(filtedRoles, "DribbleDirection");
		filterSelect(filtedRoles, "PassLength");
		filterSelect(filtedRoles, "RiskyPass");
		filterSelect(filtedRoles, "CrossFrequency");
		filterSelect(filtedRoles, "CrossFrom");
		filterSelect(filtedRoles, "RunForward");
		filterSelect(filtedRoles, "WidePlay");
		filterSelect(filtedRoles, "MoveIntoChannels");
		filterSelect(filtedRoles, "RoamFromPosition");
		filterSelect(filtedRoles, "Pressing");
		filterSelect(filtedRoles, "Tackling");
		
		
		var $el = $("#results");
		$el.empty();
		$.each(filtedRoles, function (value, key) {
			$el.append($("<p></p>").text(key.Role + " - " + key.Duty));
		});
		
    });
});

