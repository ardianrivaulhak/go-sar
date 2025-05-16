package models

import "gorm.io/gorm"

type Category struct {
	gorm.Model

	ID       uint      `json:"id"`
	Name     string    `json:"name" gorm:"unique;not null"`
	Products []Product `json:"products,omitempty"`
}
