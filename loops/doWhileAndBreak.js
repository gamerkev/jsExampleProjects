let hellos = 7;
let bye = true;
do {
    if (bye){
        console.log('bye!');
        break;
    }
    hellos--;
    console.log(`Hello, you have ${hellos} hello(s) left.`);
} while(hellos>0);