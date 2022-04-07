const ModeloUsuario = require("../models/modeloUsuario");
const ModeloPersona = require("../models/modeloPersona");
const { validationResult } = require('express-validator');
exports.inicio = (req, res) => {

    res.send("Esto es el Inicio deL Módulo de Usuarios");

}  
exports.listar = async (req, res) =>{

    const lista = await ModeloUsuario.findAll({

        where:{
            estado:'activo',
        }

    });
    if(!lista){
        res.send("No existen Usuarios en la base de datos");
    }
    else{
        res.json(lista);
    }

}
exports.guardar = async (req, res) =>{
    const validacion = validationResult(req);
    if(!validacion.isEmpty()){
        console.log(validacion.array());
        res.json(validacion.array());
    }
    else{
        const {identidad, nombre, apellido, telefono, direccion, nombreUsuario, correo, contrasena} = req.body;
                
        if(!identidad || !nombre || !apellido || !telefono || !nombreUsuario || !correo || !contrasena ){

            msj("Debe enviar los datos obligatorios", 200, [], res);

        }
        else{

            await ModeloPersona.create({ //Esto es para almacenar los datos que se reciben
                identidad: identidad,
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                direccion: direccion
            })

        }
        var Persona = await ModeloPersona.findOne({

            where:{
                identidad: identidad
            }

        });
        const idPersona = Persona.idPersona
        var buscarUsuario = await ModeloUsuario.findOne({
            where:{
                nombreUsuario: nombreUsuario
            }
        });
        var buscarCorreo = await ModeloUsuario.findOne({
            where:{
                correo: correo
            }
        });
        if(buscarUsuario || buscarCorreo){
            console.log("El Usuario y/o el Correo ya se encuentran registrados");
            msj("El Usuario y/o el Correo ya se encuentran registrados", 200, [], res);
        }
        else{

            await ModeloUsuario.create({
                nombreUsuario,
                correo,
                contrasena,
                idPersona
            })
            .then((data) => {
                //console.log(data.contrasena);
                msj("Registro Almacenado!", 200, [], res);            
            }).catch((err) => {
                console.log(err);
                msj("Error al guardar los datos", 200, [], res);
            });
        }
    }
    
}
exports.modificarContrasena = async (req, res) =>{

    const validacion = validationResult(req);
    console.log(req.body);
    if(!validacion.isEmpty()){
        console.log(validacion.array());
        res.json(validacion.array())
    }
    else{
        const {correo, pin, contrasena} = req.body;
        if(!pin || !contrasena){
            msj("Debe enviar los Datos Obligatorios", 200, [], res);
        }
        else{

            var buscarUsuario = await ModeloUsuario.findOne({
                where:{
                    correo: correo,
                    estado: 'activo'
                }
            });
            if(!buscarUsuario){
                msj("El Usuario no existe o no se encuentra activo", 200, [], res);
            }
            else if(buscarUsuario.pin != pin){
                msj("El Pin ingresado no es válido", 200, [], res);
            }
            else{

                buscarUsuario.contrasena = contrasena;
                await buscarUsuario.save()
                .then((data) => {
                    console.log(data);
                    msj("Registro Actualizado Correctamente", 200, [], res);
                }).catch((err) => {
                    console.log(err);
                   msj("Error al Actualizar", 200, [], res);
                });

            }            
            console.log(buscarUsuario);
        }
    }    

}