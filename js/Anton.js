// Initial filter that shows all items
filterSelection("alle")


// Event listener to detect changes in the select dropdown
document.getElementById('article-filter__by-tags').addEventListener('change', function(event) {
    filterSelection(event.target.value); // Pass the selected value to filterSelection

    console.log("Selection changed to:", event.target.value);
});

// Function to filter elements based on user selection
function filterSelection(c) {
    var c, i;
    let x = document.getElementsByClassName("a--filterDiv");
    
    if (c === "alle") c = ""; 
    
    for (i = 0; i < x.length; i++) {
        removeShow(x[i], "a--show") // Remove "a--show" class initially
            if (x[i].className.indexOf(c) > -1) addShow(x[i], "a--show") // Add "a--show" to matching items
    }
}

// Function that adds "a--show" class to selected elements, displaying them.
function addShow(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++){ 
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];} // Only add if class doesn't exist
    }
}

// Function to remove "a--show" class from deselected elements.
function removeShow(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join (" ");
}