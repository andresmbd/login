import './style.css';
import { getElementById } from './utils/getElementById';

const login = getElementById('login'); // Cleaner code 
const app = getElementById('app');

const store

const dataUser = [
  {
    id: 1,
    name: "Alejandro",
    role: "coder",
    email: "alejandro.villanueva@riwi.io",
    password: "coder123",
  },
  {
    id: 2,
    name: "Abrahan",
    role: "team leader",
    email: "abrahan.villa@riwi.io",
    password: "teamleader123",
  },
  {
    id: 3,
    name: "Camila",
    role: "designer",
    email: "camila.rojas@riwi.io",
    password: "designer123",
  },
  {
    id: 4,
    name: "Sebastian",
    role: "backend developer",
    email: "sebastian.mora@riwi.io",
    password: "backend123",
  },
  {
    id: 5,
    name: "Valentina",
    role: "frontend developer",
    email: "valentina.gomez@riwi.io",
    password: "frontend123",
  },
  {
    id: 6,
    name: "Juan",
    role: "qa tester",
    email: "juan.perez@riwi.io",
    password: "qatester123",
  },
  {
    id: 7,
    name: "Laura",
    role: "project manager",
    email: "laura.castillo@riwi.io",
    password: "manager123",
  },
  {
    id: 8,
    name: "Daniel",
    role: "devops",
    email: "daniel.ramirez@riwi.io",
    password: "devops123",
  },
  {
    id: 9,
    name: "Sofia",
    role: "ux/ui designer",
    email: "sofia.martinez@riwi.io",
    password: "uxui123",
  },
  {
    id: 10,
    name: "Mateo",
    role: "data analyst",
    email: "mateo.lopez@riwi.io",
    password: "data123",
  },
];

login.addEventListener('submit', e =>{ // e (event) is the object of the event, it takes the report of what just happend so it can execute the function inside.
    e.preventDefault();

    const {email, password} = Object.fromEntries(new FormData(login));

    const getUser = dataUser.find(user => user.email === email);

    console.log(getUser);
    
    if (email === getUser?.email && password === getUser?.password){
      app.innerHTML = `<p>Welcome ${getUser.name}</p>
      <button id="btn-logout" class="bg-blue-950 cursor-pointer text-amber-50 mt-2 p-2 rounded-md self-center ml-2">Logout</button>
      `
      document.querySelector('#btn-logout').addEventListener('click', ()=>{
      })
      
    }
})
