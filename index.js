const express = require("express");// memanggil library express js
const bodyParser = require("body-parser");// memanggil library body-parser
const cors = require("cors");// memanggil library cors
const { response } = require("express");

const app = express();// mengimplementasikan express
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//soal nomer 1
app.post("/kubus", (req,res)=>{
    let sisi = Number(req.body.sisi)

    let luas = 6 * (sisi * sisi)
    let volume = sisi * sisi * sisi

    let response = {
        sisi : sisi,
        luas : luas,
        volume : volume

    }
    
    res.json(response)
})

app.post("/balok", (req,res)=>{
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let luas = 2 * (panjang * tinggi) + 2 * (panjang * lebar) + 2 * (lebar * tinggi)
    let volume = panjang * lebar * tinggi

    let response = {
        panjang : panjang,
        lebar : lebar,
        tinggi : tinggi,
        luas : luas,
        volume : volume

    }
    
    res.json(response)
})

app.post("/prisma_segiempat", (req,res)=>{
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let luas_permukaan = 2 * (panjang * tinggi) + 2 * (panjang * lebar) + 2 * (lebar * tinggi)
    let volume = panjang * lebar * tinggi

    let response = {
        panjang : panjang,
        lebar : lebar,
        tinggi : tinggi,
        luas_permukaan : luas_permukaan,
        volume : volume

    }
    
    res.json(response)
})

app.post("/prisma_segitiga", (req,res)=>{
    let LuasAlas = Number(req.body.LuasAlas)
    let KelilingAlas = Number(req.body.KelilingAlas)
    let tinggi = Number(req.body.tinggi)

    let luas = 2 * LuasAlas + KelilingAlas * tinggi
    let volume = LuasAlas * tinggi

    let response = {
        LuasAlas : LuasAlas,
        KelilingAlas : KelilingAlas,
        tinggi : tinggi,
        luas : luas,
        volume : volume

    }
    
    res.json(response)
})

//soal nomer 2
app.get("/convert/:celcius/:suhu", (req,res) => {
    
    let celcius = req.params.celcius
    let suhu = req.params.suhu

    let reamur = suhu * 0.8
    let fahrenheit = suhu * 1.8 + 32
    let kelvin = suhu + 273

    let response = {
        celcius : suhu,
        Result : {
            reamur : reamur,
            fahrenheit : fahrenheit,
            kelvin : kelvin
        }
    }

    res.json(response)

})

app.get("/convert/:reamur/:suhu", (req,res) => {
    
    let reamur = req.params.reamur
    let suhu = req.params.suhu

    let celcius = 5/4 * suhu 
    let fahrenheit = 9/4 * suhu  + 32 
    let kelvin = 5/4 * suhu + 273

    let response = {
        reamur : suhu,
        Result : {
            celcius : celcius,
            fahrenheit : fahrenheit,
            kelvin : kelvin
        }
    }

    res.json(response)

})

app.get("/convert/:kelvin/:suhu", (req,res) => {
    
    let kelvin = req.params.kelvin
    let suhu = req.params.suhu

    let celcius = suhu - 273
    let fahrenheit = 9/5 * (suhu - 273) + 32
    let reamur = 4/5 * (suhu - 273)

    let response = {
        kelvin : suhu,
        Result : {
            celcius : celcius,
            fahrenheit : fahrenheit,
            reamur : reamur
        }
    }

    res.json(response)

})

app.get("/convert/:fahrenheit/:suhu", (req,res) => {
    
    let fahrenheit = req.params.fahrenheit
    let suhu = req.params.suhu

    let celcius = 5/9 * (suhu - 32)
    let kelvin = 4/9 * (suhu - 32)
    let reamur = 5/9 * (suhu - 32) + 273

    let response = {
        fahrenheit : suhu,
        Result : {
            celcius : celcius,
            kelvin : kelvin,
            reamur : reamur
        }
    }

    res.json(response)

})

//soal nomer 3
app.post("/decimal", (req,res) => {

    let decimal = Number(req.body.decimal)

    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    let hex = decimal.toString(16)

    let response = {
        decimal : decimal,
        Result : {
            biner : biner,
            octal : octal,
            hex : hex
        }
    }
    res.json(response)
})

app.post("/biner", (req,res) =>{

    let biner = Number(req.body.biner)

    let decimal = parseInt(biner,2)
    let octal = parseInt(biner, 2).toString(8)
    let hex = parseInt(biner, 2).toString(16)

    let response = {
        Biner : biner,
        Result : {
            Decimal : decimal,
            Octal : octal,
            Hex : hex
        }
    }
    res.json(response)
})

app.post("/octal", (req,res) =>{

    let octal = Number(req.body.octal)

    let decimal = parseInt(octal,8)
    let binary = parseInt(octal, 8).toString(2)
    let hex = parseInt(octal, 8).toString(16)

    let response = {
        Octal : octal,
        Result : {
            Decimal : decimal,
            Binary : binary,
            Hex : hex
        }
    }
    res.json(response)
})

app.post("/hex", (req,res) => {

    let hex = Number(req.body.hex)

    let decimal = parseInt(hex,16)
    let binary = parseInt(hex, 16).toString(2)
    let octal = parseInt(hex, 16).toString(8)

    let response = {
        Hexadecimal : hex,
        Result : {
            Decimal : decimal,
            Octal : octal,
            Binary : binary
        }
    }
    res.json(response)
})

//soal nomer 4
app.post("/bmi", (req,res)=>{
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)

    let bmi = berat / (tinggi * tinggi)
    let status 
    if (bmi<18.5) {
        status="Kekurangan Berat Badan"
    }
    else if (bmi<=24.9 && bmi>=18.5) {
        status="Normal(ideal)"
    }
    else if (bmi<=29.9 && bmi>=25.0) {
        status="Kelebihan Berat Badan"
    }
    else{
        status="kegemukan(Obesitas)"
    }

    let response = {
        tinggi : tinggi,
        berat : berat,
        bmi : bmi,
        status : status
    }
    
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
