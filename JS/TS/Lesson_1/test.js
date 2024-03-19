"use strict";
{
    //! block dành cho myInfor
    const myInfor = {
        name: "Nguyễn Minh Hoàng",
        age: 32,
        address: "Bắc Giang",
        job: "Teacher",
        gender: "lgbt",
        zalo: "https://zalo.me/g/lthxnv127",
        major: "Javascript, Python, Ruby",
    };
    const student1 = {
        name: "Dang",
        age: 20,
        address: "Hà Nội",
        job: "Student",
        gender: "male",
        zalo: "123456789",
        major: "Frontend",
    };
    console.log(myInfor);
}
//! block này dành riêng cho myTeachers
{
    const myTeachers = [
        "Hoà",
        "Huy",
        "Tú",
        "Hoàng",
        "Thắng",
        "Đạt",
        "Ngọc",
    ];
    myTeachers.forEach((teacher, index) => {
        console.log(`[${index + 1}] ${teacher}`);
    });
}
// myTeachers.toUpperCase();
// const myTeachers =0
{
    const myString = "Hom nay troi dep qua!";
}
// myString.map((item) => {});
