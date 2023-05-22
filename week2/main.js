let readline = require('readline-sync');
let User = require('./user.js');
let info = require('./info.js');

users = [];

while(true) {
    info.printMenu();
    let choice = readline.question("메뉴를 입력하세요: ");
    console.log();
    switch(choice) {
        case '1':
            info.addUser();
            break;
        case '2':
            info.printUsers();
            break;
        case '3':
            info.modifyUser();
            break;
        case '4':
            info.deleteUser();
            break;
        case '5':
            info.deleteAll();
            break;
        case '6':
            console.log("프로그램을 종료합니다.");
            return;
        default:
            console.log("잘못된 선택입니다.");
    }
    console.log();
}