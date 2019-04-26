document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const form = document.querySelector('#formInput');


  const handleFormSubmit = function (event) {
    console.log("HELLO");
    //Prevent page refresh
    event.preventDefault();

    // Getting Title Input Value
    const artistValue =  event.target.artist.value;
    // Getting Author Input Value
    const albumValue =  event.target.albumTitle.value;
    //Getting dropdown value
    const releaseDate = event.target.releaseDate.value;

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
      divContainer.classList.add('divbox');
    }

    generateBlock();

    /*
    //CREATE ELEMENT / SET VALUE / ATTACH TO DIV
    const pTitle = document.createElement('p');
    pTitle.textContent = artistValue;
    divContainer.appendChild(pTitle);

    //CREATE ELEMENT / SET VALUE / ATTACH TO DIV
    const pAuthor = document.createElement('p');
    pAuthor.textContent = albumValue;
    divContainer.appendChild(pAuthor);

    //CREATE ELEMENT / SET VALUE / ATTACH TO DIV
    const pCategory = document.createElement('p');
    pCategory.textContent = releaseDate;
    divContainer.appendChild(pCategory);
    */
  }
  form.addEventListener('submit', handleFormSubmit);

  const deleteBtn = document.querySelector('#deleteAll');
  deleteAllListItems = () => {
    readingList.textContent = "";
  }
  deleteBtn.addEventListener('click', deleteAllListItems);

})
