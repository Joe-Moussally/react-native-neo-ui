import { Avatar } from "@joe111/neo-ui/Avatar";
import { Box } from "@joe111/neo-ui/Box";
import { Button } from "@joe111/neo-ui/Button";
import { Chip } from "@joe111/neo-ui/Chip";
import { Rating } from "@joe111/neo-ui/Rating";
import { Typography } from "@joe111/neo-ui/Typography";
import { Screen } from "@joe111/neo-ui/navigation";
import { useTheme } from "@joe111/neo-ui/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
];

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b5b0c2ad?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    comment:
      "Amazing quality and super comfortable! Perfect for my daily runs.",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 4,
    comment: "Great shoes, exactly as advertised. Fast shipping too!",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    comment: "Love the design and the color options. Highly recommend!",
    date: "2 weeks ago",
  },
];

export default function ProductShowcaseExample() {
  const { theme } = useTheme();
  const [selectedSize, setSelectedSize] = useState("9");
  const [selectedColor, setSelectedColor] = useState("Navy");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["7", "8", "9", "10", "11", "12"];
  const colors = ["Navy", "Black", "White", "Red"];

  const renderReview = (review: (typeof REVIEWS)[0]) => (
    <Box key={review.id} variant="soft" style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Avatar size="sm" src={review.avatar} alt={review.name} />
        <View style={styles.reviewInfo}>
          <Typography variant="body" style={{ fontWeight: "600" }}>
            {review.name}
          </Typography>
          <View style={styles.reviewMeta}>
            <Rating value={review.rating} size={14} readonly />
            <Typography variant="caption" color={theme.colors.textSecondary}>
              {review.date}
            </Typography>
          </View>
        </View>
      </View>
      <Typography variant="body" style={styles.reviewComment}>
        {review.comment}
      </Typography>
    </Box>
  );

  return (
    <Screen
      title="Product Showcase"
      options={{
        headerBackTitle: "Examples",
      }}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Product Images */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: PRODUCT_IMAGES[0] }}
            style={styles.mainImage}
            resizeMode="cover"
          />
          <View style={styles.imageGallery}>
            {PRODUCT_IMAGES.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.thumbnailImage}
                resizeMode="cover"
              />
            ))}
          </View>
        </View>

        {/* Product Info */}
        <Box variant="soft" style={styles.productInfo}>
          <View style={styles.productHeader}>
            <Typography variant="h1" style={{ fontWeight: "bold" }}>
              Nike Air Max 270
            </Typography>
            <View style={styles.priceContainer}>
              <Typography
                variant="h2"
                color={theme.colors.primary}
                style={{ fontWeight: "bold" }}
              >
                $129.99
              </Typography>
              <Typography
                variant="body"
                color={theme.colors.textSecondary}
                style={styles.originalPrice}
              >
                $159.99
              </Typography>
            </View>
          </View>

          <View style={styles.ratingContainer}>
            <Rating value={4.5} size={16} readonly />
            <Typography variant="body" color={theme.colors.textSecondary}>
              (4.5) • 1,234 reviews
            </Typography>
          </View>

          <Typography variant="body" style={styles.description}>
            Experience ultimate comfort with the Nike Air Max 270. Featuring a
            large Max Air unit in the heel and a breathable mesh upper, these
            shoes are perfect for all-day wear.
          </Typography>

          {/* Size Selection */}
          <View style={styles.optionSection}>
            <Typography
              variant="h3"
              style={{ fontWeight: "600", marginBottom: 12 }}
            >
              Size
            </Typography>
            <View style={styles.optionGrid}>
              {sizes.map((size) => (
                <Chip
                  key={size}
                  label={size}
                  selected={selectedSize === size}
                  onPress={() => setSelectedSize(size)}
                  variant={selectedSize === size ? "filled" : "outlined"}
                  style={styles.sizeChip}
                />
              ))}
            </View>
          </View>

          {/* Color Selection */}
          <View style={styles.optionSection}>
            <Typography
              variant="h3"
              style={{ fontWeight: "600", marginBottom: 12 }}
            >
              Color
            </Typography>
            <View style={styles.optionGrid}>
              {colors.map((color) => (
                <Chip
                  key={color}
                  label={color}
                  selected={selectedColor === color}
                  onPress={() => setSelectedColor(color)}
                  variant={selectedColor === color ? "filled" : "outlined"}
                  style={styles.colorChip}
                />
              ))}
            </View>
          </View>

          {/* Quantity */}
          <View style={styles.quantitySection}>
            <Typography variant="h3" style={{ fontWeight: "600" }}>
              Quantity
            </Typography>
            <View style={styles.quantityControls}>
              <Button
                variant="outline"
                size="sm"
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                style={styles.quantityButton}
              >
                <Ionicons
                  name="remove"
                  size={16}
                  color={theme.colors.primary}
                />
              </Button>
              <Typography variant="body" style={styles.quantityText}>
                {quantity}
              </Typography>
              <Button
                variant="outline"
                size="sm"
                onPress={() => setQuantity(quantity + 1)}
                style={styles.quantityButton}
              >
                <Ionicons name="add" size={16} color={theme.colors.primary} />
              </Button>
            </View>
          </View>
        </Box>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button variant="primary" style={styles.addToCartButton}>
            <Ionicons name="bag-outline" size={20} color="white" />
            <Typography
              variant="button"
              color="white"
              style={{ marginLeft: 8 }}
            >
              Add to Cart
            </Typography>
          </Button>
          <Button variant="outline" style={styles.wishlistButton}>
            <Ionicons
              name="heart-outline"
              size={20}
              color={theme.colors.primary}
            />
          </Button>
        </View>

        {/* Product Features */}
        <Box variant="soft" style={styles.featuresSection}>
          <Typography
            variant="h3"
            style={{ fontWeight: "600", marginBottom: 16 }}
          >
            Features
          </Typography>
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Ionicons
                name="shield-checkmark"
                size={20}
                color={theme.colors.success}
              />
              <Typography variant="body" style={styles.featureText}>
                2-year warranty
              </Typography>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="car" size={20} color={theme.colors.success} />
              <Typography variant="body" style={styles.featureText}>
                Free shipping over $100
              </Typography>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="refresh" size={20} color={theme.colors.success} />
              <Typography variant="body" style={styles.featureText}>
                30-day returns
              </Typography>
            </View>
          </View>
        </Box>

        {/* Reviews */}
        <View style={styles.reviewsSection}>
          <Typography
            variant="h3"
            style={{ fontWeight: "600", marginBottom: 16 }}
          >
            Customer Reviews
          </Typography>
          {REVIEWS.map(renderReview)}
          <Button variant="outline" style={styles.viewAllButton}>
            View All Reviews
          </Button>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    marginBottom: 16,
  },
  mainImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginBottom: 12,
  },
  imageGallery: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
  },
  thumbnailImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  productInfo: {
    marginBottom: 16,
  },
  productHeader: {
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 8,
  },
  originalPrice: {
    textDecorationLine: "line-through",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  description: {
    lineHeight: 22,
    marginBottom: 24,
  },
  optionSection: {
    marginBottom: 24,
  },
  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  sizeChip: {
    minWidth: 50,
  },
  colorChip: {
    minWidth: 70,
  },
  quantitySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  quantityButton: {
    width: 40,
    height: 40,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "600",
    minWidth: 30,
    textAlign: "center",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  addToCartButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  wishlistButton: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  featuresSection: {
    marginBottom: 16,
  },
  featuresList: {
    gap: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  featureText: {
    flex: 1,
  },
  reviewsSection: {
    marginBottom: 24,
  },
  reviewCard: {
    marginBottom: 16,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  reviewInfo: {
    marginLeft: 12,
    flex: 1,
  },
  reviewMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },
  reviewComment: {
    lineHeight: 20,
  },
  viewAllButton: {
    marginTop: 8,
  },
});
