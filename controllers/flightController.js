const {Flights} = require("../models/Flight")
const {v4: uuid} = require("uuid")

// get all flight
exports.getFlights = async (req,res)=>{
    try {
        const flight = Flights
        res.status(200).json({
            message: "All flight",
            flight: flight
        })
    } catch (err) {
        res.status(500).json({message: err})
    }
}

// get a single user
exports.getFlight = async (req,res)=>{
    try {
        let id = req.params.id
        const flight = Flights.find((flight)=> flight.id === id)
        res.status(200).json({
            message: "Flight found",
            flight,
        })
    } catch (error) {
        
    }
}

// create new flight
exports.createFlight = async (req,res)=>{
    try {
        const flight = await req.body
        flight.id = uuid()
        Flights.push(flight)
        res.status(201).json({
            message: "Flight created",
            flight,
        })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// update / edit flight
exports.updateFlight = async (req,res)=>{
    try {
        let id = req.params.id
        const flight = Flights.find((flight)=> flight.id === id)
        const {title, time, price, date} = await req.body
        flight.title = title
        flight.time = time
        flight.price = price
        flight.date = date
        res.status(200).json({
            message: "flight updated",
            flight,
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// delete flight
exports.deleteFlight = async (req,res)=>{
    try {
        let id = req.params.id
        const flight = Flights.find((flight)=> flight.id === id)
        const {title, time, price, date} = await req.body
        flight.title = title
        flight.time = time
        flight.price = price
        flight.date = date
        res.status(200).json({
            message: "flight deleted",
            flight,
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
