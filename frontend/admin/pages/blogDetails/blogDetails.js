document.addEventListener('DOMContentLoaded', async () => {
    await Helper.fetchBackendLink();
    // Khởi tạo trang
    _init();
    _getCategory();
    // Đặt bình luận
    _getComments();
})

async function _init() {
    var item = await Helper.fetchData(`blog&action=find&id=${Helper.getParameter("id")}`)
    document.querySelector(".blog-title").textContent = capitalizeFirst(item.Name)

    const date = new Date(item.Date);
    document.querySelector(".meta_date").innerHTML = `<i class="feather-clock"></i>` + `${date.getDate()} Th${date.getMonth() + 1}, ${date.getFullYear()}`

    document.querySelector(".blog-image img").src = Helper.getLink(item.Img)
    document.querySelector(".blog-content").innerHTML = item.Content
}

async function _getCategory() {
    var items = await Helper.fetchData(`blog&action=getCategories&id=${Helper.getParameter("id")}`)
    var categories = "";
    items.forEach(item => {
        categories += (item.Name + ', ')
    })
    if (categories) {
        categories = categories.slice(0, -2)
    }
    document.querySelector(".post_category").innerHTML = `<i class="feather-grid"></i>`+categories
}

async function _getComments() {
    var comments = await Helper.fetchData(`blog&action=getComments&id=${Helper.getParameter("id")}`)
    document.querySelector(".blog-comments h4").textContent = "Tìm thấy: " + comments.length + " bình luận"
    var commentsList = document.querySelector(".commentsList")
    var commentsItem = commentsList.querySelector(".commentsItem").cloneNode(true)
    commentsList.innerHTML = ""
    if (comments) {
        comments.forEach(item => {
            var itemClone = commentsItem.cloneNode(true)
            itemClone.setAttribute('data-commentId', item.ID)
            itemClone.querySelector(".blog-author-name").innerHTML =`${item.Name} <span class="blog-date">
            <i class="feather-clock me-1"></i>${formatDate(item.Date)}</span>`
            itemClone.querySelector("p").textContent = item.Content

            itemClone.querySelector(".comment-btn").addEventListener('click', async function () {
                await Helper.fetchData("comment&action=delete&id=" + item.ID)
                alert('Xóa bình luận thành công')
                location.reload()
            });

            if (item.parentCommentID) {
                commentsList.querySelector(`.commentsItem[data-commentId='${item.parentCommentID}']`).appendChild(itemClone)
            } else {
                commentsList.appendChild(itemClone)
            }
        });
    }
}

function capitalizeFirst(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatDate(inputDateStr) {
    var dateObj = new Date(inputDateStr);

    var day = dateObj.getDate();
    var month = dateObj.getMonth() + 1; // Tháng bắt đầu từ 0
    var year = dateObj.getFullYear();

    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();

    var period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    var formattedDate = 'Đã đăng: ' + day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ' ' + period;

    return formattedDate;
}

async function delComment(Content, userID, parentCommentID, blogID) {
    const formData = new FormData();
    formData.append("Content", Content)
    formData.append("userID", userID)
    formData.append("parentCommentID", parentCommentID)
    formData.append("blogID", blogID)
    // Send form data using fetch
    fetch(Helper.backendLink + '?controller=comment&action=insert', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data == true) {
                location.reload()
                alert('Xóa bình luận thành công')
            }
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });
}