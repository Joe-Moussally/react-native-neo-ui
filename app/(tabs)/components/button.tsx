import { Button } from "@/core/components/Button";
import {
  ButtonColorKey,
  ButtonSize,
  ButtonVariant,
} from "@/core/components/Button/types";
import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Define examples for demonstration
const VARIANTS: ButtonVariant[] = [
  "primary",
  "secondary",
  "outline",
  "ghost",
  "soft",
  "text",
  "danger",
  "success",
  "warning",
  "info",
];

const SIZES: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];

const COLORS: ButtonColorKey[] = [
  "primary",
  "secondary",
  "accent",
  "error",
  "success",
  "warning",
  "info",
];

export default function ButtonScreen() {
  const { theme } = useTheme();
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const toggleLoading = (key: string) => {
    setLoadingStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    // Auto-reset loading after 2 seconds
    setTimeout(() => {
      setLoadingStates((prev) => ({
        ...prev,
        [key]: false,
      }));
    }, 2000);
  };

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
      <View style={styles.buttonContainer}>{children}</View>
    </View>
  );

  const renderVariantExamples = () => {
    return VARIANTS.map((variant) => (
      <ExampleContainer key={variant} label={`variant="${variant}"`}>
        <Button variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      </ExampleContainer>
    ));
  };

  const renderSizeExamples = () => {
    return SIZES.map((size) => (
      <ExampleContainer key={size} label={`size="${size}"`}>
        <Button size={size}>{size.toUpperCase()}</Button>
      </ExampleContainer>
    ));
  };

  const renderColorExamples = () => {
    return COLORS.map((color) => (
      <ExampleContainer key={color} label={`color="${color}"`}>
        <Button color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      </ExampleContainer>
    ));
  };

  const renderStateExamples = () => {
    return [
      { prop: "disabled={true}", disabled: true },
      { prop: "loading={true}", loading: true },
      { prop: "fullWidth={true}", fullWidth: true },
      { prop: "hapticsDisabled={true}", hapticsDisabled: true },
    ].map((state, index) => (
      <ExampleContainer key={index} label={state.prop}>
        <Button {...state}>
          {state.disabled
            ? "Disabled"
            : state.loading
            ? "Loading"
            : state.fullWidth
            ? "Full Width"
            : "No Haptics"}
        </Button>
      </ExampleContainer>
    ));
  };

  const renderIconExamples = () => {
    return [
      {
        label: "startIcon={<Icon />}",
        props: {
          startIcon: <Typography style={{ color: "inherit" }}>📧</Typography>,
        },
        text: "Email",
      },
      {
        label: "endIcon={<Icon />}",
        props: {
          endIcon: <Typography style={{ color: "inherit" }}>→</Typography>,
        },
        text: "Next",
      },
      {
        label: "startIcon={<Icon />} endIcon={<Icon />}",
        props: {
          startIcon: <Typography style={{ color: "inherit" }}>⚙️</Typography>,
          endIcon: <Typography style={{ color: "inherit" }}>⚡</Typography>,
        },
        text: "Settings",
      },
    ].map((example, index) => (
      <ExampleContainer key={index} label={example.label}>
        <Button {...example.props}>{example.text}</Button>
      </ExampleContainer>
    ));
  };

  const renderIconButtonExamples = () => {
    return [
      {
        label: "Icon Button - Primary",
        props: {
          variant: "primary" as ButtonVariant,
          size: "md" as ButtonSize,
          style: { aspectRatio: 1, paddingHorizontal: 0, minWidth: 42 },
        },
        icon: "👤",
      },
      {
        label: "Icon Button - Outline",
        props: {
          variant: "outline" as ButtonVariant,
          size: "sm" as ButtonSize,
          style: { aspectRatio: 1, paddingHorizontal: 0, minWidth: 34 },
        },
        icon: "⚙️",
      },
      {
        label: "Icon Button - Ghost",
        props: {
          variant: "ghost" as ButtonVariant,
          size: "lg" as ButtonSize,
          style: { aspectRatio: 1, paddingHorizontal: 0, minWidth: 50 },
        },
        icon: "❤️",
      },
      {
        label: "Icon Button - Soft",
        props: {
          variant: "soft" as ButtonVariant,
          size: "md" as ButtonSize,
          style: { aspectRatio: 1, paddingHorizontal: 0, minWidth: 42 },
        },
        icon: "✨",
      },
      {
        label: "Icon Button - Danger",
        props: {
          variant: "danger" as ButtonVariant,
          size: "sm" as ButtonSize,
          style: { aspectRatio: 1, paddingHorizontal: 0, minWidth: 34 },
        },
        icon: "✕",
      },
    ].map((example, index) => (
      <ExampleContainer key={index} label={example.label}>
        <Button {...example.props}>
          <Typography style={{ color: "inherit", fontSize: 18 }}>
            {example.icon}
          </Typography>
        </Button>
      </ExampleContainer>
    ));
  };

  const renderCombinedExamples = () => {
    const examples = [
      {
        variant: "primary",
        size: "lg",
        color: "success",
        desc: "Large Success Primary",
      },
      {
        variant: "outline",
        size: "sm",
        color: "error",
        desc: "Small Error Outline",
      },
      {
        variant: "ghost",
        size: "md",
        color: "info",
        desc: "Medium Info Ghost",
      },
    ];

    return examples.map((ex, index) => (
      <ExampleContainer
        key={index}
        label={`variant="${ex.variant}" size="${ex.size}" color="${ex.color}"`}
      >
        <Button
          variant={ex.variant as ButtonVariant}
          size={ex.size as ButtonSize}
          color={ex.color as ButtonColorKey}
        >
          {ex.desc}
        </Button>
      </ExampleContainer>
    ));
  };

  return (
    <Screen title="Button">
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Section title="Variants">{renderVariantExamples()}</Section>

        <Section title="Sizes">{renderSizeExamples()}</Section>

        <Section title="Colors">{renderColorExamples()}</Section>

        <Section title="States">{renderStateExamples()}</Section>

        <Section title="With Icons">{renderIconExamples()}</Section>

        <Section title="Icon Buttons">{renderIconButtonExamples()}</Section>

        <Section title="Combined Examples">{renderCombinedExamples()}</Section>

        <Section title="Interactive Examples">
          <ExampleContainer label="Interactive Loading Button">
            <Button
              variant="primary"
              loading={loadingStates.save}
              onPress={() => toggleLoading("save")}
              startIcon={
                !loadingStates.save ? (
                  <Typography style={{ color: "inherit" }}>💾</Typography>
                ) : undefined
              }
            >
              {loadingStates.save ? "Saving..." : "Save Document"}
            </Button>
          </ExampleContainer>

          <ExampleContainer label="Interactive Danger Button">
            <Button
              variant="danger"
              loading={loadingStates.delete}
              onPress={() => toggleLoading("delete")}
              startIcon={
                !loadingStates.delete ? (
                  <Typography style={{ color: "inherit" }}>🗑️</Typography>
                ) : undefined
              }
            >
              {loadingStates.delete ? "Deleting..." : "Delete Item"}
            </Button>
          </ExampleContainer>

          <ExampleContainer label="Full Width Submit Button">
            <Button
              variant="success"
              size="lg"
              loading={loadingStates.submit}
              onPress={() => toggleLoading("submit")}
              fullWidth
            >
              {loadingStates.submit ? "Submitting..." : "Submit Form"}
            </Button>
          </ExampleContainer>
        </Section>
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
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
});
