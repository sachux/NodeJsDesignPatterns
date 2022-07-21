const obj = {
    name: "Abdul Asees",
    age: 32,
    city: "Mumbai",
    country: "IN"
};
  
  const makeReactive = (obj, observer) => {
    return new Proxy(obj, {
      set(target, key, value) {
        observer({
          [key]: value
        });
        return (target[key] = value);
      }
    });
  }
  
  const reactive = makeReactive(obj, res => console.log("Updating: " + JSON.stringify(res)));
  reactive.color = "Green";
  reactive.age = 33;