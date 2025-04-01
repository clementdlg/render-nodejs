require('dotenv').config();
const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
	process.env.PG_DATABASE, // Database name
	process.env.PG_USER, // User
	process.env.PG_PASSWORD, // Password
	{
		host: '', // Host
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
		define: {
			createdAt: 'added',
			updatedAt: 'updated',
		}
	},
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
