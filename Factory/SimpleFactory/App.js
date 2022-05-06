const LenovoLaptop = require("./LenovoLaptop")
const HPLaptop = require("./HPLaptop")


const lenovoLaptop = new LenovoLaptop("E15")
lenovoLaptop.getDetails()

const hpLaptop = new HPLaptop("HP-Envy")
hpLaptop.getDetails()