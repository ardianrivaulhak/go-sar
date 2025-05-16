package handlers

import (
	"net/http"
	"strconv"

	"backend/config"
	"backend/models"

	"github.com/gin-gonic/gin"
)

// GET /api/product-variants
func GetProductVariants(c *gin.Context) {
	var variants []models.ProductVariant
	if err := config.DB.Find(&variants).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, variants)
}

// GET /api/product-variants/:id
func GetProductVariantByID(c *gin.Context) {
	id := c.Param("id")
	var variant models.ProductVariant
	if err := config.DB.First(&variant, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product variant not found"})
		return
	}
	c.JSON(http.StatusOK, variant)
}

// POST /api/product-variants
func CreateProductVariant(c *gin.Context) {
	var variant models.ProductVariant
	if err := c.ShouldBindJSON(&variant); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := config.DB.Create(&variant).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, variant)
}

// PUT /api/product-variants/:id
func UpdateProductVariant(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var variant models.ProductVariant
	if err := config.DB.First(&variant, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product variant not found"})
		return
	}

	if err := c.ShouldBindJSON(&variant); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Save(&variant).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, variant)
}

// DELETE /api/product-variants/:id
func DeleteProductVariant(c *gin.Context) {
	id := c.Param("id")
	if err := config.DB.Delete(&models.ProductVariant{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Product variant deleted"})
}
