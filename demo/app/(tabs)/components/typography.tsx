import { Typography } from "@joe111/neo-ui/Typography";
import {
  TypographyVariant,
  TypographyWeight,
} from "@joe111/neo-ui/Typography/types";
import { Screen } from "@joe111/neo-ui/navigation";
import { useTheme } from "@joe111/neo-ui/theme";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Define examples for demonstration
const VARIANTS: TypographyVariant[] = [
  "display",
  "h1",
  "h2",
  "h3",
  "body",
  "bodyLarge",
  "bodySmall",
  "caption",
  "button",
  "link",
];

const WEIGHTS: TypographyWeight[] = [
  "normal",
  "bold",
  "light",
  "medium",
  "semibold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export default function TypographyScreen() {
  const { theme } = useTheme();

  const renderVariantExamples = () => {
    return VARIANTS.map((variant) => (
      <View key={variant} style={styles.exampleContainer}>
        <Typography
          variant="bodySmall"
          color={theme.colors.textSecondary}
          style={styles.label}
        >
          variant=&quot;{variant}&quot;
        </Typography>
        <Typography variant={variant}>This is {variant} text</Typography>
      </View>
    ));
  };

  const renderWeightExamples = () => {
    return WEIGHTS.map((weight) => (
      <View key={weight} style={styles.exampleContainer}>
        <Typography
          variant="bodySmall"
          color={theme.colors.textSecondary}
          style={styles.label}
        >
          weight=&quot;{weight}&quot;
        </Typography>
        <Typography weight={weight}>This is weight {weight}</Typography>
      </View>
    ));
  };

  const renderColorExamples = () => {
    const colors = [
      { name: "Primary", color: theme.colors.primary },
      { name: "Secondary", color: theme.colors.secondary },
      { name: "Accent", color: theme.colors.accent },
      { name: "Error", color: theme.colors.error },
      { name: "Success", color: theme.colors.success },
    ];

    return colors.map((colorItem) => (
      <View key={colorItem.name} style={styles.exampleContainer}>
        <Typography
          variant="bodySmall"
          color={theme.colors.textSecondary}
          style={styles.label}
        >
          color=&quot;{colorItem.name}&quot;
        </Typography>
        <Typography color={colorItem.color}>
          This is {colorItem.name} color
        </Typography>
      </View>
    ));
  };

  const renderCombinedExamples = () => {
    const examples = [
      { variant: "h1", weight: "bold", desc: "Bold Heading 1" },
      { variant: "h2", weight: "medium", desc: "Medium Heading 2" },
      { variant: "body", weight: "600", desc: "Body with 600 weight" },
      { variant: "bodyLarge", weight: "light", desc: "Light Body Large" },
      { variant: "button", weight: "semibold", desc: "Semibold Button" },
    ];

    return examples.map((ex, index) => (
      <View key={index} style={styles.exampleContainer}>
        <Typography
          variant="bodySmall"
          color={theme.colors.textSecondary}
          style={styles.label}
        >
          variant=&quot;{ex.variant}&quot; weight=&quot;{ex.weight}&quot;
        </Typography>
        <Typography
          variant={ex.variant as TypographyVariant}
          weight={ex.weight as TypographyWeight}
        >
          {ex.desc}
        </Typography>
      </View>
    ));
  };

  return (
    <Screen
      title="Typography"
      options={{
        headerBackButtonDisplayMode: "default",
        headerBackTitle: "____",
        headerBackTitleStyle: {
          fontSize: 1,
        },
      }}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Typography variant="h2" style={styles.sectionTitle}>
            Variants
          </Typography>
          {renderVariantExamples()}
        </View>

        <View style={styles.section}>
          <Typography variant="h2" style={styles.sectionTitle}>
            Weights
          </Typography>
          {renderWeightExamples()}
        </View>

        <View style={styles.section}>
          <Typography variant="h2" style={styles.sectionTitle}>
            Colors
          </Typography>
          {renderColorExamples()}
        </View>

        <View style={styles.section}>
          <Typography variant="h2" style={styles.sectionTitle}>
            Combined Examples
          </Typography>
          {renderCombinedExamples()}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    // padding: 16,
    // paddingBottom: 40,
  },
  section: {
    // marginBottom: 24,
  },
  sectionTitle: {
    // marginBottom: 16,
  },
  exampleContainer: {
    marginBottom: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  label: {
    marginBottom: 4,
  },
});
