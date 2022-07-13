const Employee = require('../models/Employee')

// Show the list of Employee

const index = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: "An Error Occured !"   
        })
    })
}

// for single Employee

const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: "An Error Occured !"   
        })
    }) 
}

// Added new employee

const store = (req, res, next) => {
    let employee = new Employee({
        name : req.body.name,
        designation: req.body.designation,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age,
    })
    employee.save()
    .then(response => {
        res.json({
            message: "Employee Added Successfully !"
        })
    })
    .catch(error =>{
        res.json({
            message: "An Error Occured !"   
        })
    }) 
}

// Function for updating employee by its empID

const update = (req, res, next) => {
    let employeeID = req.body.employeeID

    let updatedData = {
        name : req.body.name,
        designation: req.body.designation,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age
    }
    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() => {
        res.json({
            message: "Employee Updated Successfully !"
        })
    })
    .catch(error =>{
        res.json({
            message: "An Error Occured !"   
        })
    }) 
}

// Function for delete an Employee

const destroy = (req, res, next) =>{
    let  employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        res.json({
            message: "Employee Deleted Successfully !"
        })
    })
    .catch(error =>{
        res.json({
            message: "An Error Occured !"   
        })
    }) 
}

module.exports = {
    index, show, store, update, destroy
}