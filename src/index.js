import "./style.css";

const navbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add("sidenav")

  const ul = document.createElement('ul');
  ul.classList.add("menu");
  
  //class
  const liT = document.createElement('li');
  liT.innerText = '//To-Do';
  const todoul = document.createElement('ul');
  todoul.classList.add("sub-menu");
  //Home
  const home = document.createElement('li');
  home.textContent = "Home";
  //render ALL
  todoul.appendChild(home);
  const today = document.createElement('li');
  today.textContent = "Today";
  //render Today
  todoul.appendChild(today);
  const week = document.createElement('li');
  week.textContent = "Week";
  //render week
  todoul.appendChild(week);
  



  const liP = document.createElement('li');
  //class
  //render  
  liP.innerHTML = '//Projects';
  //Sub menu Projects****
  const subul2 = document.createElement('ul');
  subul2.classList.add("sub-menu");
  const subli21 = document.createElement('li');
  subli21.textContent = "Project1";
  const subli22 = document.createElement('li');
  subli22.textContent = "Project1";
  subul2.appendChild(subli21);
  subul2.appendChild(subli22);
  const addButton = document.createElement('button');
  addButton.classList.add('btn');
  addButton.textContent = "+";
  subul2.appendChild(addButton);


  ul.appendChild(liT);
  ul.appendChild(todoul);
  ul.appendChild(liP);
  ul.appendChild(subul2);
  nav.appendChild(ul);

  return nav;
}

const main = () =>{
  const main = document.createElement('main');
  main.classList.add('main');

  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('h2');
  title.textContent = "To-Do";
  header.appendChild(title);

  const date = document.createElement('h2');
  date.textContent = "Date";
  header.appendChild(date);

  main.appendChild(header);
  return main;
}

document.body.appendChild(navbar());
document.body.appendChild(main());
