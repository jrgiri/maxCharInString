let maxCharInString = (str) => {
    let obj = {};
    let maxNum = 0;
    let maxChar = 0;

    for (let str_obj of str) {
       (!obj[str_obj]) ? obj[str_obj] = 1 : obj[str_obj]++
    }
    console.log(obj);

    for (const obj_value in obj) {
        console.log(obj[obj_value])
        if(obj[obj_value] >= maxNum) {
            maxNum = obj[obj_value];
            maxChar = obj_value
        }
    }
    console.log(`${maxChar} appears ${maxNum} no of times.`)
}
maxCharInString("hellllooo")