let elementsarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Function to create the App with arranged numbers
createApp = () => {
  for (var i = 0; i < elementsarr.length; i++) {
    document.getElementById(i + 1).innerHTML = elementsarr[i];
  }
};

//Function to shuffle the array elements
shuffleFunc = () => {
  elementsarr = elementsarr.sort(() => Math.random() - 0.5);
  createApp();
};

//Function to sort array elements
sortFunc = () => {
  elementsarr.sort();
  createApp();
};

//Add EventListeners on Buttons
shufflebtn.addEventListener("click", shuffleFunc);
sortbtn.addEventListener("click", sortFunc);
