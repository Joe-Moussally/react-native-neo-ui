import { Button } from "@/core/components/Button";
import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

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
      <Typography variant="h3" style={styles.sectionTitle}>
        {title}
      </Typography>
      {children}
    </View>
  );

  const ButtonRow = ({ children }: { children: React.ReactNode }) => (
    <View style={styles.buttonRow}>{children}</View>
  );

  return (
    <Screen title="Button">
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {/* Variants */}
        <Section title="Variants">
          <ButtonRow>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </ButtonRow>
          <ButtonRow>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </ButtonRow>
          <ButtonRow>
            <Button variant="text">Text</Button>
            <Button variant="danger">Danger</Button>
          </ButtonRow>
          <ButtonRow>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
          </ButtonRow>
          <ButtonRow>
            <Button variant="info">Info</Button>
          </ButtonRow>
        </Section>

        {/* Sizes */}
        <Section title="Sizes">
          <ButtonRow>
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
          </ButtonRow>
          <ButtonRow>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </ButtonRow>
          <ButtonRow>
            <Button size="xl">Extra Large</Button>
          </ButtonRow>
        </Section>

        {/* Colors */}
        <Section title="Custom Colors">
          <ButtonRow>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
          </ButtonRow>
          <ButtonRow>
            <Button color="accent">Accent</Button>
            <Button color="error">Error</Button>
          </ButtonRow>
          <ButtonRow>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
          </ButtonRow>
          <ButtonRow>
            <Button color="info">Info</Button>
          </ButtonRow>
        </Section>

        {/* States */}
        <Section title="States">
          <ButtonRow>
            <Button disabled>Disabled</Button>
            <Button
              loading={loadingStates.loading1}
              onPress={() => toggleLoading("loading1")}
            >
              {loadingStates.loading1 ? "Loading..." : "Click to Load"}
            </Button>
          </ButtonRow>
        </Section>

        {/* Icons */}
        <Section title="With Icons">
          <ButtonRow>
            <Button
              leftIcon={
                <Typography style={{ color: "inherit" }}>📧</Typography>
              }
            >
              Email
            </Button>
            <Button
              rightIcon={
                <Typography style={{ color: "inherit" }}>→</Typography>
              }
            >
              Next
            </Button>
          </ButtonRow>
          <ButtonRow>
            <Button
              variant="outline"
              leftIcon={
                <Typography style={{ color: "inherit" }}>⚙️</Typography>
              }
              rightIcon={
                <Typography style={{ color: "inherit" }}>⚡</Typography>
              }
            >
              Settings
            </Button>
          </ButtonRow>
        </Section>

        {/* Full Width */}
        <Section title="Full Width">
          <Button fullWidth>Full Width Button</Button>
          <View style={styles.spacer} />
          <Button variant="outline" fullWidth>
            Full Width Outline
          </Button>
        </Section>

        {/* Interactive Examples */}
        <Section title="Interactive Examples">
          <Button
            variant="primary"
            loading={loadingStates.save}
            onPress={() => toggleLoading("save")}
            leftIcon={
              !loadingStates.save ? (
                <Typography style={{ color: "inherit" }}>💾</Typography>
              ) : undefined
            }
          >
            {loadingStates.save ? "Saving..." : "Save Document"}
          </Button>
          <View style={styles.spacer} />

          <Button
            variant="danger"
            loading={loadingStates.delete}
            onPress={() => toggleLoading("delete")}
            leftIcon={
              !loadingStates.delete ? (
                <Typography style={{ color: "inherit" }}>🗑️</Typography>
              ) : undefined
            }
          >
            {loadingStates.delete ? "Deleting..." : "Delete Item"}
          </Button>
          <View style={styles.spacer} />

          <Button
            variant="success"
            size="lg"
            loading={loadingStates.submit}
            onPress={() => toggleLoading("submit")}
            fullWidth
          >
            {loadingStates.submit ? "Submitting..." : "Submit Form"}
          </Button>
        </Section>

        {/* Size Comparison */}
        <Section title="Size Comparison">
          <View style={styles.sizeComparison}>
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
            <Button size="xl">XL</Button>
          </View>
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
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 12,
  },
  spacer: {
    height: 12,
  },
  sizeComparison: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
});
