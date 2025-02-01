let i = 0;
for (i = 0 ; i < 10 ; i++) {
    console.log(i);
}

let colors = ['red','blue','green','yellow','orange'];
for (let i = 0 ; i < colors.length ; i++) {
    console.log(colors[i]);
}

let names = ['กิ๊บ',"ก้อย","ปอยฝ้าย","นาง","ส้ม","ต้มยำกุ้ง"];
for (let i = 0; i < names.length ; i++){
    if (names[i].length > 6){
        console.log("สวัสดี คุณชื่อ คุณ "+names[i]);
    } else {
        console.log("Hello, "+names[i]);
    }
}