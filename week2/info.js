let readline = require('readline-sync');
let User = require('./user.js');

function printMenu() {
    console.log("1. 회원정보 추가");
    console.log("2. 회원정보 조회");
    console.log("3. 회원정보 수정");
    console.log("4. 회원정보 삭제");
    console.log("5. 회원정보 전체 삭제");
    console.log("6. 종료")
    console.log();
}

function addUser() {
    let name = readline.question("이름(취소하려면 q 또는 Q) : ");
    if(name == 'q' || name == 'Q') {
        return;
    }
    let department = readline.question("부서: ");
    let phone = readline.question("전화번호: ");
    phone.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3');
    let age = readline.question("나이: ");
    let address = readline.question("주소: ");
    let user = new User(name, department, phone, age, address);
    users.push(user);
}

function printAll() {
    for(let i=0; i<users.length; i++) {
        process.stdout.write((i+1) + ". ");
        users[i].printAll();
    }
    console.log();
    readline.question("계속하려면 아무 키나 누르세요...");
}

function printByName() {
    for(let i=0; i<users.length; i++) {
        process.stdout.write((i+1) + ". ");
        users[i].printName();
    }
    console.log();
    readline.question("계속하려면 아무 키나 누르세요...");
}

function printUsers() {
    while(true) {
        let key = readline.questionInt("조회 방법을 선택하세요 ( 1: 전체 조회, 2: 이름 조회, 3: 취소) : ");
        if(key == 1) {
            printAll();
            break;
        } else if (key == 2) {
            printByName();
            break;
        } else if (key == 3) {
            break;
        } else {
            console.log("잘못된 선택입니다.");
        }
    }
}

function findUser(name) {
    for(let i=0; i<users.length; i++) {
        if(users[i].name == name) {
            return i;
        }
    }
    return -1;
}

function modifyUser() {
    let name = readline.question("수정하려는 회원의 이름을 입력하세요(취소하려면 q 또는 Q) : ");
    if(name == 'q' || name == 'Q') {
        return;
    }
    let index = findUser(name);
    if(index == -1) {
        console.log("찾는 이름이 없습니다.");
    } else {
        let department = readline.question("부서: ");
        let phone = readline.question("전화번호: ");
        let age = readline.question("나이: ");
        let address = readline.question("주소: ");
        users[index].department = department;
        users[index].phone = phone;
        users[index].age = age;
        users[index].address = address;
    }
}

function deleteUser() {
    let name = readline.question("삭제하려는 회원의 이름을 입력하세요(취소하려면 q 또는 Q): ");
    if(name == 'q' || name == 'Q') {
        return;
    }
    let index = findUser(name);
    if(index == -1) {
        console.log("찾는 이름이 없습니다.");
    } else {
        users.splice(index, 1);
    }
}

function deleteAll() {
    let key = readline.question("정말로 모든 회원 정보를 삭제하시겠습니까? (y/n) : ");
    while(true) {
        if(key == 'y' || key == 'Y') {
            users = [];
            console.log("모든 회원 정보를 삭제했습니다.");
            break;
        } else if(key == 'n' || key == 'N') {
            break;
        } else {
            key = readline.question("y 또는 n을 입력하세요. : ");
        }
    }
    
}

module.exports = {
    printMenu,
    addUser,
    printAll,
    printByName,
    printUsers,
    findUser,
    modifyUser,
    deleteUser,
    deleteAll
}