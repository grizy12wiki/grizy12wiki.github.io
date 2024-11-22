function load_html_into(id,path) {
    document.getElementById(id).innerHTML='<object type="text/html" data="' + path + '" ></object>';
}

function main(){
    load_html_into("liste","articles.html");
    load_html_into("header","header.html");
    load_html_into("principal","proprietes/slip.html");
    console.log("uwu test");
}
