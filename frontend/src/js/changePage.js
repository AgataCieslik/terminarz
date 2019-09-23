export const changePage=page=>{
    document.location.href=`${page}.html`;
}

function findFile()
{
    const path = window.location.pathname;

    for(let i = path.length - 1; i > 0; i--)
    {
        if(path[i] ==='/')
            return path.slice(i, path.length );
    }
    return path;
}
window.onload = () =>{
    const file = findFile();
    if(file !== "/index.html" && file !=="/")
    {
        const retrieveData = localStorage.getItem('userData');
        retrieveData == undefined ? changePage("index") : null;
    }
}