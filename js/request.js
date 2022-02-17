/*----------------------------------------------------------------------------------------------------------------
--
#Original Author:   Chantha Kammer #
#Date Created:      2/11/2022      #
#Version:           0.1            #
#Date Last Modified:2/11/2022      #
#Modified by:       Chantha Kammer #
#Modification log:                 
    Version 0.1 - 2/11/2022 - Created request.js | I can't believe I got this to work
------------------------------------------------------------------------------------------------------------------*/

"use strict";

const displayRequests = requests => {
    let requestString = $("#request").val();
    let skillString = $("#skill").val();

    $("#request_list").val("Requested Game: " + requestString + "  Skill: " + skillString);
    $("#request").focus();
}

$(document).ready( () => {
    
    const requestString = localStorage.requests;
    const requests = (requestString) ? JSON.parse(requestString) : [];

    $("#add_request").click ( () => {
        let request = $("#request").val();
        let skill = $("#skill").val();

        if (request != "" && skill != ""){
            const newRequest = [request, skill];
            requests.push(newRequest);
            localStorage.requests = JSON.stringify(requests);

            displayRequests(requests);
            $("#request").val("");
            $("#skill").val("");
        } else {
            alert("You did not enter a request or skill.");
            $("#request").select();
        }
    });

    $("#clear_requests").click ( () => {
        requests.length = 0;
        localStorage.removeItem("tasks");
        $("#request_list").val("");
        $("#request").val("");
        $("#skill").val("");
    });

    displayRequests(requests);

});

