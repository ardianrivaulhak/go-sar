package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model

	ID          uint             `json:"id"`
	Name        string           `json:"name" gorm:"not null"`
	Description string           `json:"description"`
	Price       float64          `json:"price" gorm:"not null"`
	Unit        string           `json:"unit" gorm:"not null"` // kg, pcs, ikat, dll
	Stock       int              `json:"stock" gorm:"default:0"`
	ImageURL    string           `json:"image_url"`
	CategoryID  uint             `json:"category_id"`
	Category    Category         `json:"category" gorm:"foreignKey:CategoryID"`
	Variants    []ProductVariant `json:"variants,omitempty"`
}
