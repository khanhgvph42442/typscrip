"use strict";
{
    //! block dành cho myInfor
    const myInfor = {
        name: "Nguyen van a",
        age: 23,
        address: "Bắc Giang",
        job: "Teacher",
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
