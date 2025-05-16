package migration

import (
	"backend/config"
	"backend/models"
	"log"
)

func RunMigrations() {
	err := config.DB.AutoMigrate(
		&models.User{},
		&models.Category{},
		&models.Product{},
		&models.ProductVariant{},
	)

	if err != nil {
		log.Fatalf("Database migration failed: %v", err)
	}

	log.Println("Database migration successful")
}
