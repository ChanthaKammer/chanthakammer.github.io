/*----------------------------------------------------------------------------------------------------------------
--
#Original Author:   Chantha Kammer #
#Date Created:      1/21/2022      #
#Version:           0.1            #
#Date Last Modified:1/29/2022      #
#Modified by:       Chantha Kammer #
#Modification log:                 
    Version 0.1 - 1/29/2022 - Attempted to creat faq.js, see readme.txt
------------------------------------------------------------------------------------------------------------------*/

"use strict";

// the event handler for the click event of each h2 element
const toggle = evt => {
    const aElement = evt.currentTarget;
    const h2Element = aElement.parentNode;                 // get the clicked h2 element
    const divElement = h2Element.nextElementSibling;     // get h2's sibling div
    //aElement was below all of these declarations. brave: Cannot access 'aElement' before initialization

    //h2Element.classList.toggle("minus");
    //divElement.classList.toggle("open");

    if (h2Element.hasAttribute("class")) {
        h2Element.removeAttribute("class");
    }
    else {
        h2Element.className="minus";
    }

    if(divElement.hasAttribute("class")) {
        divElement.removeAttribute("class");
    }
    else {
        divElement.className="open";
    }
    

    evt.preventDefault();   // cancel default action of h2 tag's <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const aElements = faqs.querySelectorAll("#faqs a"); // Array of a Elements
    
    // attach event handler for each h2 tag	    
    for (let aElement of aElements) { // For let of creates an array with each of the elements. This is targeting h2 Elements
        aElement.addEventListener("click", toggle);
    }
    // set focus on first h2 tag's <a> tag
    aElements[0].focus();      // had to remove firstchild 
});

