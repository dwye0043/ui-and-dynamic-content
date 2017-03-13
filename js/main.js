// Declare variables

var add_btn,
    u_list,
    l_item,
    user_input;

// Access new-item button
add_btn = document.querySelector("button");

// Access unordered list
u_list = document.querySelector("ul");


/* ======================================================================== */
/* 
 * Remove Item Function 
 */
function removeItem(ev) {
    
    "use strict";
    
    // Use event object to find out which item is clicked
    // Remove clicked item from unordered list
    u_list.removeChild(ev.target);
}


/* ======================================================================== */
/* 
 * Add Item Function 
 */
function addItem() {
    
    "use strict";
    
    // Prompt user to enter a Grocery Item
    user_input = prompt("Enter a new item for to-buy list!");
        
    // Create list item and store output
    l_item = document.createElement("li");
    
    // Assign li to value entered by user
    l_item.innerHTML = user_input;
    
    // If list item has content: 
    if (l_item) {
        
        // Append list item to unordered list
        u_list.appendChild(l_item);
        
        // Add event listener to list item to listen for click event 
        // - event handler will be removeItem function        
        l_item.addEventListener("click", removeItem, false);
    }
    
}


/* ======================================================================== */
/*
 * Add event listener to button to listen for click event 
 * - event handler will be addItem function
*/
add_btn.addEventListener("click", addItem, false);
