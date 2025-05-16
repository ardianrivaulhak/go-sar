package models

import "gorm.io/gorm"

type ProductVariant struct {
	gorm.Model

	ID        uint    `json:"id"`
	ProductID uint    `json:"product_id"`
	Name      string  `json:"name"`                          // Contoh: "500gr", "1kg"
	Price     float64 `json:"price"`                         // Harga untuk varian ini
	Product   Product `json:"-" gorm:"foreignKey:ProductID"` // Relasi ke produk
}
