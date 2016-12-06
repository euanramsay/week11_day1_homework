window.onload = function(){

  var catUl = document.createElement('ul');
  catUl.classList.add('cat');
  var nameLi = document.createElement('li');
  nameLi.innerText = "Name: Felix";
  var foodLi = document.createElement('li');
  foodLi.innerText = "Favourite food: Dreamies";
  var img = document.createElement('img');
  nameLi.append(foodLi);
  catUl.appendChild(nameLi);
  var cats = document.querySelector('#cats');
  cats.append(catUl);

}