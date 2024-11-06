Anh/chị test url thì nên đơi 1 lúc để sever khởi động tầm 20s là hoạt động ổn định bình thường
Đã hoàn thành

Tái tạo và chỉnh sửa hai trang web cụ thể từ trang NashTech Global:
Form "Get in Touch" (Liên hệ).
Trang chủ (HOME) tại https://www.nashtechglobal.com/
Tích hợp form "Get in Touch" với cơ sở dữ liệu MySQL và triển khai ứng dụng lên miền công khai.

Cấu hình form "Get in Touch" để kết nối với cơ sở dữ liệu MySQL.

Trong cơ sở dữ liệu test-software-engineer-intern, tạo bảng có tên get_in_touch_your_name.
Định nghĩa các cột cần thiết để lưu trữ tất cả dữ liệu đầu vào từ form.

Triển khai logic gửi form:
Phát triển logic backend bằng Node.js để xử lý việc gửi form.
Khi form được gửi, dữ liệu cần được xác thực và lưu vào bảng get_in_touch_your_name.
Thực hiện xử lý lỗi để quản lý các vấn đề xảy ra trong quá trình gửi dữ liệu.

Sau khi gửi form, kiểm tra để đảm bảo tất cả dữ liệu được chèn chính xác vào bảng MySQL.
Thực hiện nhiều thử nghiệm với các đầu vào khác nhau để đảm bảo tính ổn định và độ tin cậy.

Triển khai ứng dụng của bạn từ môi trường local lên một dịch vụ lưu trữ web công khai.
Gán tên miền cho ứng dụng đã triển khai để có thể truy cập công khai.

