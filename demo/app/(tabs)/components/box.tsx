import {
  Box,
  BoxVariant,
  Screen,
  ThemeColor,
  ThemeSpacing,
  Typography,
  useTheme,
} from "@joe111/neo-ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Define examples for demonstration
const VARIANTS: BoxVariant[] = [
  "solid",
  "soft",
  "outline",
  "filledOutline",
  "transparent",
];

const COLORS: ThemeColor[] = [
  "primary",
  "secondary",
  "accent",
  "error",
  "success",
  "warning",
  "info",
];

const SPACINGS: ThemeSpacing[] = ["xs", "sm", "md", "lg", "xl", "xxl"];

export default function BoxScreen() {
  const { theme } = useTheme();

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <View style={styles.section}>
      <Typography variant="h2" style={styles.sectionTitle}>
        {title}
      </Typography>
      {children}
    </View>
  );

  const ExampleContainer = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <View style={styles.exampleContainer}>
      <Typography
        variant="bodySmall"
        color={theme.colors.textSecondary}
        style={styles.label}
      >
        {label}
      </Typography>
      <View style={styles.boxContainer}>{children}</View>
    </View>
  );

  const renderVariantExamples = () => {
    return VARIANTS.map((variant) => (
      <ExampleContainer key={variant} label={`variant="${variant}"`}>
        <Box
          variant={variant}
          color={
            variant === "transparent"
              ? "primary"
              : variant === "filledOutline"
              ? "secondary"
              : "primary"
          }
          padding="md"
          style={
            variant === "transparent"
              ? { borderWidth: 1, borderColor: theme.colors.border }
              : undefined
          }
        >
          <Typography
            variant="body"
            color={variant === "solid" ? theme.colors.background : undefined}
          >
            {variant === "filledOutline"
              ? "Filled Outline Box"
              : variant.charAt(0).toUpperCase() + variant.slice(1) + " Box"}
          </Typography>
        </Box>
      </ExampleContainer>
    ));
  };

  const renderColorExamples = () => {
    return COLORS.map((color) => (
      <ExampleContainer key={color} label={`color="${color}"`}>
        <Box color={color} variant="solid" padding="sm">
          <Typography variant="bodySmall" color={theme.colors.background}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Typography>
        </Box>
      </ExampleContainer>
    ));
  };

  const renderBorderRadiusExamples = () => {
    const radiusValues = [0, 4, 8, 12, 16, 24];

    return radiusValues.map((radius) => (
      <ExampleContainer key={radius} label={`borderRadius={${radius}}`}>
        <Box variant="solid" color="accent" padding="md" borderRadius={radius}>
          <Typography variant="bodySmall" color={theme.colors.background}>
            Radius {radius}
          </Typography>
        </Box>
      </ExampleContainer>
    ));
  };

  const renderPaddingExamples = () => {
    return SPACINGS.map((spacing) => (
      <ExampleContainer key={spacing} label={`padding="${spacing}"`}>
        <Box variant="outline" color="primary" padding={spacing}>
          <Typography variant="bodySmall">{spacing.toUpperCase()}</Typography>
        </Box>
      </ExampleContainer>
    ));
  };

  const renderMarginExamples = () => {
    return SPACINGS.slice(0, 4).map((spacing) => (
      <ExampleContainer key={spacing} label={`margin="${spacing}"`}>
        <View style={styles.marginDemo}>
          <Box variant="soft" color="accent" padding="sm" margin={spacing}>
            <Typography variant="bodySmall">{spacing.toUpperCase()}</Typography>
          </Box>
        </View>
      </ExampleContainer>
    ));
  };

  const renderGapExamples = () => {
    return ["xs", "sm", "md", "lg"].map((spacing) => (
      <ExampleContainer key={spacing} label={`gap="${spacing}"`}>
        <Box
          variant="outline"
          color="secondary"
          padding="sm"
          gap={spacing as ThemeSpacing}
        >
          <Typography variant="bodySmall">Item 1</Typography>
          <Typography variant="bodySmall">Item 2</Typography>
          <Typography variant="bodySmall">Item 3</Typography>
        </Box>
      </ExampleContainer>
    ));
  };

  const renderFlexDirectionExamples = () => {
    const directions = ["column", "row", "column-reverse", "row-reverse"];

    return directions.map((direction) => (
      <ExampleContainer key={direction} label={`flexDirection="${direction}"`}>
        <Box
          variant="soft"
          color="info"
          padding="sm"
          gap="xs"
          flexDirection={direction as any}
        >
          <Box variant="solid" color="primary" padding="xs">
            <Typography variant="bodySmall" color={theme.colors.background}>
              1
            </Typography>
          </Box>
          <Box variant="solid" color="secondary" padding="xs">
            <Typography variant="bodySmall" color={theme.colors.background}>
              2
            </Typography>
          </Box>
          <Box variant="solid" color="accent" padding="xs">
            <Typography variant="bodySmall" color={theme.colors.background}>
              3
            </Typography>
          </Box>
        </Box>
      </ExampleContainer>
    ));
  };

  const renderFlexExamples = () => {
    return [1, 2, 3].map((flexValue) => (
      <ExampleContainer key={flexValue} label={`flex={${flexValue}}`}>
        <View style={{ flexDirection: "row", height: 60 }}>
          <Box variant="solid" color="primary" padding="xs" flex={flexValue}>
            <Typography variant="bodySmall" color={theme.colors.background}>
              Flex {flexValue}
            </Typography>
          </Box>
          <Box variant="solid" color="secondary" padding="xs" flex={1}>
            <Typography variant="bodySmall" color={theme.colors.background}>
              Flex 1
            </Typography>
          </Box>
        </View>
      </ExampleContainer>
    ));
  };

  const renderCombinedExamples = () => {
    const examples = [
      {
        label: "Card Layout",
        props: {
          variant: "soft" as BoxVariant,
          color: "surface" as ThemeColor,
          padding: "lg" as ThemeSpacing,
          gap: "md" as ThemeSpacing,
          borderRadius: 12,
        },
        content: (
          <>
            <Typography variant="h3">Card Title</Typography>
            <Typography variant="body" color={theme.colors.textSecondary}>
              This is a card layout using the Box component with padding and
              gap.
            </Typography>
            <Box flexDirection="row" gap="sm">
              <Box
                variant="solid"
                color="primary"
                padding="sm"
                flex={1}
                borderRadius={8}
              >
                <Typography variant="bodySmall" color={theme.colors.background}>
                  Action 1
                </Typography>
              </Box>
              <Box
                variant="outline"
                color="secondary"
                padding="sm"
                flex={1}
                borderRadius={8}
              >
                <Typography variant="bodySmall">Action 2</Typography>
              </Box>
            </Box>
          </>
        ),
      },
      {
        label: "Filled Outline Card",
        props: {
          variant: "filledOutline" as BoxVariant,
          color: "primary" as ThemeColor,
          padding: "lg" as ThemeSpacing,
          gap: "md" as ThemeSpacing,
          borderRadius: 16,
        },
        content: (
          <>
            <Typography variant="h3">Filled Outline Style</Typography>
            <Typography variant="body" color={theme.colors.textSecondary}>
              This variant combines surface background with colored border.
            </Typography>
            <Box flexDirection="row" gap="sm">
              <Box
                variant="filledOutline"
                color="success"
                padding="sm"
                flex={1}
                borderRadius={8}
              >
                <Typography variant="bodySmall">Success</Typography>
              </Box>
              <Box
                variant="filledOutline"
                color="error"
                padding="sm"
                flex={1}
                borderRadius={8}
              >
                <Typography variant="bodySmall">Error</Typography>
              </Box>
            </Box>
          </>
        ),
      },
      {
        label: "Alert Box",
        props: {
          variant: "solid" as BoxVariant,
          color: "warning" as ThemeColor,
          padding: "md" as ThemeSpacing,
          gap: "sm" as ThemeSpacing,
          borderRadius: 16,
        },
        content: (
          <>
            <Typography
              variant="bodyLarge"
              weight="semibold"
              color={theme.colors.background}
            >
              Warning!
            </Typography>
            <Typography variant="body" color={theme.colors.background}>
              This is an important message that needs attention.
            </Typography>
          </>
        ),
      },
      {
        label: "Form Section",
        props: {
          variant: "transparent" as BoxVariant,
          color: "primary" as ThemeColor,
          padding: "lg" as ThemeSpacing,
          gap: "md" as ThemeSpacing,
        },
        content: (
          <>
            <Typography variant="h3">Form Section</Typography>
            <Box
              variant="soft"
              color="surface"
              padding="md"
              gap="sm"
              borderRadius={0}
            >
              <Typography variant="body">Field 1</Typography>
              <Typography variant="body">Field 2</Typography>
              <Typography variant="body">Field 3</Typography>
            </Box>
          </>
        ),
      },
    ];

    return examples.map((example, index) => (
      <ExampleContainer key={index} label={example.label}>
        <Box {...example.props}>{example.content}</Box>
      </ExampleContainer>
    ));
  };

  return (
    <Screen title="Box">
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Section title="Variants">{renderVariantExamples()}</Section>

        <Section title="Colors">{renderColorExamples()}</Section>

        <Section title="Border Radius">{renderBorderRadiusExamples()}</Section>

        <Section title="Padding">{renderPaddingExamples()}</Section>

        <Section title="Margin">{renderMarginExamples()}</Section>

        <Section title="Gap">{renderGapExamples()}</Section>

        <Section title="Flex Direction">
          {renderFlexDirectionExamples()}
        </Section>

        <Section title="Flex">{renderFlexExamples()}</Section>

        <Section title="Combined Examples">{renderCombinedExamples()}</Section>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    marginBottom: 16,
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
  boxContainer: {
    // Basic container for examples
  },
  marginDemo: {
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 4,
    borderRadius: 4,
  },
});
