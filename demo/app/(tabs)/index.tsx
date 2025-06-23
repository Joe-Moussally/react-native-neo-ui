import { AntDesign } from "@expo/vector-icons";
import { Box, Button, Chip, Typography, useTheme } from "@joe111/neo-ui";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Defs, G, LinearGradient, Path, Stop, Svg } from "react-native-svg";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Neo UI Logo Component
const NeoLogo = ({ size = 120 }: { size?: number }) => (
  <Svg
    width={size}
    height={size}
    viewBox="57.325 24.92 289.142 351.97"
    preserveAspectRatio="xMidYMid meet"
  >
    <Defs>
      <LinearGradient
        id="gradient-0"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset="0" stopColor="rgb(68, 201, 235)" />
        <Stop offset="1" stopColor="rgb(0, 99, 144)" />
      </LinearGradient>
      <LinearGradient
        id="gradient-1"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset="0" stopColor="rgb(68, 201, 235)" />
        <Stop offset="1" stopColor="rgb(0, 99, 144)" />
      </LinearGradient>
      <LinearGradient
        id="gradient-2"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset="0" stopColor="rgb(68, 201, 235)" />
        <Stop offset="1" stopColor="rgb(0, 99, 144)" />
      </LinearGradient>
    </Defs>
    <G transform="matrix(0.1, 0, 0, -0.1, -0.878498, 399)">
      <Path
        d="M1993 3658 c-90 -139 -127 -302 -103 -448 32 -191 127 -371 288 -542 98 -104 1066 -949 1095 -956 16 -3 98 101 131 165 43 85 59 173 53 293 -6 150 -58 289 -164 438 -94 132 -111 147 -1195 1075 l-57 48 -48 -73z"
        fill="url(#gradient-0)"
      />
      <Path
        d="M847 3393 c-147 -201 -175 -451 -78 -685 47 -112 141 -248 245 -352 50 -51 273 -249 495 -442 508 -438 1117 -966 1371 -1189 107 -93 223 -194 258 -224 l63 -54 44 43 c56 55 110 157 135 256 65 251 -33 532 -267 768 -42 43 -156 146 -252 229 -97 83 -212 183 -256 223 -44 39 -217 189 -385 334 -168 144 -350 301 -405 349 -624 544 -913 791 -924 791 -5 0 -25 -21 -44 -47z"
        fill="url(#gradient-1)"
      />
      <Path
        d="M711 2178 c-220 -297 -155 -696 168 -1027 42 -42 251 -228 466 -412 534 -458 595 -509 605 -509 5 0 25 21 45 47 210 275 150 653 -156 987 -60 66 -1063 945 -1089 954 -4 2 -22 -16 -39 -40z"
        fill="url(#gradient-2)"
      />
    </G>
  </Svg>
);

// Floating Card Component
const FeatureCard = ({
  icon,
  title,
  description,
  theme,
}: {
  icon: string;
  title: string;
  description: string;
  theme: any;
}) => (
  <Box
    style={[
      styles.featureCard,
      {
        backgroundColor: theme.colors.surface,
        borderColor: theme.isDark
          ? "rgba(68, 201, 235, 0.2)"
          : "rgba(68, 201, 235, 0.1)",
      },
    ]}
    padding="lg"
  >
    <Typography
      variant="h3"
      style={[styles.featureIcon, { color: theme.colors.primary }]}
    >
      {icon}
    </Typography>
    <Typography
      variant="body"
      style={[styles.featureTitle, { color: theme.colors.text }]}
    >
      {title}
    </Typography>
    <Typography
      variant="caption"
      style={[styles.featureDescription, { color: theme.colors.textSecondary }]}
    >
      {description}
    </Typography>
  </Box>
);

// Stats Component
const StatItem = ({
  number,
  label,
  theme,
}: {
  number: string;
  label: string;
  theme: any;
}) => (
  <Box style={styles.statItem} gap="xs">
    <Typography
      variant="h2"
      style={[styles.statNumber, { color: theme.colors.primary }]}
    >
      {number}
    </Typography>
    <Typography
      variant="caption"
      style={[styles.statLabel, { color: theme.colors.textSecondary }]}
    >
      {label}
    </Typography>
  </Box>
);

