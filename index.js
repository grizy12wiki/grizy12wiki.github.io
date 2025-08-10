document.addEventListener( 'click', mouseEventsListener);


//to check if list elements have been clicked
function mouseEventsListener ( event ) {


    switch( event.target.id ) {

        case 'A1':
            load_html_into("main","articles/main.html");
            break;
        case 'A2':
            load_html_into("main","articles/slip.html");
            break;
        case 'A3':
            load_html_into("main","articles/homosexuality.html");
            break;
        case 'A4':
            load_html_into("main","articles/pogo.html");
            break
        case 'A5':
            load_html_into("main","articles/chat.html");
            break;
        case 'A6':
            load_html_into("main","articles/leaks.html");
            break;
        default:
            break;

    }

}

function load_html_into(id,path) {
    document.getElementById(id).innerHTML='<object type="text/html" data="' + path + '" ></object>';
}

function main(){
    load_html_into("header","header.html");
    load_html_into("main","articles/main.html");

}
