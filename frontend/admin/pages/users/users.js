document.addEventListener('DOMContentLoaded', async () => {
    await Helper.fetchBackendLink();
    _init();
})

async function _init() {
    var items = await Helper.fetchData("user")
    // filterBy(items)
    showDatas(items)
}

async function showDatas(items) {
    var dataList = document.querySelector(".dataList")
    var dataItem = dataList.querySelector(".dataItem").cloneNode(true)
    dataList.innerHTML = ""
    await items.forEach(item => {
        if (item.Role == 2) return
        let cloneData = dataItem.cloneNode(true)

        cloneData.querySelector("._userName").textContent = item.Name
        cloneData.querySelector("._userUsername").textContent = item.Username

        var role = {
            0: "Khách",
            1: "Tác giả",
            2: "Admin"
        }
        cloneData.querySelector("._userRole").textContent = role[item.Role]
        cloneData.querySelector(".actions a").addEventListener('click', async ()=>{
            await Helper.fetchData('user&action=delete&id='+item.ID)
            alert('Đã xóa')
            location.reload()
        })

        dataList.appendChild(cloneData)
    });
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
