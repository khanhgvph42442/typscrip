"use strict";
/**
 * ! Khai báo kiểu dữ liệu với ":" cho string, number, blooean, object, array.
 * ! Khai báo với từ khoá "type" cho kiểu dữ liệu.
 */
const myMessage = "Hom nay troi dep qua, rat vui duoc noi chuyen voi ban!";
const myAge = 30;
const isMarried = false;
const product = {
    name: "Iphone 12",
    price: 1000,
    isAvailable: true,
    thumbnail: "https://example.com/iphone12.jpg",
};
const products = [
    {
        name: "Iphone 12",
        price: 1000,
        isAvailable: true,
        thumbnail: "https://example.com/iphone12.jpg",
    },
    {
        name: "Iphone 13",
        price: 1000,
        isAvailable: true,
        thumbnail: "https://example.com/iphone12.jpg",
    },
];
const myStudents = ["Dang", "Nam", "Bach", "Hoa", "Xanh"]; // Khai báo kiểu array type
const myStudents2 = ["Dang", "Nam", "Bach", "Hoa", "Xanh"]; // Khai báo kiểu generic type
const myCV = {
    fullName: "Nguyen Minh Hoang",
    age: 30,
    birthDay: "1992-11-11",
    address: "Ha Noi",
    phone: "0987654321",
    email: "hoangnm62@fpt.edu.vn",
    skills: ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB"],
    education: {
        university: "FPT University",
        major: "Software Engineering",
        graduatedYear: 2015,
        GPA: 3.2,
    },
    projects: [
        {
            id: 1,
            name: "E-commerce website",
            description: "Build an e-commerce website with ReactJS and NodeJS",
            technologies: ["ReactJS", "NodeJS", "MongoDB"],
            time: "2021-2022",
        },
        {
            id: 2,
            name: "Music player website",
            description: "Build an e-commerce website with ReactJS and NodeJS",
            technologies: ["ReactJS", "NodeJS", "MongoDB"],
            time: "2021-2022",
        },
    ],
};
