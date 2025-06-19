import { Badge } from "@/core/components/Badge";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import { spacing } from "@/core/theme/spacing";
import { ThemeColor } from "@/core/theme/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function BadgeDemo() {
  const { theme } = useTheme();

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
        {title}
      </Text>
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
      <Text style={[styles.label, { color: theme.colors.textSecondary }]}>
        {label}
      </Text>
      <View style={styles.badgeContainer}>{children}</View>
    </View>
  );

  const MailIcon = ({ color = theme.colors.textSecondary, size = 24 }) => (
    <Ionicons name="mail" size={size} color={color} />
  );

  const renderBasicExamples = () => {
    return (
      <>
        <ExampleContainer label="Basic Badge with content">
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="Badge with no content (hidden)">
          <Badge color="primary">
            <MailIcon />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="Badge with zero content (hidden by default)">
          <Badge badgeContent={0} color="secondary">
            <MailIcon />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="Badge with zero content (showZero=true)">
          <Badge badgeContent={0} color="secondary" showZero>
            <MailIcon />
          </Badge>
        </ExampleContainer>
      </>
    );
  };

  const renderColorExamples = () => {
    const colors: ThemeColor[] = [
      "primary",
      "secondary",
      "success",
      "error",
      "warning",
      "info",
    ];

    return colors.map((color) => (
      <ExampleContainer key={color} label={`color="${color}"`}>
        <Badge badgeContent={4} color={color}>
          <MailIcon />
        </Badge>
      </ExampleContainer>
    ));
  };

  const renderMaxValueExamples = () => {
    return (
      <>
        <ExampleContainer label="badgeContent={99}">
          <Badge badgeContent={99} color="secondary">
            <MailIcon />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="badgeContent={100} (default max=99)">
          <Badge badgeContent={100} color="secondary">
            <MailIcon />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="badgeContent={1000} max={999}">
          <Badge badgeContent={1000} max={999} color="secondary">
            <MailIcon />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="badgeContent={50} max={25}">
          <Badge badgeContent={50} max={25} color="primary">
            <MailIcon />
          </Badge>
        </ExampleContainer>
      </>
    );
  };

  const renderVariantExamples = () => {
    return (
      <>
        <ExampleContainer label='variant="standard" (default)'>
          <Badge badgeContent={4} color="primary" variant="standard">
            <MailIcon />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label='variant="dot"'>
          <Badge color="secondary" variant="dot">
            <MailIcon />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label='variant="dot" with different colors'>
          <View style={styles.rowContainer}>
            <Badge color="success" variant="dot">
              <MailIcon />
            </Badge>
            <Badge color="error" variant="dot">
              <MailIcon />
            </Badge>
            <Badge color="warning" variant="dot">
              <MailIcon />
            </Badge>
          </View>
        </ExampleContainer>
      </>
    );
  };

  const renderAlignmentExamples = () => {
    return (
      <>
        <ExampleContainer label="Top Right (default)">
          <Badge
            badgeContent={1}
            color="primary"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <View
              style={[
                styles.demoBox,
                { backgroundColor: theme.colors.surface },
              ]}
            />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="Top Left">
          <Badge
            badgeContent={2}
            color="secondary"
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <View
              style={[
                styles.demoBox,
                { backgroundColor: theme.colors.surface },
              ]}
            />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="Bottom Right">
          <Badge
            badgeContent={3}
            color="success"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <View
              style={[
                styles.demoBox,
                { backgroundColor: theme.colors.surface },
              ]}
            />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="Bottom Left">
          <Badge
            badgeContent={4}
            color="error"
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <View
              style={[
                styles.demoBox,
                { backgroundColor: theme.colors.surface },
              ]}
            />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="Dot badges with different alignments">
          <View style={styles.rowContainer}>
            <Badge
              variant="dot"
              color="primary"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <View
                style={[
                  styles.demoBox,
                  { backgroundColor: theme.colors.surface },
                ]}
              />
            </Badge>
            <Badge
              variant="dot"
              color="secondary"
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <View
                style={[
                  styles.demoBox,
                  { backgroundColor: theme.colors.surface },
                ]}
              />
            </Badge>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <View
                style={[
                  styles.demoBox,
                  { backgroundColor: theme.colors.surface },
                ]}
              />
            </Badge>
          </View>
        </ExampleContainer>
      </>
    );
  };

  const renderVisibilityExamples = () => {
    return (
      <>
        <ExampleContainer label="Visible badge">
          <Badge badgeContent={5} color="primary">
            <MailIcon />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="Invisible badge (invisible=true)">
          <Badge badgeContent={5} color="primary" invisible>
            <MailIcon />
          </Badge>
        </ExampleContainer>

        <ExampleContainer label="Conditionally hidden">
          <Badge
            badgeContent={0}
            color="secondary"
            invisible={false}
            showZero={false}
          >
            <MailIcon />
          </Badge>
        </ExampleContainer>
      </>
    );
  };

  return (
    <Screen title="Badge">
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          Badge generates a small badge to the top-right of its children,
          similar to Material UI Badge component.
        </Text>

        <Section title="Basic Examples">{renderBasicExamples()}</Section>

        <Section title="Colors">{renderColorExamples()}</Section>

        <Section title="Maximum Value">{renderMaxValueExamples()}</Section>

        <Section title="Variants">{renderVariantExamples()}</Section>

        <Section title="Badge Alignment">{renderAlignmentExamples()}</Section>

        <Section title="Badge Visibility">{renderVisibilityExamples()}</Section>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: spacing.xl,
    lineHeight: 24,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: spacing.md,
  },
  exampleContainer: {
    marginBottom: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  label: {
    marginBottom: spacing.sm,
    fontSize: 14,
  },
  badgeContainer: {
    alignItems: "flex-start",
  },
  rowContainer: {
    flexDirection: "row",
    gap: spacing.lg,
    alignItems: "center",
  },
  demoBox: {
    width: 40,
    height: 40,
    borderRadius: spacing.rounded,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
});
