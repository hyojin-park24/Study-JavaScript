// for문
for(let i=0; i < 10; i++){
    if(i === 3){
        console.log('It is 3');
        continue;
    }

    if(i === 5){
        console.log('5 Stop the loop.');
        break;
    }
    console.log('Number ' + i);
}

// for/in 문
const user = {
    name: 'Edun',
    province: '부산광역시',
    city: '남구'
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

// while 문
let i = 0;

while(i < 10){
    console.log('Numer ' + i);
    i++;
}

// do/while 문
let i = 0;

do {
    console.log('Number ' + i);
    i++;
}
while(i < 10);

//배열을 Loop로 이용해서 컨트롤 해주기
const locations = ['서울', '부산', '경기도', '대구'];

for(let i = 0; i < locations.length; i++){
    console.log(locations[i]);
}

locations.forEach(function (location, index, array){
    console.log(`${index} : ${location}`);
    console.log(array);
});

// console.log(locations);