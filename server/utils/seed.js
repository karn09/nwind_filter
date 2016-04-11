var faker = require('faker');
var Product = require('../api/products/product.model');
var Employee = require('../api/employees/employee.model');
var Promise = require('bluebird');
var db = require('../db');

var numEmployees = 500;
var numProducts = 500;
// console.log(Employee);

function randEmployee() {
  return new Employee({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  });
}

function randProduct() {
  return new Product({
    name: faker.commerce.productName()
  });
}

function generateEmployees() {
  var employees = [];
  for (var i = 0; i < numEmployees; i++) {
    employees.push(randEmployee());
  }
  return employees;
}

function generateProducts() {
  var products = [];
  for (var i = 0; i < numProducts; i++) {
    products.push(randProduct());
  }
  return products;
}

function seed() {
  var products = generateProducts();
  var employees = generateEmployees();

  return Promise.map(employees, function(employee) {
    return employee.save();
  })
  .then(function() {
    return Promise.map(products, function(product) {
      return product.save();
    });
  });

}

db.drop = db.db.dropDatabase.bind(db.db);

db.on('open', function() {
  db.drop()
    .then(function() {
      return seed();
    })
    .then(function() {
      console.log('done seeding');
    }, function(err) {
      console.error(err);
    })
    .then(function() {
      process.exit();
    });
});
