document.addEventListener('DOMContentLoaded', () => {
  
    const form = document.querySelector('#formInput');


    const handleFormSubmit = function (event) {

    //Prevent page refresh
    event.preventDefault();

    // Getting Title Input Value
    const artistValue =  event.target.artist.value;
    // Getting Author Input Value
    const albumValue =  event.target.albumTitle.value;
    //Getting release date value
    const releaseDate = event.target.releaseDate.value;
    //Getting dropdown value
    const category = event.target.category.value;

    //CREATING DIV CONTAINER
    const divContainer = document.createElement('div');

    //GETTING READING LIST REF
    readingList = document.querySelector('#list');

    //ADDING DIV TO READING LIST
    readingList.appendChild(divContainer);

    const generateElement = (elementType, elementValue, parentElement) => {
      const ele = document.createElement(elementType);
      ele.textContent = elementValue;
      parentElement.appendChild(ele);
    }

    const generateBlock = () => {
      generateElement('h1', artistValue,divContainer);
      generateElement('p',albumValue,divContainer);
      generateElement('p',releaseDate,divContainer);
      generateElement('p',category,divContainer);
      divContainer.classList.add('divbox');
    }

    generateBlock();
  }
  form.addEventListener('submit', handleFormSubmit);

  //DELETE BUTTON
  const deleteBtn = document.querySelector('#deleteAll');
  deleteAllListItems = () => {
    readingList.textContent = "";
  }
  deleteBtn.addEventListener('click', deleteAllListItems);

})
