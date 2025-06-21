import { Alert } from "@joe111/neo-ui/Alert";
import { Screen } from "@joe111/neo-ui/navigation";
import { useTheme } from "@joe111/neo-ui/theme";
import { spacing } from "@/core/theme/spacing";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AlertDemo() {
  const { theme } = useTheme();

  return (
    <Screen title="Alert">
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          Display important messages with different severity levels
        </Text>

        {/* Basic Alerts */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Basic Alerts
          </Text>
          <Alert severity="success">This is a success Alert.</Alert>
          <Alert severity="info">This is an info Alert.</Alert>
          <Alert severity="warning">This is a warning Alert.</Alert>
          <Alert severity="error">This is an error Alert.</Alert>
        </View>

        {/* Alerts with Titles */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            With Titles
          </Text>
          <Alert severity="success" title="Success">
            Your action was completed successfully.
          </Alert>
          <Alert severity="info" title="Information">
            Here&apos;s some helpful information for you.
          </Alert>
          <Alert severity="warning" title="Warning">
            Please check your input before proceeding.
          </Alert>
          <Alert severity="error" title="Error">
            Something went wrong. Please try again.
          </Alert>
        </View>

        {/* Soft Variant */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Soft Variant
          </Text>
          <Alert severity="success" variant="soft">
            This is a soft success Alert.
          </Alert>
          <Alert severity="info" variant="soft">
            This is a soft info Alert.
          </Alert>
          <Alert severity="warning" variant="soft">
            This is a soft warning Alert.
          </Alert>
          <Alert severity="error" variant="soft">
            This is a soft error Alert.
          </Alert>
        </View>

        {/* Soft Variant with Titles */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Soft Variant with Titles
          </Text>
          <Alert severity="success" variant="soft" title="Success">
            Your changes have been saved successfully.
          </Alert>
          <Alert severity="info" variant="soft" title="Tip">
            You can customize the appearance of alerts using the variant prop.
          </Alert>
          <Alert severity="warning" variant="soft" title="Caution">
            This action cannot be undone once confirmed.
          </Alert>
          <Alert severity="error" variant="soft" title="Access Denied">
            You don&apos;t have permission to perform this action.
          </Alert>
        </View>

        {/* Without Icons */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Without Icons
          </Text>
          <Alert severity="success" showIcon={false}>
            Success alert without icon.
          </Alert>
          <Alert severity="info" showIcon={false} title="No Icon">
            Info alert without icon but with title.
          </Alert>
        </View>

        {/* Long Content */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Long Content
          </Text>
          <Alert severity="info" title="Detailed Information">
            This is an example of an alert with longer content. It demonstrates
            how the alert component handles multiple lines of text and maintains
            proper spacing and alignment even when the content wraps to multiple
            lines. The icon stays aligned to the top while the text flows
            naturally.
          </Alert>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
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
});
