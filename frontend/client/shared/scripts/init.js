_setEffect();
document.addEventListener('DOMContentLoaded', async () => {
    await _getLayouts();
    _authenticationLayout()
})

async function _getLayouts() {
    try {
        // Get components
        var components = document.createElement("div")
        components.innerHTML = await Helper.fetchHTML("./shared/components/layout.html");
        document.querySelector("header").innerHTML = components.querySelector("header").innerHTML;
        document.querySelector("footer.footer_widgets").innerHTML = components.querySelector("footer.footer_widgets").innerHTML;


        var page = Helper.getParameter('page')
        if (page && page != "home") {
            document.querySelector(`.main_menu a[href='./?page=${page}']`).classList.add('active')
        } else {
            document.querySelector(`.main_menu a[href='./']`).classList.add('active')
        }
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

async function _authenticationLayout() {
    var checkUser = await Helper.fetchData('user&action=find&id=' + Helper.getCookie('user_id'))

    if (checkUser) {
        document.querySelector(".top_right .header_account ul").innerHTML = `
            <li class="top_links"><a href="#"><i class="fa fa-user"></i> Xin chào, ${checkUser.Name} <i
                class="ion-chevron-down"></i></a>
                <ul class="dropdown_links">
                    <li><a href="javascript:void(0);">Đăng xuất</a></li>
                </ul>
            </li>
        `

        document.querySelector(".top_right .header_account ul .dropdown_links a").addEventListener('click', async (evt) => {
            evt.preventDefault();
            await Helper.fetchData('user&action=logout')
            location.reload();
        })
    } else {
        document.querySelector(".top_right .header_account ul").innerHTML = `
            <li class="top_links"><a href="./?page=login"><i class="fa fa-user"></i> Đăng nhập</a></li>
        `
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