export default function HomeScreen() {
  const { theme } = useTheme();

  const navigateToComponents = () => {
    router.push("/(tabs)/components");
  };

  return (
    <>
      <StatusBar style={theme.isDark ? "light" : "dark"} />
      <ScrollView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <Box style={styles.heroSection} gap="xl">
          {/* Logo Container - Removed background glow */}
          <Box style={styles.logoContainer}>
            <NeoLogo size={160} />
          </Box>

          {/* Title Section - Added more spacing */}
          <Box gap="lg" style={styles.titleSection}>
            <Box style={styles.titleContainer} gap="sm">
              <Typography
                variant="h1"
                style={[styles.mainTitle, { color: theme.colors.primary }]}
              >
                Neo UI
              </Typography>
              <View
                style={[
                  styles.titleUnderline,
                  { backgroundColor: theme.colors.primary },
                ]}
              />
            </Box>

            <Typography
              variant="body"
              style={[styles.subtitle, { color: theme.colors.text }]}
            >
              The Future of React Native Design
            </Typography>

            <Typography
              variant="caption"
              style={[styles.tagline, { color: theme.colors.textSecondary }]}
            >
              Crafted for modern applications • Built with precision • Designed
              for excellence
            </Typography>

            {/* Navigation Button */}
            <Box style={styles.ctaSection} gap="md">
              <Button
                variant="primary"
                onPress={navigateToComponents}
                endIcon={
                  <AntDesign name="arrowright" size={24} color="black" />
                }
              >
                View Components
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Stats Section */}
        <Box style={styles.statsSection} gap="md">
          <Box style={styles.statsContainer}>
            <StatItem number="50+" label="Components" theme={theme} />
            <StatItem number="100%" label="TypeScript" theme={theme} />
            <StatItem number="∞" label="Possibilities" theme={theme} />
          </Box>
        </Box>

        {/* Features Grid */}
        <Box style={styles.featuresSection} gap="xl">
          <Typography
            variant="h2"
            style={[styles.sectionTitle, { color: theme.colors.text }]}
          >
            Why Choose Neo UI?
          </Typography>

          <Box style={styles.featuresGrid} gap="md">
            <FeatureCard
              icon="🎨"
              title="Beautiful Design"
              description="Carefully crafted components with attention to every detail"
              theme={theme}
            />
            <FeatureCard
              icon="⚡"
              title="Lightning Fast"
              description="Optimized for performance with native-level speed"
              theme={theme}
            />
            <FeatureCard
              icon="🔧"
              title="Highly Customizable"
              description="Flexible theming system that adapts to your brand"
              theme={theme}
            />
            <FeatureCard
              icon="📱"
              title="Mobile First"
              description="Built specifically for React Native and Expo"
              theme={theme}
            />
          </Box>
        </Box>

        {/* Technology Badges using Chip component */}
        <Box style={styles.techSection} gap="lg">
          <Typography
            variant="body"
            style={[styles.techTitle, { color: theme.colors.text }]}
          >
            Built With Modern Technologies
          </Typography>

          <Box style={styles.techBadges} gap="sm">
            {["React Native", "TypeScript", "Expo", "React Navigation"].map(
              (tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  variant="soft"
                  style={styles.techChip}
                />
              )
            )}
          </Box>
        </Box>

        {/* Bottom Spacer */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroSection: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 80, // Increased from 60 to give more space
    paddingBottom: 40,
    minHeight: screenHeight * 0.65, // Slightly increased
    justifyContent: "center",
  },
  logoContainer: {
    shadowColor: "#44C9EB",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  titleSection: {
    alignItems: "center",
    maxWidth: screenWidth * 0.9,
  },
  titleContainer: {
    alignItems: "center",
    paddingTop: 20, // Added padding to prevent title cutoff
  },
  mainTitle: {
    fontSize: 56,
    fontWeight: "800",
    textAlign: "center",
    paddingTop: 10,
    // letterSpacing: -2,
  },
  titleUnderline: {
    width: 80,
    height: 4,
    borderRadius: 2,
    opacity: 0.8,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    opacity: 0.9,
  },
  tagline: {
    fontSize: 15,
    textAlign: "center",
    opacity: 0.7,
    lineHeight: 22,
    maxWidth: screenWidth * 0.8,
  },
  ctaSection: {
    alignItems: "center",
    marginTop: 8,
  },
  statsSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 32,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  featuresSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureCard: {
    width: (screenWidth - 64) / 2,
    borderWidth: 1,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#44C9EB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 16,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
    opacity: 0.8,
  },
  techSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: "center",
  },
  techTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  techBadges: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  techChip: {
    margin: 4,
  },
  bottomSpacer: {
    height: 40,
  },
});
