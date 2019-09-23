
function sth (){
    const logout =  document.getElementById("LogoutButton");
    const retrieve = localStorage.getItem('userData');
    console.log(retrieve);
    if (logout)
    {
        console.log("XD");
        logout.addEventListener('click', (e) =>{
            e.preventDefault();
            console.log("jestem");
        });
    }
}
sth();