import { Button } from "@/core/components/Button";
import { ToastProvider, useToast } from "@/core/components/Toast";
import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

function ToastScreenContent() {
  const { theme } = useTheme();
  const { showToast, hideAllToasts } = useToast();
  const [counter, setCounter] = useState(1);

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <View style={styles.section}>
      <Typography
        variant="h2"
        style={[styles.sectionTitle, { color: theme.colors.text }]}
      >
        {title}
      </Typography>
      {children}
    </View>
  );

  const Demo = ({
    title,
    children,
  }: {
    title?: string;
    children: React.ReactNode;
  }) => (
    <View style={[styles.demo, { backgroundColor: theme.colors.surface }]}>
      {title && (
        <Typography
          variant="bodyMedium"
          style={[styles.demoTitle, { color: theme.colors.textSecondary }]}
        >
          {title}
        </Typography>
      )}
      <View style={styles.demoContent}>{children}</View>
    </View>
  );

  const showBasicToast = () => {
    showToast({
      message: `Basic toast message ${counter}`,
    });
    setCounter(counter + 1);
  };

  const showSuccessToast = () => {
    showToast({
      message: "Operation completed successfully!",
      variant: "success",
    });
  };

  const showErrorToast = () => {
    showToast({
      message: "Something went wrong. Please try again.",
      variant: "error",
    });
  };

  const showWarningToast = () => {
    showToast({
      message: "Warning: This action cannot be undone.",
      variant: "warning",
    });
  };

  const showInfoToast = () => {
    showToast({
      message: "New features are available in the latest update.",
      variant: "info",
    });
  };

  const showToastWithAction = () => {
    showToast({
      message: "Your changes have been saved automatically.",
      variant: "success",
      action: {
        label: "View",
        onPress: () => {
          showToast({
            message: "Action button pressed!",
            variant: "info",
          });
        },
      },
    });
  };

  const showLongToast = () => {
    showToast({
      message:
        "This is a very long toast message that should wrap to multiple lines and still look good in the UI. It contains a lot of text to test how the component handles longer content.",
      variant: "default",
      duration: 6000,
    });
  };

  const showPersistentToast = () => {
    showToast({
      message: "This toast will stay until manually dismissed.",
      variant: "warning",
      duration: "infinite",
    });
  };

  const showBottomToast = () => {
    showToast({
      message: "This toast appears at the bottom",
      variant: "info",
      position: "bottom",
    });
  };

  const showToastWithTitle = () => {
    showToast({
      title: "Upload Complete",
      message: "Your file has been uploaded successfully",
      variant: "success",
    });
  };

  const showCustomIconToast = () => {
    showToast({
      title: "Achievement Unlocked!",
      message: "You've earned a gold star",
      variant: "info",
      icon: (
        <Ionicons
          name="star"
          size={20}
          color={theme.colors.warning}
          style={{ marginRight: 12 }}
        />
      ),
    });
  };

  const showNoCloseButtonToast = () => {
    showToast({
      message: "This toast has no close button",
      variant: "info",
      showCloseButton: false,
      duration: 3000,
    });
  };

  return (
    <Screen title="Toast" options={{ headerLargeTitle: true }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Basic Variants */}
        <Section title="Basic Variants">
          <Demo title="Different Toast Types">
            <View style={styles.row}>
              <Button size="sm" onPress={showBasicToast}>
                Default
              </Button>
              <Button size="sm" color="success" onPress={showSuccessToast}>
                Success
              </Button>
              <Button size="sm" color="error" onPress={showErrorToast}>
                Error
              </Button>
            </View>
            <View style={styles.row}>
              <Button size="sm" color="warning" onPress={showWarningToast}>
                Warning
              </Button>
              <Button size="sm" color="primary" onPress={showInfoToast}>
                Info
              </Button>
            </View>
          </Demo>
        </Section>

        {/* With Actions */}
        <Section title="Interactive Toasts">
          <Demo title="Toast with Action Button">
            <Button onPress={showToastWithAction}>
              Show Toast with Action
            </Button>
          </Demo>

          <Demo title="Long Content">
            <Button onPress={showLongToast}>Show Long Message</Button>
          </Demo>

          <Demo title="Persistent Toast">
            <Button variant="outline" onPress={showPersistentToast}>
              Show Persistent Toast
            </Button>
          </Demo>
        </Section>

        {/* Positions */}
        <Section title="Positioning">
          <Demo title="Different Positions">
            <View style={styles.row}>
              <Button
                size="sm"
                onPress={() =>
                  showToast({
                    message: "Top position (default)",
                    position: "top",
                  })
                }
              >
                Top
              </Button>
              <Button size="sm" onPress={showBottomToast}>
                Bottom
              </Button>
            </View>
          </Demo>

          <Demo title="Toast with Title">
            <Button onPress={showToastWithTitle}>Show Toast with Title</Button>
          </Demo>
        </Section>

        {/* Customization */}
        <Section title="Customization">
          <Demo title="Custom Options">
            <View style={styles.column}>
              <Button variant="outline" onPress={showCustomIconToast}>
                Custom Icon
              </Button>
              <Button variant="outline" onPress={showNoCloseButtonToast}>
                No Close Button
              </Button>
            </View>
          </Demo>
        </Section>

        {/* Controls */}
        <Section title="Controls">
          <Demo title="Toast Management">
            <View style={styles.column}>
              <Button variant="destructive" onPress={hideAllToasts}>
                Clear All Toasts
              </Button>

              <Button
                variant="outline"
                onPress={() => {
                  // Show multiple toasts
                  for (let i = 1; i <= 3; i++) {
                    setTimeout(() => {
                      showToast({
                        message: `Toast ${i} of 3`,
                        variant:
                          i === 1 ? "info" : i === 2 ? "warning" : "success",
                      });
                    }, i * 500);
                  }
                }}
              >
                Show Multiple Toasts
              </Button>
            </View>
          </Demo>
        </Section>

        {/* Code Examples */}
        <Section title="Usage Examples">
          <Demo title="Basic Usage">
            <View
              style={[
                styles.codeBlock,
                {
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.border,
                },
              ]}
            >
              <Typography
                style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  color: theme.colors.text,
                }}
              >
                {`// Using the hook within a component
const { showToast } = useToast();

showToast({
  message: "Hello World!",
  variant: "success"
});

// Or using the global toast method
// (requires RootToastProvider)
import { toast } from "@/core/components/Toast";

toast.success("Operation completed!");
toast.error("Something went wrong");
toast.warning("Please check your input");`}
              </Typography>
            </View>
          </Demo>

          <Demo title="Root Provider Setup">
            <View
              style={[
                styles.codeBlock,
                {
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.border,
                },
              ]}
            >
              <Typography
                style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  color: theme.colors.text,
                }}
              >
                {`// In your app's root component (_layout.tsx)
import { RootToastProvider } from "@/core/components/Toast";

export default function RootLayout() {
  return (
    <RootToastProvider>
      {/* Your app content */}
    </RootToastProvider>
  );
}`}
              </Typography>
            </View>
          </Demo>
        </Section>

        {/* Usage Examples */}
        <Section title="Common Use Cases">
          <Demo title="Real-world Examples">
            <View style={styles.column}>
              <Button
                variant="outline"
                onPress={() =>
                  showToast({
                    message: "Profile updated successfully",
                    variant: "success",
                    action: { label: "View", onPress: () => {} },
                  })
                }
              >
                Save Success
              </Button>

              <Button
                variant="outline"
                onPress={() =>
                  showToast({
                    message: "Network connection lost. Retrying...",
                    variant: "error",
                    duration: "infinite",
                    action: { label: "Retry", onPress: () => {} },
                  })
                }
              >
                Network Error
              </Button>

              <Button
                variant="outline"
                onPress={() =>
                  showToast({
                    message: "File uploaded successfully",
                    variant: "success",
                    position: "bottom",
                  })
                }
              >
                Upload Complete
              </Button>

              <Button
                variant="outline"
                onPress={() =>
                  showToast({
                    message: "Are you sure you want to delete this item?",
                    variant: "warning",
                    action: {
                      label: "Delete",
                      onPress: () =>
                        showToast({
                          message: "Item deleted",
                          variant: "success",
                        }),
                    },
                    duration: "infinite",
                  })
                }
              >
                Confirmation
              </Button>
            </View>
          </Demo>
        </Section>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </Screen>
  );
}

export default function ToastScreen() {
  return (
    <ToastProvider maxToasts={5}>
      <ToastScreenContent />
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    marginBottom: 16,
    fontWeight: "600",
  },
  demo: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  demoTitle: {
    marginBottom: 12,
    fontWeight: "500",
  },
  demoContent: {
    // Container for demo content
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 8,
  },
  column: {
    gap: 12,
  },
  codeBlock: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 8,
  },
  bottomPadding: {
    height: 32,
  },
});
