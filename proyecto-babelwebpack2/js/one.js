var functOne = () => {
    var arrTest = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];
    let arrResult = arrTest.map(x => x * 4).filter(x => x >= 8);
    return arrResult;
}

export default functOne