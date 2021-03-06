const describe = (desc, fn) => {
  console.log(desc);
  fn();
}

const it = (msg, fn) => describe(' ' + msg, fn)

const expect = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('%c pass', 'color: green')
      return true;
    } else {
      console.log('%c fail', 'color: red')
      return false;
    };
  },
  toInclude: (assertion) => {
    if(exp.includes(assertion)) {
      console.log('%c pass', 'color: green')
      return true;
    } else {
      console.log('%c fail', 'color: red')
      return false;
    };
  }
});