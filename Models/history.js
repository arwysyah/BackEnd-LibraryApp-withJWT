const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database

module.exports = {
    postHistory: body => {
        return new Promise((resolve, reject) => {
          db.query("INSERT INTO history SET ?", [body], (err, response) => {
            if (!err) {
              resolve(response);
            } else {
              reject(err);
            }
          });
        });
      }
    }