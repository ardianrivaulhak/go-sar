package main

import (
	"backend/config"
	"backend/middleware"
	"backend/migration"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	config.ConnectDB()
	migration.RunMigrations()

	r := gin.Default()
	r.Use(middleware.CORSMiddleware())
	routes.SetupRoutes(r)

	r.Run(":9091")
}
