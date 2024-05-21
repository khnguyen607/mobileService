document.addEventListener('DOMContentLoaded', () => {
    addUserSubmit()
})

function addUserSubmit() {
    document.querySelector('#addUserForm').addEventListener('submit', async (evt) => {
        evt.preventDefault()
        var formData = new FormData(document.querySelector('#addUserForm'))
        // Send form data using fetch
        fetch(Helper.backendLink + '?controller=user&action=insert', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data == true) {
                    location.href = "./?page=users"
                    alert('Thêm người dùng thành công')
                } else {
                    alert('Tên đăng nhập đã tồn tại')
                }
            })
            .catch(error => {
                // Handle errors
                console.error('There was a problem with the fetch operation:', error);
                alert("Lỗi khi thêm")
            });
    })
}