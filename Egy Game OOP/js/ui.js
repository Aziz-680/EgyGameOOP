export class UserInterface{

    activeLink(links, elem){
        for(let i=0; i<links.length; i++){
            links[i].classList.remove('active');
        }
        elem.classList.add('active');
    }

    setLoading(elem){
        const div = document.createElement('div');
        div.innerHTML = `<div class="loading position-fixed w-100 h-100 xy-center m-0">
                            <div class="wrapper position-relative">
                                <div class="red rounded-circle xy-center border border-5 border-start-0 border-bottom-0 border-end-0 border-danger"
                                    style="width: 100px; height: 100px;">
                                </div>
                                <div class="white z-3 position-absolute  rounded-circle border border-5 border-start-0 border-top-0 border-end-0 border-white"
                                    style="width: 95px; height: 95px;"></div>
                            </div>
                            </div>`;
        elem.prepend(div);
        elem.children[0].children[0].style.cssText = '--loading-alpha: 80%;';
    }

    closeNav(elem){
        const nav = document.querySelector('.page .home nav');
        const navToggler = document.querySelector('.page .home nav .navbar-toggler');
        
        if(elem != nav && !nav.contains(elem) && !navToggler.classList.contains('collapsed'))
            navToggler.click();
    }

    arrowShow(value){
        const arrowUp = document.querySelector('.arrow-up');
        arrowUp.style.opacity = Number(value);
    }

    arrowUp(){
        window.scrollTo(0, 0);
    }

    saveCatToLocalStorage(obj){
        localStorage.setItem('categori', JSON.stringify(obj));
    }


}