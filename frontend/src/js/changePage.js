export const changePage=page=>{
    document.location.href=`${page}.html`;
}

window.onload = () =>{
    const path = window.location.pathname;
    if(path !== "/index.html" && path !=="/")
    {
        const retrieveData = localStorage.getItem('userData');
        retrieveData == undefined ? changePage("index") : null;
    }
}