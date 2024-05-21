_setEffect();
document.addEventListener('DOMContentLoaded', async () => {
    await _getLayouts();
    _authenticationLayout()
})

async function _getLayouts() {
    try {
        var page = Helper.getParameter('page')
        if (page && page != "home") {
            document.querySelector(`#sidebar-menu a[href='./?page=${page}']`).parentNode.classList.add('active')
        } else{
            document.querySelector(`#sidebar-menu a[href='./']`).parentNode.classList.add('active')
        }
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

async function _authenticationLayout() {
    var check = await Helper.getCookie('user_id')
    if (!check || check == "0") {
        location.href = "./login.html"
    }
}

async function _setEffect() {
    var style = document.createElement('style')
    style.innerHTML = `        
    body {
        opacity: 0;
        /* Apply transition effect to opacity property */
        transition: opacity 0.5s ease-in-out;
    }
    body.show {
        opacity: 1;
    }
    `
    document.head.appendChild(style)

    setTimeout(function () {
        var body = document.querySelector("body");
        body.classList.add("show");
    }, 100);
}


