import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto mt-16 w-[90%]">
        <div className="flex justify-center border-b-2">
          <div className="flex-grow p-4 text-xs">
            <h3 className="text-lg">Thông tin hỗ trợ</h3>
            <p>Hotline: 1900-6035</p>
            <p>(1000 đ/phút, 8-21h kể cả T7, CN)</p>
            <p>Các câu hỏi thường gặp</p>
            <p>Gửi yêu cầu hỗ trợ</p>
            <p>Hướng dẫn đặt hàng</p>
            <p>Phương thức vận chuyển</p>
            <p>Chính sách đổi trả</p>
            <p>Hướng dẫn trả góp</p>
            <p>Chính sách hàng nhập khẩu</p>
            <p>Hỗ trợ khách hàng: hotro@tiki.vn</p>
            <p>Báo lỗi bảo mật: security@tiki.vn</p>
          </div>

          <div className="flex-grow p-4 text-xs">
            <h3 className="text-lg">Giới thiệu chung</h3>
            <p>Tuyển dụng</p>
            <p>Chính sách bảo mật thanh toán</p>
            <p>Chính sách bảo mật thông tin cá nhân</p>
            <p>Chính sách giải quyết khiếu nại</p>
            <p>Điều khoản sử dụng</p>
            <p>Bán hàng doanh nghiệp</p>
            <p>Điều kiện vận chuyển</p>
          </div>

          <div className="flex-grow p-4 text-xs">
            <h3 className="text-lg">Hợp tác và liên kết</h3>
            <h1 className="text-lg">Chứng nhận bởi</h1>
            <p>
              <img src="./../public/Rectangle.png" alt=""></img>
              <img src="./../public/Group.png" alt=""></img>
            </p>
          </div>


          <div className="flex-grow p-4 text-xs">
            <h3 className="text-lg">Phương thức thanh toán</h3>
            <p className="grid grid-cols-5">
               <img src="./../public/Frame.png" alt="Thanh toán 1"></img>
              <img src="./../public/Frame1.png" alt="Thanh toán 2"></img>
              <img src="./../public/Frame2.png" alt="Thanh toán 3"></img>
              <img src="./../public/Frame3.png" alt="Thanh toán 4"></img>
              <img src="./../public/Frame4.png" alt="Thanh toán 5"></img>
              <img src="./../public/Frame5.png" alt="Thanh toán 6"></img>
            </p>
          </div>

          <div className="flex-grow p-4 text-xs w-40">
            <h3 className="text-lg">Đối tác</h3>
              <p className="flex">
                <img className="ml-2" src="./../public/r/Frame.png" alt="Đối tác 1"></img>
                <img className="ml-2" src="./../public/r/Frame1.png" alt="Đối tác 2"></img>
                <img className="ml-2" src="./../public/r/Frame.png" alt="Đối tác 3"></img>
              </p>
              <p className="text-lg">Tải ứng dụng</p>
              <div className="flex">
                <img className="ml-2" src="./../public/r/Rectangle.png" alt="Ứng dụng 1"></img>
                <div className="ml-2">
                  <img src="./../public/r/Rectangle1.png" alt="Ứng dụng 2"></img>
                  <img className="mt-2" src="./../public/r/Rectangle2.png" alt="Ứng dụng 3"></img>
                </div>
              </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
export default Footer