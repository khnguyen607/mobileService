-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th5 22, 2024 lúc 05:34 AM
-- Phiên bản máy phục vụ: 8.0.30
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `mobileservice`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blogs`
--

CREATE TABLE `blogs` (
  `ID` int NOT NULL,
  `Name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Subtitle` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Img` varchar(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `blogs`
--

INSERT INTO `blogs` (`ID`, `Name`, `Subtitle`, `Content`, `Date`, `Img`, `userID`) VALUES
(1, '[REVIEW] Dịch vụ sửa chữa điện thoại Truesmart dưới góc nhìn khách hàng', '', '<p>Truesmart là địa chỉ được nhiều người lựa chọn khi có nhu cầu sửa chữa điện thoại, máy tính. Nhưng đây liệu có phải cơ sở uy tín, cung cấp dịch vụ chất lượng? Cùng đón xem bài review dịch vụ sửa chữa điện thoại Truesmart dưới đây là tìm ra câu trả lời cho mình nhé!</p><p>Tâm lý chung của hầu hết khách hàng thường tìm đến những địa chỉ lớn, lâu năm để sửa điện thoại với mong muốn đảm bảo xử lý tốt vấn đề mà \"dế yêu\" mình đang gặp phải. Đó cũng là một trong những lý do lớn mà người ta thường tìm tới Truesmart. Đơn vị có tới hơn 13 cơ sở nằm trên toàn bộ 8 quận lớn Hà Nội trong gần 10 năm hình thành và phát triển.</p><p>Với chiến lược marketing mạnh mẽ, các thông tin mang tính cập nhật cho khách hàng từ sản phẩm, tin tức, cẩm nang hướng dẫn sử dụng và xử lý vấn đề,....đều được Truesmart chú trọng. Nếu theo dõi Fanpage của Truesmart bạn sẽ thấy, đơn vị sửa chữa điện thoại này có tới hơn 100k lượt like và follow từ khách hàng. Bao gồm nhiều bài post chia sẻ bổ ích tới khách hàng.</p><p>Đặc biệt hơn, Truesmart sở hữu đội ngũ nhân viên cởi mở, nhiệt tình. Bộ phận kỹ thuật giàu kinh nghiệm, giúp khắc phục nhanh, hiệu quả các vấn đề mà khách hàng gặp phải.</p><p>Về giá cả, xét về mặt bằng chung thị trường thì giá dịch vụ vẫn tương đối hợp lý, đặc biệt là khi xem xét chất lượng dịch vụ hay các sản phẩm được cung ứng tại&nbsp;Truesmart.</p><p><strong>Khách hàng nói gì về Truesmart?</strong></p><p>Hầu như ai cũng có tâm lý chung lo lắng, băn khoăn khi lựa chọn một địa chỉ sửa chữa điện thoại mới, giống như anh T.A ở quận Đống Đa có chia sẻ: \"Mình dùng Ip 7s pin bị chai, nhanh hết, bán đi thì tiếc, thay thì sợ không tốt.&nbsp;</p><p>Mình cũng khá lăn tăn, thấy Truesmart có vẻ uy tín, mình đánh liều mang qua sửa. Hiện cũng dùng được nửa năm rồi, pin xài khá tốt, bền, dùng chơi pug cực trâu.&nbsp;</p><p>Thỉnh thoảng mình cũng mang qua Truesmart khi máy có vấn đề\". Thậm chí có nhiều khách hàng, sửa điện thoại tại Truesmart nhiều tới mức than thở dí dỏm: Ui sửa điện thoại nhiều lên Fan cứng rồi!</p><p>Mặc dù được lòng khách hàng về dịch vụ sửa chữa tốt, nhưng đôi khi vẫn khiến nhiều khách hàng khó chịu bởi thời gian sửa khá lâu. Anh T.A.Đ quận Nam Từ Liêm có chia sẻ: \"Điện thoại của mình bị hỏng main, mang qua Truesmart Xã Đàn sửa, được cái cửa hàng nhân viên tử tế, tư vấn tận tình. Tuy nhiên có một điểm trừ là hẹn sửa hơi lâu\".&nbsp;</p><p>Bên cạnh đó, một số khách hàng cũng comment tại bài feedback trên Fanpage Truesmart khen về dịch vụ của cơ sở sửa chữa này. Không chỉ cung cấp dịch vụ sửa chữa, nhiều khách hàng tìm đến Truesmart bởi chính sách trả góp hấp dẫn. Anh N.V.T đã mua góp Iphone 8 Plus tại Truesmart cho biết:\"Mình có mua máy Ip 8 Plus trả góp bên này, lãi suất thấp, máy lấy nhanh, hồ sơ đơn giản.&nbsp;</p><p>Khách chỉ cần trả trước từ 30% thôi, không biết gì về thủ tục các thứ được nhân viên tư vấn tận tình. Khá yên tâm khi mua hàng tại Truesmart.\"</p><p>Mỗi người dùng sẽ có cái nhìn và đánh giá khác nhau về sản phẩm, dịch vụ. Vì vậy, trước khi lựa chọn một đơn vị cung cấp dịch vụ sửa chữa điện thoại, bạn nên cân nhắc thông tin từ nhiều nguồn như: website, fanpage, phản hồi của khách hàng và tư vấn của nhân viên,&nbsp; giá cả dịch vụ,... để đưa ra quyết định tốt nhất.</p><p>Bên cạnh đó, nếu bạn đang có ý định sửa chữa điện thoại tại Truesmart, có thể tham khảo hệ thống 13 cửa hàng Truesmart để đến địa điểm gần nhất nhé!</p>', '2024-05-15 13:47:07', 'blogs/Ảnh chụp màn hình 2024-05-21 225513.png', 3),
(2, 'Khách hàng nói gì khi mua điện thoại tại Di Động Việt?', '', '<p>Dạo gần đây, Di Động Việt là cái tên được nhắc đến khá nhiều trên mạng xã hội hay các bài viết của KOLs về việc nghênh chiến các \"ông lớn\" trong ngành bán lẻ công nghệ, với thông điệp \"Rẻ hơn các loại rẻ\".</p><p>Theo chia từ đại diện Di Động Việt, sức bán của hệ thống cũng tăng cao sau hơn một tháng tham gia cuộc chiến giá rẻ này. Vậy vì sao ngày càng có nhiều khách hàng quan tâm và lựa chọn Di Động Việt?</p><p>\"<strong>Nơi nào bán rẻ hơn thì mình mua thôi\"</strong></p><p>Cầm trên tay chiếc điện thoại mới, anh Thiện (ngụ tại quận 10, TPHCM) cho biết, sau một thời gian tìm hiểu và so sánh giá ở vài nơi khác nhau thì anh thấy giá bên Di Động Việt có giá cạnh tranh hơn. \"Nơi nào rẻ hơn thì mình mua thôi\", anh Thiện nhấn mạnh.</p><p>Đồng quan điểm, chị Thảo (ngụ tại quận 3, TPHCM) chia sẻ, trong bối cảnh kinh tế khó khăn, thay vì chọn chi nhiều tiền vào những chuỗi to, chuỗi lớn thì chị quyết định chọn Di Động Việt để tiết kiệm thêm chi phí.</p><p>\"Tôi mua chiếc Galaxy Z Flip4 tại Di Động Việt với giá 14,59 triệu đồng, so giá với nơi khác thì tôi đã tiết kiệm được hơn 2 triệu đồng. Đây là một số tiền khá lớn đối với tôi và tôi có thể mua được nhiều thứ khác với số tiền này\", chị nói.</p><p>Hay với Minh Phương (sinh viên trường đại học Hutech) chọn Di Động Việt vì giá bán rẻ là ưu tiên hàng đầu. \"Có thể tiết kiệm được thêm bao nhiêu thì hay bấy nhiêu, vì mình còn là sinh viên, chưa làm ra nhiều tiền và phải dựa vào trợ cấp của gia đình\", Phương chia sẻ thêm.</p><p><strong>Lợi thế của Di Động Việt</strong></p><p>Dù lựa chọn Di Động Việt vì giá bán, nhưng sau khi mua chiếc iPhone 12 tại đây, thứ khiến Minh Phương hài lòng nhất lại là các dịch vụ bảo hành, hậu mãi đi kèm.</p><p>\"Ngoài giá tốt, Di Động Việt còn đem đến cho mình những quyền lợi có thể nói là khá vượt trội, như dùng thử 7 ngày miễn phí, bảo hành rơi vỡ và 1 đổi 1 trong vòng 33 ngày hay bảo hành pin trọn đời. Đây là những thứ mình ưng ý nhất, giúp đánh tan nỗi lo khi mua iPhone cũ\", Minh Phương nói.</p><p>Hay với chị Hà (ngụ tại quận 1, TPHCM), điều khiến chị hài lòng và trở thành khách \"ruột\" của Di Động Việt lại là những bạn nhân viên cửa hàng.</p><p>\"Điều khiến tôi hài lòng nhất là các bạn nhân viên tại cửa hàng 77 Trần Quang Khải, từ bảo vệ cho tới nhân viên tư vấn, bán hàng. Các bạn rất dễ thương và tận tình khi tư vấn cho tôi. Có những lần tôi ghé mua cái sim hay dán cường lực nhưng các bạn nhân viên vẫn rất nhiệt tình đón tiếp tôi\", chị Hà chia sẻ.</p><p>Một khách hàng \"ruột\" khác của Di Động Việt, ông Dũng cũng cho biết, các sản phẩm công nghệ của gia đình đa số đều mua tại đây.</p><p>\"Mỗi khi có nhu cầu, tôi lại ghé Di Động Việt. Đơn giản vì nơi đây khiến tôi cảm thấy mình nhận được nhiều giá trị hơn so với nơi khác, từ cách nhân viên phục vụ cho đến những chính sách bảo hành, như đổi trả miễn phí, dán cường lực bảo hành trọn đời, thay bao nhiêu lần cũng được…\", ông Dũng cười và nói.</p><p>Dù vậy, vẫn có số ít cho rằng, họ mua hàng tại Di Động Việt chỉ vì giá rẻ hơn các nơi khác, còn lại, các quyền lợi cũng như nhau, vì đều là các đại lý ủy quyền, từ quy trình mua hàng, phục vụ cho đến những chính sách bảo hành, hậu mãi đều chính hãng.</p><p>Để có thể cảm nhận được rõ nhất những giá trị mà Di Động Việt đem đến, có thực sự vượt trội, khách hàng có thể trực tiếp ghé cửa hàng gần nhất của hệ thống này để trải nghiệm và mua sắm.</p>', '2024-05-15 13:47:07', 'blogs/Ảnh chụp màn hình 2024-05-21 230945.png', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `ID` int NOT NULL,
  `Name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`ID`, `Name`) VALUES
(1, 'Dịch vụ mua bán điện thoại'),
(2, 'Sửa chữa điện thoại'),
(3, 'Bảo hành điện thoại'),
(4, 'Thay màn hình điện thoại');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `ID` int NOT NULL,
  `Content` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `parentCommentID` int DEFAULT NULL,
  `userID` int NOT NULL,
  `blogID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comments`
--

INSERT INTO `comments` (`ID`, `Content`, `Date`, `parentCommentID`, `userID`, `blogID`) VALUES
(22, 'Bình luận 2', '2024-05-15 08:41:25', NULL, 2, 1),
(24, 'Bình luận 2.1', '2024-05-15 08:42:07', 22, 2, 1),
(25, 'Bình luận 2.2', '2024-05-15 08:42:07', 22, 2, 1),
(27, 'Bình luận 2.3', '2024-05-15 16:28:19', 22, 2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `syn_blogs_categories`
--

CREATE TABLE `syn_blogs_categories` (
  `ID` int NOT NULL,
  `categoryID` int NOT NULL,
  `blogID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `syn_blogs_categories`
--

INSERT INTO `syn_blogs_categories` (`ID`, `categoryID`, `blogID`) VALUES
(38, 2, 1),
(39, 3, 1),
(44, 2, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `ID` int NOT NULL,
  `Name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Username` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Role` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`ID`, `Name`, `Username`, `Password`, `Role`) VALUES
(2, 'Khôi Nguyên', 'khnguyen', '$2y$10$E1JaM6tznEkiXpxbWcaiauAlkExQ.obsX5uJsEpQZ5BbwJokpLscu', 0),
(3, 'ADMIN', 'admin', '$2y$10$nPB9P7cirz8qEaKdEwfiV.kc7euWZxe9nBfua1q65iZ7tFzF.WvJi', 2),
(4, 'AUTHOR', 'author', '$2y$10$sH6ZUv/2L4O8t1U4.KpliebVheW0xMQWlTkNKks7eeQZlw8bM3trW', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `blogs_users` (`userID`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `comments_users` (`userID`),
  ADD KEY `comments_blogs` (`blogID`),
  ADD KEY `comments_comments` (`parentCommentID`);

--
-- Chỉ mục cho bảng `syn_blogs_categories`
--
ALTER TABLE `syn_blogs_categories`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `syn_blogs_categories_categories` (`categoryID`),
  ADD KEY `syn_blogs_categories_blogs` (`blogID`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `blogs`
--
ALTER TABLE `blogs`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT cho bảng `syn_blogs_categories`
--
ALTER TABLE `syn_blogs_categories`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_users` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_blogs` FOREIGN KEY (`blogID`) REFERENCES `blogs` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `comments_comments` FOREIGN KEY (`parentCommentID`) REFERENCES `comments` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `comments_users` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `syn_blogs_categories`
--
ALTER TABLE `syn_blogs_categories`
  ADD CONSTRAINT `syn_blogs_categories_blogs` FOREIGN KEY (`blogID`) REFERENCES `blogs` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `syn_blogs_categories_categories` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
