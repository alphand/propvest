const pmt = (r, nper, pv, fv, type) => {
  let pmt = r / (Math.pow(1 + r, nper) -1) * -(pv * Math.pow( 1 + r, nper) + fv);
  
  if (type === 1) pmt /= (1 + r);
  return pmt;
};

const fv = (r, nper, c, pv, type) => {
  if (type === 1) c = c * (1 + r);
  let fv = -(c * (Math.pow(1 + r, nper) - 1) / r + pv * Math.pow(1 + r, nper));
  return fv;
};

const ipmt = (r, per, nper, pv, futv, type) => {
  let ipmt = fv(r, per - 1, pmt(r, nper, pv, futv, type), pv, type) * r;
  if (type === 1) ipmt /= (1 + r);
  return ipmt;
};

const ppmt = (r, per, nper, pv, fv, type) => {
  return pmt(r, nper, pv, fv, type) - ipmt(r, per, nper, pv, fv, type)
}

const fin = {
  pmt,
  fv,
  ipmt,
  ppmt
}

export default fin;