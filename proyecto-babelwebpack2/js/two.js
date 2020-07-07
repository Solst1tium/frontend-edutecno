var functTwo = () => {
    try {
        var arrayTest = { "name":"John", "age":30, "car":null};
        let arrayResult = JSON.stringify(arrayTest);
        return arrayResult;
      }
    catch(e) {
        console.error(e.name + ': ' + e.message)
        return e;
    }
}

export default functTwo