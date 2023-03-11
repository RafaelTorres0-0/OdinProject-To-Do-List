import "./style.css";

const navbar = () =>{
  const nav = document.createElement('nav');
  nav.classList.add("sidenav")
  
  const ul = document.createElement('ul');
  ul.classList.add("menu");
  //class
  const liT = document.createElement('li');
  //class
  //render
  liT.innerText = 'Todos';
  

  const liP = document.createElement('li');
  //class
  //render  
  liP.innerHTML = 'Projects';
  //Sub menu Projects****
  const subul2 = document.createElement('ul');
  subul2.classList.add("sub-menu");
  const subli21 = document.createElement('li');
  subli21.textContent = "Project1";
  const subli22 = document.createElement('li');
  subli22.textContent = "Project1";
  subul2.appendChild(subli21);
  subul2.appendChild(subli22);


  

  ul.appendChild(liT);
  ul.appendChild(subul1);
  ul.appendChild(liP);
  ul.appendChild(subul2);
  nav.appendChild(ul);

return nav;
}

const main = () => {

  return 0;
}


  document.body.appendChild(navbar());
  document.body.appendChild(main());