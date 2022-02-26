/*----------------------------------------------------------------------------------------------------------------
--
#Original Author:   Chantha Kammer #
#Date Created:      2/26/2022      #
#Version:           1.0           #
#Date Last Modified:2/26/2022       #
#Modified by:       Chantha Kammer #
#Modification log:                 
    - Version 1: Added email_list.js

------------------------------------------------------------------------------------------------------------------*/

"use strict";
$(document).ready( () => {
    
    $("#email_1").focus();

    // handle click on Join List button
    $("#join_list").click( evt => {
        let isValid = true;

        // validate the first email address
        const emailPattern = 
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email1 = $("#email_1").val().trim();
        if (email1 == "") { 
            $("#email_1").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email1) ) {
            $("#email_1").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        }
        $("#email_1").val(email1);

        // validate the second email address
        const email2 = $("#email_2").val().trim();
        if (email2 == "") { 
            $("#email_2").next().text("This field is required.");
            isValid = false; 
        } else if (email1 != email2) { 
            $("#email_2").next().text("The email addresses must match.");
            isValid = false;
        } else {
            $("#email_2").next().text("");
        }
        $("#email_2").val(email2);
        
        // validate the first name entry 
        const firstName = $("#first_name").val().trim(); 
        if (firstName == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        $("#first_name").val(firstName);

        // validate the last name entry
        const last_name = $("#last_name").val().trim();
        if (last_name == "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }

        // validate the state entry
		const state = $("#state").val().trim();
		if (state == "") {
			$("#state").next().text("This field is required.");
			isValid = false;
		} else if ( state.length != 2 ) {
			$("#state").next().text("Use 2-character code.");
			isValid = false;
		} else {
			$("#state").next().text("");
		}
		$("#state").val(state);
			
		// validate the zip-code entry
		const zipCode = $("#zip_code").val().trim();
		if (zipCode == "") {
			$("#zip_code").next().text("This field is required.");
			isValid = false;
		} else if ( zipCode.length != 5 ) {
			$("#zip_code").next().text("Use 5-character code.");
			isValid = false;
		} else {
			$("#zip_code").next().text("");
		}
		$("#zip_code").val(zipCode);	
		// validate the check boxes	
		let checkedOptions = [];
        checkedOptions = $(":checkbox:checked")	;
        console.log(checkedOptions);        
        if (checkedOptions.length < 1) {
            $("#net").next().text("Please select one checkbox."); // You need to use #net since it is the last button.
            isValid = false;
        }
        else {
            $("#net").next().text("");
            $("web").focus();
        }
        

		// prevent the default action of submitting the form if any entries are invalid 
		if (isValid == false) {
            evt.preventDefault();
		}
    });

    // handle click on Reset Form button
    $("#reset").click( () => {
        // clear text boxes
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");
        $("#last_name").val("");
        $("#state").val("");
        $("#zip_code").val("");

        // reset span elements
        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#first_name").next().text("*");
        $("#last_name").next().text("*");
        $("#state").next().text("*");
        $("#zip_code").next().text("*");
        $("#net").next().text("*");
        
        $("#email_1").focus();
    });

    // move focus to first text box
});