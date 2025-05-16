package routes

import (
	"backend/handlers"
	"backend/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	public := r.Group("/api/public")
	{
		// Auth
		public.POST("/login", handlers.Login)
		public.POST("/register", handlers.Register)

		// Categories
		public.GET("/categories", handlers.GetCategories)
		public.POST("/categories", handlers.CreateCategory)
		public.PUT("/categories/:id", handlers.UpdateCategory)
		public.DELETE("/categories/:id", handlers.DeleteCategory)

		// Products
		public.GET("/products", handlers.GetProducts)
		public.GET("/products/:id", handlers.GetProductByID)
		public.POST("/products", handlers.CreateProduct)
		public.PUT("/products/:id", handlers.UpdateProduct)
		public.DELETE("/products/:id", handlers.DeleteProduct)

		// ProductVariant
		public.GET("/product-variants", handlers.GetProductVariants)
		public.GET("/product-variants/:id", handlers.GetProductVariantByID)
		public.POST("/product-variants", handlers.CreateProductVariant)
		public.PUT("/product-variants/:id", handlers.UpdateProductVariant)
		public.DELETE("/product-variants/:id", handlers.DeleteProductVariant)
	}

	protected := r.Group("/api/protected")
	protected.Use(middleware.AuthenticationMiddleware())
	{
		// Tambahkan route yang membutuhkan auth di sini
	}
}
