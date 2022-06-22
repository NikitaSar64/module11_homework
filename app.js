function getPercents(percent, number){
    let result = number * percent / 100;
    if(isNaN(result)) return "invalid func arguments";
    if (result <= 0) return result * -1;
    return result;
}

module.exports = getPercents;