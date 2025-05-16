package handlers

import (
	"net/http"
	"strconv"

	"backend/config"
	"backend/models"

	"github.com/gin-gonic/gin"
)

// GET /api/products
func GetProducts(c *gin.Context) {
	var products []models.Product
	config.DB.Preload("Category").Find(&products)
	c.JSON(http.StatusOK, products)
}

// GET /api/products/:id
func GetProductByID(c *gin.Context) {
	id := c.Param("id")
	var product models.Product
	if err := config.DB.Preload("Category").First(&product, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}
	c.JSON(http.StatusOK, product)
}

// POST /api/products
func CreateProduct(c *gin.Context) {
	var product models.Product
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&product).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	config.DB.Create(&product.Variants)
	config.DB.Create(&product)
	c.JSON(http.StatusCreated, product)
}

// PUT /api/products/:id
func UpdateProduct(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var product models.Product
	if err := config.DB.First(&product, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Save(&product)
	c.JSON(http.StatusOK, product)
}

// DELETE /api/products/:id
func DeleteProduct(c *gin.Context) {
	id := c.Param("id")
	config.DB.Delete(&models.Product{}, id)
	c.JSON(http.StatusOK, gin.H{"message": "Product deleted"})
}
