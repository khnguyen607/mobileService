document.addEventListener('DOMContentLoaded', async () => {
    await Helper.fetchBackendLink();
        // await Helper.fetchBackendLink();
        // Đổ danh sách sản phẩm
        _init();
    _showCategories();
})

async function _init() {
    var items = await Helper.fetchData("blog&action=getAllsFK")
    if (Helper.getParameter('q')) document.querySelector(".widget_search input").value = Helper.getParameter('q')
    filterBy(items)
    document.querySelector(".widget_search form").addEventListener('submit', (evt) => { evt.preventDefault(); filterBy(items) })
}

async function showDatas(items) {
    var dataList = document.querySelector(".dataList")
    var dataItem = dataList.querySelector(".dataItem").cloneNode(true)
    dataList.innerHTML = ""
    await items.forEach(item => {
        let cloneData = dataItem.cloneNode(true)

        cloneData.querySelector(".post_title a").textContent = item.Name
        cloneData.querySelectorAll("a._hrefBlogDetail").forEach(i => i.href = `./?page=blogDetails&id=${item.ID}`)
        cloneData.querySelector("img").src = Helper.getLink(item.Img)
        cloneData.querySelector("p.post_desc").textContent = item.Subtitle
        cloneData.querySelector("span.author a").textContent = item.user

        const date = new Date(item.Date);
        cloneData.querySelector(".meta_date a").textContent = `${date.getDate()} Th${date.getMonth() + 1}, ${date.getFullYear()}`
        dataList.appendChild(cloneData)
    });
}

async function _showCategories() {
    var items = await Helper.fetchData("category")
    var dataList = document.querySelector(".widget_categories ul")
    dataList.innerHTML = ""
    items.forEach(item => {
        let dataItem = document.createElement("li")
        dataItem.innerHTML = `<a href="./?page=blogs&category=${item.Name}">${item.Name}</a>`
        dataList.appendChild(dataItem)
    })
}

function chunkArray(array, chunkSize) {
    let result = [];
    let j = 1;
    for (let i = 0; i < array.length; i += chunkSize) {
        let chunk = array.slice(i, i + chunkSize);
        result[j] = chunk
        j++
    }
    return result;
}

async function filterBy(items) {
    runMain(items)
    async function runMain(items) {
        var items = items.filter(item => {
            if (!byName(item.Name)) return false
            if (!byCategories(item.categoriesValue)) return false
            return true
        })
        let chunkItem = chunkArray(items, 4)
        new Pagination(chunkItem);
        showDatas(chunkItem[1])
    }

    // Lọc theo tên
    function byName(name) {
        var nameValue = document.querySelector(".widget_search input").value
        if (name.toLowerCase().includes(nameValue.toLowerCase())) {
            return true
        } else {
            return false
        }
    }

    function byCategories(name) {
        if (!Helper.getParameter("category")) return true
        if (!name) return false
        var nameValue = Helper.getParameter("category")
        if (name.toLowerCase().includes(nameValue.toLowerCase())) {
            return true
        } else {
            return false
        }
    }

}

class Pagination {
    static curentPage = 1
    static items = null
    constructor(items) {
        Pagination.items = items
        this.displayPagination()
        this.eventListeners()
        Pagination.displayPage()
    }

    static async displayPage() {
        document.querySelectorAll(".pagination li[data-pageIndex]").forEach(item => {
            item.classList.remove("current")
        });
        document.querySelector(`.pagination li[data-pageIndex="${Pagination.curentPage}"]`).classList.add("current")
        showDatas(Pagination.items[Pagination.curentPage])

    }

    eventListeners() {
        document.querySelectorAll(".pagination li[data-pageIndex]").forEach(item => {
            item.addEventListener("click", () => {
                Pagination.curentPage = parseInt(item.getAttribute("data-pageIndex"));
                Pagination.displayPage();
            });
        });
        document.querySelector(".pagination .prev").addEventListener("click", () => {
            if (Pagination.curentPage > 1) {
                Pagination.curentPage--;
                Pagination.displayPage();
            }
        })
        document.querySelector(".pagination .next").addEventListener("click", () => {
            if (Pagination.curentPage < document.querySelectorAll(".pagination li[data-pageIndex]").length) {
                Pagination.curentPage++;
                Pagination.displayPage();
            }
        })
    }

    displayPagination() {
        var prev = document.createElement("li")
        prev.classList.add("prev")
        prev.innerHTML = `<a href="javascript:void(0);"><i class="fa fa-angle-left"></i></a>`
        var next = document.createElement("li")
        next.classList.add("next")
        next.innerHTML = `<a href="javascript:void(0);"><i class="fa fa-angle-right"></i></a>`

        var paginations = document.querySelector(".pagination ul")
        paginations.innerHTML = ""
        paginations.appendChild(prev)
        for (let i = 1; i < Pagination.items.length; i++) {
            var pagination = document.createElement("li")
            pagination.setAttribute("data-pageIndex", i)
            pagination.innerHTML = `<a href="javascript:void(0);">${i}</a>`
            paginations.appendChild(pagination)
        }
        paginations.appendChild(next)
    }
}

