
const math = {
  round (val, precision) {
    let factor = Math.pow(10, precision);
    let tempNum = val * factor;
    let roundedTempNum = Math.round(tempNum);
    return roundedTempNum / factor;
  }
}

export default math;