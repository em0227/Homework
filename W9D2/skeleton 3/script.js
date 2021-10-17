document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };
  //querySelectorAll is a nodelist element that's array-like, but can call method .length and .forEach
  //classList also has a method .toggle that do this.
  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const sfPlacesForm = document.getElementById('favorite-form');

  sfPlacesForm.addEventListener('submit', event => {
    event.preventDefault();
    const sfPlaceInput = document.getElementsByClassName('favorite-input')[0];
    //returns a collection of elements, so use [whole_number] to get the desired occurrence.
    // debugger
    //can also do document.querySelector('input[name="..."]') to get the input text
    const sfPlace = sfPlaceInput.value;
    sfPlaceInput.value = '';

    const ul = document.getElementById('sf-places');
    const li = document.createElement('li');
    li.textContent = sfPlace;
    //can also do li.innerText (preferred than innerHTML, the latter may parse )
    ul.appendChild(li);
    //append can also works, append can take in more multiple items.
  });


  // adding new photos

  // --- your code here!
  const puppyButton = document.getElementsByClassName('photo-show-button')[0];
  const puppyForm = document.querySelector('.photo-form-container');
  puppyButton.addEventListener('click', event => {
    
    //used getElementsByClassName and return a HTML collection
    // debugger
    if (puppyForm.classList.contains('hidden')) {
      puppyForm.classList.remove('hidden');
    } else {
      puppyForm.classList.add('hidden');
    }
  });

  puppyForm.addEventListener('submit', event => {
    event.preventDefault();
    const puppyInput = document.getElementsByClassName('photo-url-input')[0];
    //returns a collection of elements, so use [whole_number] to get the desired occurrence.
    // debugger
    //can also do document.querySelector('input[name="..."]') to get the input text
    const puppyUrl = puppyInput.value;
    puppyInput.value = '';

    const ul = document.querySelector('.dog-photos');
    const li = document.createElement('li');
    const img = document.createElement('img');
    const imgSrc = puppyUrl;
    img.src = imgSrc;
    // img.location.hash = imgSrc not to use here, but this will change the url + #imgSrc
    //can also do li.innerText (preferred than innerHTML, the latter may parse )
    ul.append(li); 
    //if do ul.append(li, img) img will get append after the ul and won't have the right sizing
    li.append(img)
    //append can also works, append can take in more multiple items.
  });


});
