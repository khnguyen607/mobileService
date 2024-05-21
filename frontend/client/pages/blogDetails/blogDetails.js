document.addEventListener('DOMContentLoaded', async () => {
    await Helper.fetchBackendLink();
    // Khởi tạo trang
    _init();
    _getCategory();
    // Đặt bình luận
    _getComments();
    _sendComment();
})

async function _init() {
    var item = await Helper.fetchData(`blog&action=find&id=${Helper.getParameter("id")}`)
    document.querySelector(".post_title").textContent = capitalizeFirst(item.Name)

    const date = new Date(item.Date);
    document.querySelector(".post_header .meta_date").innerHTML = "<i class='fas fa-calendar-alt'></i>" + `Đăng ngày ${date.getDate()} Th${date.getMonth() + 1}`

    document.querySelector(".blog_thumb img").src = Helper.getLink(item.Img)
    document.querySelector(".post_content").innerHTML = item.Content
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
    document.querySelector(".post_category").textContent = categories
}

async function _getComments() {
    var comments = await Helper.fetchData(`blog&action=getComments&id=${Helper.getParameter("id")}`)
    document.querySelector(".comments_box h3").textContent = "Tìm thấy: " + comments.length + " bình luận"
    var commentsList = document.querySelector(".commentsList")
    var commentsItem = commentsList.querySelector(".commentsItem").cloneNode(true)
    commentsList.innerHTML = ""
    if (comments) {
        comments.forEach(item => {
            var itemClone = commentsItem.cloneNode(true)
            itemClone.setAttribute('data-commentId', item.ID)
            itemClone.querySelector(".comment_meta a").textContent = item.Name
            itemClone.querySelector(".comment_content p").textContent = item.Content
            itemClone.querySelector(".comment_meta span").textContent = formatDate(item.Date)

            itemClone.querySelector(".comment_reply").addEventListener('click', function () {
                itemClone.querySelector("._inputGroup").classList.toggle("d-none");
            });

            itemClone.querySelector("._inputGroup button").addEventListener('click', async () => {
                var Content = itemClone.querySelector("._inputGroup input").value
                var userID = Helper.getCookie('user_id')
                var parentCommentID = item.ID
                var blogID = Helper.getParameter('id')
                addComment(Content, userID, parentCommentID, blogID)
            })

            if (item.parentCommentID) {
                commentsList.querySelector(`.commentsItem[data-commentId='${item.parentCommentID}']`).appendChild(itemClone)
            } else {
                commentsList.appendChild(itemClone)
            }
        });
    }
}

async function _sendComment() {
    document.querySelector('.comments_form form').addEventListener('submit', function (event) {
        event.preventDefault();
        var Content = document.querySelector("#review_comment").value
        var userID = Helper.getCookie('user_id')
        var parentCommentID = null
        var blogID = Helper.getParameter('id')
        addComment(Content, userID, parentCommentID, blogID)
    });
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

async function addComment(Content, userID, parentCommentID, blogID) {
    if (!Helper.getCookie('user_id')) {
        alert('Đăng nhập để có thể bình luận')
        return
    }
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
                alert('Đăng bình luận thành công')
            }
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });
}