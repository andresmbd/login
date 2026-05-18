import './style.css';
import { getElementById } from './utils/getElementById';

const login = getElementById('login'); // Cleaner code 
const app = getElementById('app');

const store = {
  user : null, // reserve space in memory to use later
  isLogin : false,

  login(data){ // is made the parameter later will pass as an argument
    this.user = data;
    this.isLogin = true;
  },

  logout(){
    this.user = null;
    this.isLogin = false;
    localStorage.removeItem('user');
  },
  
  saveData(data){ // same here (data is what user is entering in login)
    /*propierty of 
    "window" 
    object 
    (browser)*///- the save command 
    localStorage.setItem('user', JSON.stringify(data))
  }
}

const dataUser = [
  {
    id: 1,
    name: "Alejandro",
    role: "Coder",
    email: "alejandro.villanueva@riwi.io",
    password: "coder123",
  },
  {
    id: 2,
    name: "Abrahan",
    role: "Team Leader",
    email: "abrahan.villa@riwi.io",
    password: "teamleader123",
  },
  {
    id: 3,
    name: "Camila",
    role: "English Coach",
    email: "camila.rojas@riwi.io",
    password: "designer123",
  },
  {
    id: 4,
    name: "Sebastian",
    role: "Coder",
    email: "sebastian.mora@riwi.io",
    password: "backend123",
  },
  {
    id: 5,
    name: "Valentina",
    role: "English Coach",
    email: "valentina.gomez@riwi.io",
    password: "frontend123",
  },
  {
    id: 6,
    name: "Juan",
    role: "Coder",
    email: "juan.perez@riwi.io",
    password: "qatester123",
  },
  {
    id: 7,
    name: "Laura",
    role: "Team Leader",
    email: "laura.castillo@riwi.io",
    password: "manager123",
  },
  {
    id: 8,
    name: "Daniel",
    role: "Coder",
    email: "daniel.ramirez@riwi.io",
    password: "devops123",
  },
  {
    id: 9,
    name: "Sofia",
    role: "English Coach",
    email: "sofia.martinez@riwi.io",
    password: "uxui123",
  },
  {
    id: 10,
    name: "Mateo",
    role: "Team Leader",
    email: "mateo@riwi.io",
    password: "data123",
  },
];
const saveUser = JSON.parse(localStorage.getItem('user'))

if (saveUser){
  loginWelcome(saveUser);
  console.log(saveUser);
  
}else{
  loginBox();
}

function loginValidation(){
  const loginForm = getElementById('login'); // Se captura el form despues de que loginBox() lo cree

  loginForm.addEventListener('submit', e =>{ // e (event) is the object of the event, it takes the report of what just happend so it can execute the function inside.
    e.preventDefault();

    const {email, password} = Object.fromEntries(new FormData(loginForm));
    const getUser = dataUser.find(user => user.email === email /*|| user.password === password*/); // evitar confuciones de datos

    console.log(getUser);
    
    if (email === getUser?.email && password === getUser?.password){ // The optional concatenation operator “?” prevents the code from crashing
      store.saveData(getUser);
      store.login(getUser);
      loginWelcome(getUser);

      console.log(store);
    }else{
      const alertMsg = getElementById('error');
      alertMsg.innerHTML = `
      <span id="alert-msg" class="text-red-700 ">Either the username and/or password is incorrect</span>
      `;
    }
  });
}

function loginWelcome(user){
  switch (user.role) {
    case "Team Leader":
      app.innerHTML = `
      <div class="flex flex-col items-center">
        <div class="flex items-center">
          <h1>Team Leader dashboard</h1>
          <button id="btn-logout" class="bg-blue-950 cursor-pointer text-amber-50 mt-2 p-2 rounded-md self-center ml-2">Logout</button>
        </div>
        <p class="mt-5">Welcome ${user.name}</p>
      </div>
      `;
      break;
    case "English Coach":
      app.innerHTML = `
      <div class="flex flex-col items-center">
        <div class="flex items-center">
          <h1>English Coach dashboard</h1>
          <button id="btn-logout" class="bg-blue-950 cursor-pointer text-amber-50 mt-2 p-2 rounded-md self-center ml-2">Logout</button>
        </div>
        <p class="mt-5">Welcome ${user.name}</p>
      </div>
      `;
      break;
    default:
      app.innerHTML = `
      <p>Welcome ${user.name}</p>
      <button id="btn-logout" class="bg-blue-950 cursor-pointer text-amber-50 mt-2 p-2 rounded-md self-center ml-2">Logout</button>
      `;
      break;
  }
  getElementById('btn-logout').addEventListener('click', ()=>{
    store.logout();
    loginBox();
  })
}

function loginBox(){ // el navegador borra todo lo que había en el .html y crea elementos nuevos.
   app.innerHTML = ` 
  <form id="login" class="flex flex-col bg-gray-300 p-5 rounded-lg w-70">

    <div class="flex flex-col gap-1">
      <label for="email">Email</label>
      <input class="bg-gray-200 rounded-sm pl-1 outline-none" 
      type="email" 
      name="email" 
      placeholder="Enter your email">
    </div>

    <div class="flex flex-col gap-1">
      <label for="'password">Password</label>
      <input class="bg-gray-200 rounded-sm pl-1  outline-none" 
      type="password" 
      name="password" 
      placeholder="Enter your password">
    </div>

    <button class="bg-blue-950 cursor-pointer text-amber-50 mt-2 p-2 rounded-md self-center w-full">Login</button>
    <div id="error"></div>
  
  </form>
`
   loginValidation();
}
