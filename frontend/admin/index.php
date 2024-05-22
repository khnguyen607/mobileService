<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from preschool.dreamguystech.com/template/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 24 Sep 2023 09:12:37 GMT -->

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <title>Quản trị</title>

    <link rel="shortcut icon" href="assets/img/favicon.png">

    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&amp;display=swap" rel="stylesheet">

    <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">

    <link rel="stylesheet" href="assets/plugins/feather/feather.css">

    <link rel="stylesheet" href="assets/plugins/icons/flags/flags.css">

    <link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css">
    <link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css">

    <link rel="stylesheet" href="assets/css/style.css">
    
    <script src="shared/scripts/app.js"></script>
    <script src="shared/scripts/init.js"></script>
</head>

<body>

    <div class="main-wrapper">

        <div class="header">

            <div class="header-left">
                <a href="index.html" class="logo">
                    <img src="assets/img/logo.png" alt="Logo">
                </a>
                <a href="index.html" class="logo logo-small">
                    <img src="assets/img/logo-small.png" alt="Logo" width="30" height="30">
                </a>
            </div>

            <div class="menu-toggle">
                <a href="javascript:void(0);" id="toggle_btn">
                    <i class="fas fa-bars"></i>
                </a>
            </div>

            <div class="top-nav-search">
                <form>
                    <input type="text" value="blogs" name="page" hidden>
                    <input type="text" class="form-control" placeholder="Tìm bài viết..." name="q">
                    <button class="btn" type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>


            <a class="mobile_btn" id="mobile_btn">
                <i class="fas fa-bars"></i>
            </a>


            <ul class="nav user-menu">

                <li class="nav-item dropdown has-arrow new-user-menus">
                    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span class="user-img">
                            <div class="user-text">
                                <h6>Quản trị viên</h6>
                                <p class="text-muted mb-0">Admin</p>
                            </div>
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="user-header">
                            <div class="user-text">
                                <h6>Quản trị viên</h6>
                                <p class="text-muted mb-0">Admin</p>
                            </div>
                        </div>
                        <a class="dropdown-item" href="login.html">Đăng xuất</a>
                    </div>
                </li>

            </ul>

        </div>


        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">
                            <span>Main Menu</span>
                        </li>
                        <li><a href="./"><i class="feather-grid"></i> <span> Danh mục</span></a></li>
                        <li><a href="./?page=blogs"><i class="fa fa-newspaper"></i> <span> Quản lý bài đăng</span></a></li>
                        <li><a href="./?page=users"><i class="fas fa-users"></i> <span> Người dùng</span></a></li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="page-wrapper">
            <!-- main body start -->
            <?php
            $page = isset($_GET['page']) ? $_GET['page'] : 'home';
            $page_path = "pages/$page/$page";
            if (file_exists("$page_path.html")) {
                include_once("$page_path.html");
            } else {
                header("Location: shared/components/404.html");
            }
            echo "<script src='pages/$page/$page.js'></script>";
            ?>
            <!-- main body end -->

            <footer>
                <p>Copyright © 2024 Nhóm 10.</p>
            </footer>
        </div>



    </div>


    <script src="assets/js/jquery-3.6.0.min.js"></script>

    <script src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="assets/js/feather.min.js"></script>

    <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <script src="assets/plugins/apexchart/apexcharts.min.js"></script>
    <script src="assets/plugins/apexchart/chart-data.js"></script>
    <script src="assets/js/ckeditor.js"></script>

    <script src="assets/js/script.js"></script>
</body>

<!-- Mirrored from preschool.dreamguystech.com/template/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 24 Sep 2023 09:13:14 GMT -->

</html>