import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  Screen,
  toast,
  ToastProvider,
  Typography,
  useTheme,
  useToast,
} from "@joe111/neo-ui";
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
          variant="body"
          style={[styles.demoTitle, { color: theme.colors.textSecondary }]}
        >
          {title}
        </Typography>
      )}
      <View style={styles.demoContent}>{children}</View>
    </View>
  );

  const showLocalToast = () => {
    showToast({
      message: `Local scoped toast ${counter}`,
    });
    setCounter(counter + 1);
  };

  return (
    <Screen title="Toast" options={{ headerLargeTitle: true }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Global Toast Examples - These work from anywhere in your app */}
        <Section title="Global Toast Examples">
          <Demo title="Basic Global Toast Variants">
            <Typography
              style={{
                color: theme.colors.textSecondary,
                marginBottom: 12,
                fontSize: 14,
              }}
            >
              Global toast methods work from anywhere in your app when
              RootToastProvider is wrapped around your app root. These toasts
              appear above all content and navigation headers.
            </Typography>
            <View style={styles.row}>
              <Button size="sm" onPress={() => toast.show("Default toast")}>
                Default
              </Button>
              <Button
                size="sm"
                color="success"
                onPress={() => toast.success("Success!")}
              >
                Success
              </Button>
              <Button
                size="sm"
                color="error"
                onPress={() => toast.error("Error occurred!")}
              >
                Error
              </Button>
            </View>
            <View style={styles.row}>
              <Button
                size="sm"
                color="warning"
                onPress={() => toast.warning("Warning message")}
              >
                Warning
              </Button>
              <Button
                size="sm"
                color="primary"
                onPress={() => toast.info("Info notification")}
              >
                Info
              </Button>
            </View>
          </Demo>

          <Demo title="Global Toasts with Position">
            <View style={styles.row}>
              <Button
                size="sm"
                onPress={() =>
                  toast.success("Top success!", { position: "top" })
                }
              >
                Top Success
              </Button>
              <Button
                size="sm"
                color="error"
                onPress={() =>
                  toast.error("Bottom error!", { position: "bottom" })
                }
              >
                Bottom Error
              </Button>
            </View>
          </Demo>

          <Demo title="Global Toasts with Title">
            <View style={styles.column}>
              <Button
                onPress={() => toast.success("Upload completed successfully!")}
              >
                Success Message
              </Button>
              <Button
                variant="outline"
                onPress={() =>
                  toast.warning("This action cannot be undone", {
                    position: "bottom",
                  })
                }
              >
                Warning at Bottom
              </Button>
            </View>
          </Demo>

          <Demo title="Persistent Global Toasts">
            <View style={styles.column}>
              <Button
                variant="outline"
                onPress={() =>
                  toast.warning("This toast stays until dismissed", {
                    duration: "infinite",
                  })
                }
              >
                Persistent Toast
              </Button>
              <Button variant="outline" onPress={() => toast.hideAll()}>
                Clear All Global Toasts
              </Button>
            </View>
          </Demo>
        </Section>

        {/* Interactive Global Toasts */}
        <Section title="Interactive Global Toasts">
          <Demo title="Global Toasts with Actions">
            <View style={styles.column}>
              <Button
                onPress={() =>
                  toast.success("Changes saved automatically", {
                    action: {
                      label: "View",
                      onPress: () => toast.info("Action button pressed!"),
                    },
                  })
                }
              >
                Toast with Action
              </Button>

              <Button
                variant="outline"
                onPress={() =>
                  toast.error("Network connection lost. Retrying...", {
                    duration: "infinite",
                    action: {
                      label: "Retry",
                      onPress: () => toast.success("Retrying connection..."),
                    },
                  })
                }
              >
                Network Error with Action
              </Button>
            </View>
          </Demo>

          <Demo title="Long Content">
            <Button
              onPress={() =>
                toast.info(
                  "This is a very long toast message that should wrap to multiple lines and still look good in the UI. It contains a lot of text to test how the component handles longer content.",
                  { duration: 6000 }
                )
              }
            >
              Show Long Message
            </Button>
          </Demo>

          <Demo title="Custom Icon">
            <Button
              variant="outline"
              onPress={() =>
                toast.info("Achievement Unlocked! You've earned a gold star!", {
                  icon: (
                    <Ionicons
                      name="star"
                      size={20}
                      color={theme.colors.warning}
                      style={{ marginRight: 12 }}
                    />
                  ),
                })
              }
            >
              Custom Icon Toast
            </Button>
          </Demo>

          <Demo title="No Close Button">
            <Button
              variant="outline"
              onPress={() =>
                toast.info("This toast has no close button", {
                  showCloseButton: false,
                  duration: 3000,
                })
              }
            >
              No Close Button
            </Button>
          </Demo>
        </Section>

        {/* Real-world Examples */}
        <Section title="Real-world Examples">
          <Demo title="Common Use Cases">
            <View style={styles.column}>
              <Button
                variant="outline"
                onPress={() =>
                  toast.success("Profile updated successfully", {
                    action: { label: "View", onPress: () => {} },
                  })
                }
              >
                Save Success
              </Button>

              <Button
                variant="outline"
                onPress={() =>
                  toast.success("File uploaded successfully", {
                    position: "bottom",
                  })
                }
              >
                Upload Complete
              </Button>

              <Button
                variant="outline"
                onPress={() =>
                  toast.warning("Are you sure you want to delete this item?", {
                    action: {
                      label: "Delete",
                      onPress: () => toast.success("Item deleted"),
                    },
                    duration: "infinite",
                  })
                }
              >
                Confirmation Dialog
              </Button>
            </View>
          </Demo>

          <Demo title="Multiple Sequential Toasts">
            <Button
              variant="outline"
              onPress={() => {
                // Show multiple toasts in sequence
                for (let i = 1; i <= 3; i++) {
                  setTimeout(() => {
                    const variants = ["info", "warning", "success"] as const;
                    const variant = variants[i - 1];
                    toast[variant](`Toast ${i} of 3`);
                  }, i * 500);
                }
              }}
            >
              Show Multiple Toasts
            </Button>
          </Demo>
        </Section>

        {/* Local Scoped Toast Examples */}
        <Section title="Local Scoped Toast Examples">
          <Demo title="useToast() hook - Local Component Toasts">
            <Typography
              style={{
                color: theme.colors.textSecondary,
                marginBottom: 12,
                fontSize: 14,
              }}
            >
              These examples use the useToast() hook which only works within
              components that are wrapped by a ToastProvider. The toasts will
              appear in the safe area within the screen bounds, not above
              navigation.
            </Typography>
            <View style={styles.column}>
              <Button onPress={showLocalToast}>Local Scoped Toast</Button>

              <Button
                variant="outline"
                onPress={() =>
                  showToast({
                    message: "This is a local success message",
                    variant: "success",
                    action: { label: "OK", onPress: () => {} },
                  })
                }
              >
                Local Success
              </Button>

              <Button variant="outline" onPress={() => hideAllToasts()}>
                Clear Local Toasts Only
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
                {`// Global toast methods (work anywhere)
import { toast } from "@joe111/neo-ui/Toast";

toast.success("Operation completed!");
toast.error("Something went wrong");
toast.warning("Please check your input");
toast.info("New features available");

// With options
toast.success("Upload complete!", {
  title: "Success",
  position: "bottom",
  duration: 5000
});`}
              </Typography>
            </View>
          </Demo>

          <Demo title="Local Component Usage">
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
});`}
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
import { RootToastProvider } from "@joe111/neo-ui/Toast";

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
