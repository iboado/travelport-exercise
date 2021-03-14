var changeLog = "";

const RESTUrl = "/restful/mockjaxRESTCall";
const promptText = "Please input a new element";

function addElement() {
	
	saveStatus($("#mySelect"));

	var input = prompt(promptText);

	$("#mySelect").append($('<option>',{text : input}));
}

function removeAll() {
	saveStatus($("#mySelect"));

	$("#mySelect").find('option').remove().end();
}

function removeElement() {

	saveStatus($(this).parent());
	$(this).remove();
}

function saveStatus(element) {

	$.each($(element),function(i,val){
		changeLog = ($(val).html());
	});
}

function undo() {

	$("#mySelect").html(changeLog);
}

$(function(){

	$.mockjax({
		url: RESTUrl,
		responseText: {
		opt1 : 'opt1',
		opt2 : 'opt2',
		opt3 : 'opt3',
		opt4 : 'opt4',
		}
	});

	$.getJSON(RESTUrl, function( response = { status : "error"} ) {
  		if ( response.status != "error") {
    		$.each(response, function(i,val){
    			$("#mySelect").append($('<option>',{text : val}));
    		});
  		} else {
  			alert("something went wrong");
		}
	});

	$("select").on("dblclick", "option", removeElement);

	$("#add").on("click",addElement);
	$("#removeAll").on("click",removeAll);
	$("#undo").on("click",undo);
});