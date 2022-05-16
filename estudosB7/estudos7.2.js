// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
// };

// customer.lastname = {
//     daMae: 'Silva',
//     doPai: 'deAssis'
// };

// customer.lastname.daMae = 'da Silva'
// console.log(customer);

const newThing = (obj, newKey, newVal) => {
  const realObj = {};
  realObj[obj] = { [newKey]: newVal };
  return realObj;
};

console.log(newThing("carro", "motor", "v12"));

// const realObj = {}
// const carro = {};
// realObj.carro = {'motor': 'v12'};
// console.log(realObj);
/////////////////////////////////////////////////
// Objetos part - 2

const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

const showTheThings = (obj) => {
  for (const index in obj) {
    console.log(`${Object.keys(obj)}, Nível ${obj[Object.keys(obj)[index]]}`);
  }
};

console.log(showTheThings(student1));
