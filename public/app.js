var app = function(){
  var url = "http://hp-api.herokuapp.com/api/characters";
  makeRequest(url, requestComplete);
  // var hpchar = localStorage.getItem('harryPotterCharacters');
  // JSON.parse(hpchar);
  selectCharacter(JSON.parse(localStorage.getItem("harryPotterCharacters")))
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

// var data;

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var harryPotterData = JSON.parse(jsonString);
  data = harryPotterData;
  populateDropDown(harryPotterData);
  // getWand(harryPotterData);
};

var populateDropDown = function(harryPotterData){
  var select = document.getElementById('char-dropdown');
  harryPotterData.forEach(function(character){
    var option = document.createElement('option');
    option.innerText = character.name;
    select.appendChild(option);
  })
  select.addEventListener('change', function(){
    selectCharacter(harryPotterData[this.selectedIndex-1]);
    save(harryPotterData[this.selectedIndex-1]);

  });
};

var selectCharacter = function(harryPotterData){
  // var selectedIndex = clickEvent.target.selectedIndex;
  // var selectedCharacter = harryPotterData[this.selectedIndex-1];
  var ul = document.getElementById('char-list');
    while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  var img = document.createElement('img');
  img.classList.add('char-img');
  var liName = document.createElement('li');
  var liSpecies = document.createElement('li');
  var liGender = document.createElement('li');
  var liHouse = document.createElement('li');
  var liDob = document.createElement('li');
  var liAncestry = document.createElement('li');
  var liEyeColour = document.createElement('li');
  var liHairColour = document.createElement('li');
  var liWand = document.createElement('li');
  var woodul = document.createElement('ul');
  var ulliwandWood = document.createElement('li');
  var ulliwandCore = document.createElement('li');
  var ulliwandLength = document.createElement('li');
  var liPatronus = document.createElement('li');
  var liStudent = document.createElement('li');
  var liStaff = document.createElement('li');
  var liActor = document.createElement('li');
  img.src = harryPotterData.image;
  liName.innerText = "Name: " + harryPotterData.name;
  console.log(harryPotterData.name);
  liSpecies.innerText = "Species: " + harryPotterData.species;
  liGender.innerText = "Gender: " + harryPotterData.gender;
  liHouse.innerText = "House: " + harryPotterData.house;
  liDob.innerText = "D.O.B: " + harryPotterData.dateOfBirth;
  liAncestry.innerText = "Ancestry: " + harryPotterData.ancestry;
  liEyeColour.innerText = "Eye Colour: " + harryPotterData.eyeColour;
  liHairColour.innerText = "Hair Colour: " + harryPotterData.hairColour;
  liWand.innerText = "Wand: ";
  ulliwandWood.innerText = "Wood: " + harryPotterData.wand.wood;
  ulliwandCore.innerText = " Core: " + harryPotterData.wand.core;
  ulliwandLength.innerText = " Length: " + harryPotterData.wand.length + " inches";
  liPatronus.innerText = "Patronus: " + harryPotterData.patronus;
  liStudent.innerText = "Student: " + harryPotterData.hogwartsStudent;
  liStaff.innerText = "Staff: " + harryPotterData.hogwartsStaff;
  liActor.innerText = "Actor: " + harryPotterData.actor;
  ul.appendChild(img);
  ul.appendChild(liName);
  ul.appendChild(liSpecies);
  ul.appendChild(liGender);
  ul.appendChild(liHouse);
  ul.appendChild(liDob);
  ul.appendChild(liAncestry);
  ul.appendChild(liEyeColour);
  ul.appendChild(liHairColour);
  ul.appendChild(liWand);
  liWand.appendChild(woodul);
  woodul.appendChild(ulliwandWood);
  woodul.appendChild(ulliwandCore);
  woodul.appendChild(ulliwandLength);
  ul.appendChild(liPatronus);
  ul.appendChild(liStudent);
  ul.appendChild(liStaff);
  ul.appendChild(liActor);
}

var save = function(clickEvent){
  var jsonHP = JSON.stringify(clickEvent);
  localStorage.setItem('harryPotterCharacters', jsonHP);
  
}

window.addEventListener('load', app);