const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
	process.env.PG_DATABASE, // Database name
	process.env.PG_USER, // User
	process.env.PG_PASSWORD, // Password
	{
		host: process.env.PG_HOST, // Host
		port: process.env.PG_PORT, // port
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
