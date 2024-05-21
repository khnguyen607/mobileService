document.addEventListener('DOMContentLoaded', async () => {
    await Helper.fetchBackendLink();
    _init();
})

async function _init() {
    var items = await Helper.fetchData("blog&action=getAllsFK")
    filterBy(items)
    document.querySelector(".widget_search form").addEventListener('submit', (evt) => { evt.preventDefault(); filterBy(items) })
}

async function showDatas(items) {
    var dataList = document.querySelector(".dataList")
    var dataItem = dataList.querySelector(".dataItem").cloneNode(true)
    dataList.innerHTML = ""
    await items.forEach(item => {
        let cloneData = dataItem.cloneNode(true)

        cloneData.querySelector(".blog-title a").textContent = item.Name
        cloneData.querySelectorAll("a._hrefBlogDetail").forEach(i => i.href = `./?page=blogDetails&id=${item.ID}`)
        cloneData.querySelector(".blog-image img").src = Helper.getLink(item.Img)
        cloneData.querySelector(".blog-content p").textContent = item.Subtitle
        cloneData.querySelector("span.post-title").textContent = item.user
        cloneData.querySelector("._editBtn").href = `./?page=blogAdd&edit=${item.ID}`
        cloneData.querySelector("._deleteBtn").addEventListener('click', async () => {
            await Helper.fetchData(`blog&action=delete&id=${item.ID}`)
            alert('Đã xóa')
            location.reload()
        })

        const date = new Date(item.Date);
        cloneData.querySelector(".post-date").innerHTML = `<i class="far fa-clock"></i> ${date.getDate()} Th${date.getMonth() + 1}, ${date.getFullYear()}`
        dataList.appendChild(cloneData)
    });
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
            return true
        })
        let chunkItem = chunkArray(items, 6)
        new Pagination(chunkItem);
        showDatas(chunkItem[1])
    }

    // Lọc theo tên
    function byName(name) {
        if (!Helper.getParameter('q')) return true
        var nameValue = Helper.getParameter('q')
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
        prev.classList.add("prev", "page-item")
        prev.innerHTML = ` <a class="page-link" href="javascript:void(0)" tabindex="-1"><i class="feather-chevron-left mr-2"></i>Trước</a>`
        var next = document.createElement("li")
        next.classList.add("next", "page-item")
        next.innerHTML = `<a class="page-link" href="javascript:void(0)">Sau<i class="feather-chevron-right ml-2"></i></a>`

        var paginations = document.querySelector(".pagination ul")
        paginations.innerHTML = ""
        paginations.appendChild(prev)
        for (let i = 1; i < Pagination.items.length; i++) {
            var pagination = document.createElement("li")
            pagination.setAttribute("data-pageIndex", i)
            pagination.innerHTML = `<a class="page-link" href="javascript:void(0)">${i}</a>`
            paginations.appendChild(pagination)
        }
        paginations.appendChild(next)
    }
}

