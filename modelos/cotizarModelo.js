const db = require('../config/db');

// Función para verificar si ya existe una cotización
const verificarCotizacion = (clienteId, fecha) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM cotizacion WHERE clienteId = ? AND fecha = ?`;
        db.query(sql, [clienteId, fecha], (err, result) => {
            if (err) {
                return reject(err);
            }
            // Devuelve true si hay resultados, lo que indica que ya existe una cotización
            resolve(result.length > 0);
        });
    });
};

// Función para crear una nueva cotización
const crearCotizacion = (nuevaCotizacion) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO cotizacion SET ?`;
        db.query(sql, nuevaCotizacion, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    crearCotizacion,
    verificarCotizacion
};
