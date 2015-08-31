window.onload = acessibiliza;

function acessibiliza() {

    //mapeamento de divs
    var p = document.getElementsByClassName('acessivel');
    for (i = 0; i < p.length; i++){
        p[i].setAttribute('aria-label', p[i].innerHTML);
        p[i].setAttribute('tabindex', '1');
    }

    //mapeamento de menus
    var menus = document.getElementsByClassName('menu-acessivel');
    for (i = 0; i < menus.length; i++){
        menus[i].setAttribute('aria-label', 'Ítens listados em um menu acessível');
        menus[i].setAttribute('tabindex', '1');
        menus[i].setAttribute('role', 'menubar');
        //menus[i].setAttribute('role', 'navigation');
    }

    var item_menu = $(".menu-acessivel li a");
    for (i = 0; i < item_menu.length; i++){
        item_menu[i].setAttribute('aria-label', item_menu[i].innerHTML);
        item_menu[i].setAttribute('tabindex', '1');
        item_menu[i].setAttribute('role', 'menuitem');
    }

    //mapeamento de botões
    var button = document.getElementsByClassName('botao-acessivel');
    for (i = 0; i < button.length; i++){
        button[i].setAttribute('aria-label', button[i].innerHTML);
        button[i].setAttribute('tabindex', '1');
        button[i].setAttribute('role', 'button');
    }

    //mapeamento de textos
    var text = document.getElementsByClassName('texto-acessivel');
    for (i = 0; i < text.length; i++){
        text[i].setAttribute('tabindex', '1');
        text[i].setAttribute('role', 'article');
        text[i].setAttribute('aria-label', text[i].innerHTML);
    }

    //mapeamento de links
    var link = document.getElementsByClassName('link-acessivel');
    for (i = 0; i < link.length; i++){
        link[i].setAttribute('aria-label', link[i].innerHTML);
        link[i].setAttribute('tabindex', '1');
        link[i].setAttribute('role', 'article');
    }

    //mapeamento de item de menu
    var item_menu = $(".menu-acessivel a");
    for (i = 0; i < item_menu.length; i++){
        item_menu[i].setAttribute('aria-label', item_menu[i].innerHTML);
        item_menu[i].setAttribute('tabindex', '1');
        item_menu[i].setAttribute('role', 'menuitem');
    }

    //Inputs

    //Forms

    //Checkbox

    //Imagens

    //Table



}
