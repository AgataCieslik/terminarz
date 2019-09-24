import { changePage } from './changePage.js';
function logout (){
    const logout =  document.getElementById("LogoutButton");
    if (logout)
    {
        logout.addEventListener('click', (e) =>{
            e.preventDefault();
            localStorage.removeItem("userData");
            changePage("index");
        });
    }
}
logout();