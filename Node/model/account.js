const { sequelize, Sequelize } = require('./initialise')
const { Role } = require('./user')

const Account = sequelize.define('accounts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contact: {
        type: Sequelize.STRING,
        allowNull: true
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    modify: {
        type: Sequelize.STRING
    },
    create: {
        type: Sequelize.STRING
    }
}, {
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
    });
Account.belongsTo(Role, { as: 'role' })
sequelize.sync().then(res => {
    console.log("account successfully synced")
}).catch(err => {
    console.log(err)
})

module.exports = {
    Account
}