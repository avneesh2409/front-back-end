const { sequelize, Sequelize } = require('./initialise')

const Role = sequelize.define('role', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: Sequelize.ENUM,
        unique: true,
        values: ['admin', 'advertiser', 'publisher']
    }
});

Role.sync().then(res => { console.log("role successfully synced") }).catch(err => { console.log(err) })
module.exports = {
    Role
}
