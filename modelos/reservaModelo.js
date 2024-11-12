const db = require('../config/db');

exports.obtenerReservasPorCliente = (clienteId, callback) => {
    const query = `SELECT * FROM cotizacion WHERE clienteId = ?`;
    
    db.query(query, [clienteId], (err, resultados) => {
        if (err) {
            return callback(err);
        }
        callback(null, resultados);
    });
};

exports.obtenerReservaPorId = (cotizacionId, callback) => {
    const query = `SELECT * FROM cotizacion WHERE cotizacionId = ?`;
    
    db.query(query, [cotizacionId], (err, resultados) => {
        if (err) {
            return callback(err);
        }
        callback(null, resultados[0]); // Retornar solo la primera reserva
    });
};

exports.actualizarReserva = (cotizacionId, datos, callback) => {
    const query = `UPDATE cotizacion SET personas = ?, evento = ?, fecha = ?, hora = ? WHERE cotizacionId = ?`;
    
    db.query(query, [datos.personas, datos.evento, datos.fecha, datos.hora, cotizacionId], (err, resultados) => {
        if (err) {
            return callback(err);
        }
        callback(null, resultados);
    });
};

exports.eliminarReserva = (cotizacionId, callback) => {
    const query = `DELETE FROM cotizacion WHERE cotizacionId = ?`;
    
    db.query(query, [cotizacionId], (err, resultados) => {
        if (err) {
            return callback(err);
        }
        callback(null, resultados);
    });
};