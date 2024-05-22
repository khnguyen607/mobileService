document.addEventListener('DOMContentLoaded', async () => {
    await Helper.fetchBackendLink();
    _addCategories();
    _showCategories()
})

async function _addCategories() {
    const addCategoryButton = document.getElementById('addCategoryButton');
    const categoryInput = document.getElementById('categoryInput');

    addCategoryButton.addEventListener('click', () => {
        const categoryName = categoryInput.value;
        if (categoryName) {
            var formData = new FormData();
            formData.append('Name', categoryName);

            fetch(Helper.backendLink + '?controller=category&action=insert', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        location.reload();
                        alert('Thêm thành công');
                    } else {
                        alert('Thêm thất bại');
                    }
                })
                .catch(error => {
                    // Handle errors
                    console.error('There was a problem with the fetch operation:', error);
                    alert("Loi khi them");
                });
        } else {
            alert('Vui nhập tên danh mục');
        }
    });
}

async function _showCategories() {
    var items = await Helper.fetchData('category')
    var dataList = document.querySelector(".dataList")
    var dataItem = dataList.querySelector(".dataItem").cloneNode(true)
    dataList.innerHTML = ""
    await items.forEach(item => {
        let cloneData = dataItem.cloneNode(true)

        cloneData.querySelector("._categoryName").textContent = item.Name
        cloneData.querySelector("._delBtnCategory").addEventListener('click', async () => {
            await Helper.fetchData('category&action=delete&id=' + item.ID)
            alert('Đã xóa')
            location.reload()
        })

        dataList.appendChild(cloneData)
    });
}