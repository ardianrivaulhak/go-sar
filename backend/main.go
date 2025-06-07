package main

import (
	"backend/config"
	"backend/migration"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	config.ConnectDB()
	migration.RunMigrations()
	r := gin.Default()

	routes.SetupRoutes(r)

	r.Run(":9090")
}
