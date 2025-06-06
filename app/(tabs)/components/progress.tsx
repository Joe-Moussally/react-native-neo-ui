import { Button } from "@/core/components/Button";
import { Progress } from "@/core/components/Progress";
import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ProgressScreen() {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(25);
  const [isAnimating, setIsAnimating] = useState(true);

  // Auto-increment progress for demo only for animated progress
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAnimating) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 100);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAnimating]);

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

  return (
    <Screen title="Progress" options={{ headerLargeTitle: true }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Native Progress */}
        <Section title="Native Progress">
          <Demo title="Basic Native (ActivityIndicator)">
            <View style={styles.row}>
              <Progress variant="native" />
              <Progress variant="native" color="secondary" />
              <Progress variant="native" color="success" />
            </View>
          </Demo>

          <Demo title="Sizes">
            <View style={styles.row}>
              <Progress variant="native" size="sm" />
              <Progress variant="native" size="md" />
              <Progress variant="native" size="lg" />
            </View>
          </Demo>

          <Demo title="Colors">
            <View style={styles.row}>
              <Progress variant="native" color="primary" />
              <Progress variant="native" color="secondary" />
              <Progress variant="native" color="accent" />
              <Progress variant="native" color="success" />
              <Progress variant="native" color="error" />
              <Progress variant="native" color="warning" />
            </View>
          </Demo>

          <Demo title="Controlled">
            <View style={styles.controlDemo}>
              <Progress variant="native" animating={isAnimating} />
              <Button
                variant="outline"
                size="sm"
                onPress={() => setIsAnimating(!isAnimating)}
                style={styles.controlButton}
              >
                {isAnimating ? "Stop" : "Start"}
              </Button>
            </View>
          </Demo>
        </Section>

        {/* Circular Progress */}
        <Section title="Circular Progress">
          <Demo title="Indeterminate">
            <View style={styles.row}>
              <Progress variant="circular" />
              <Progress variant="circular" color="secondary" />
              <Progress variant="circular" color="success" />
            </View>
          </Demo>

          <Demo title="Determinate">
            <View style={styles.row}>
              <Progress variant="circular" mode="determinate" value={25} />
              <Progress
                variant="circular"
                mode="determinate"
                value={50}
                color="secondary"
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={75}
                color="success"
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={100}
                color="accent"
              />
            </View>
          </Demo>

          <Demo title="With Percentage">
            <View style={styles.row}>
              <Progress
                variant="circular"
                mode="determinate"
                value={progress}
                showPercentage
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={65}
                color="secondary"
                showPercentage
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={90}
                color="success"
                showPercentage
              />
            </View>
          </Demo>

          <Demo title="Sizes">
            <View style={styles.row}>
              <Progress
                variant="circular"
                size="sm"
                mode="determinate"
                value={75}
              />
              <Progress
                variant="circular"
                size="md"
                mode="determinate"
                value={75}
              />
              <Progress
                variant="circular"
                size="lg"
                mode="determinate"
                value={75}
              />
            </View>
          </Demo>

          <Demo title="Custom Stroke Width">
            <View style={styles.row}>
              <Progress
                variant="circular"
                mode="determinate"
                value={60}
                strokeWidth={2}
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={60}
                strokeWidth={4}
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={60}
                strokeWidth={6}
              />
            </View>
          </Demo>

          <Demo title="Colors">
            <View style={styles.row}>
              <Progress
                variant="circular"
                mode="determinate"
                value={progress}
                color="primary"
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={progress}
                color="secondary"
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={progress}
                color="accent"
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={progress}
                color="success"
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={progress}
                color="error"
              />
              <Progress
                variant="circular"
                mode="determinate"
                value={progress}
                color="warning"
              />
            </View>
          </Demo>
        </Section>

        {/* Linear Progress */}
        <Section title="Linear Progress">
          <Demo title="Indeterminate">
            <View style={styles.column}>
              <Progress variant="linear" />
              <Progress variant="linear" color="secondary" />
              <Progress variant="linear" color="success" />
            </View>
          </Demo>

          <Demo title="Determinate">
            <View style={styles.column}>
              <Progress variant="linear" mode="determinate" value={25} />
              <Progress
                variant="linear"
                mode="determinate"
                value={50}
                color="secondary"
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={75}
                color="success"
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={100}
                color="accent"
              />
            </View>
          </Demo>

          <Demo title="With Percentage">
            <View style={styles.column}>
              <Progress
                variant="linear"
                mode="determinate"
                value={progress}
                showPercentage
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={65}
                color="secondary"
                showPercentage
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={90}
                color="success"
                showPercentage
              />
            </View>
          </Demo>

          <Demo title="Sizes (Height)">
            <View style={styles.column}>
              <Progress
                variant="linear"
                size="sm"
                mode="determinate"
                value={75}
              />
              <Progress
                variant="linear"
                size="md"
                mode="determinate"
                value={75}
              />
              <Progress
                variant="linear"
                size="lg"
                mode="determinate"
                value={75}
              />
            </View>
          </Demo>

          <Demo title="Custom Height">
            <View style={styles.column}>
              <Progress
                variant="linear"
                mode="determinate"
                value={60}
                height={4}
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={60}
                height={8}
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={60}
                height={12}
              />
            </View>
          </Demo>

          <Demo title="Custom Border Radius">
            <View style={styles.column}>
              <Progress
                variant="linear"
                mode="determinate"
                value={75}
                borderRadius={2}
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={75}
                borderRadius={8}
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={75}
                borderRadius={16}
              />
            </View>
          </Demo>

          <Demo title="Colors">
            <View style={styles.column}>
              <Progress
                variant="linear"
                mode="determinate"
                value={progress}
                color="primary"
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={progress}
                color="secondary"
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={progress}
                color="accent"
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={progress}
                color="success"
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={progress}
                color="error"
              />
              <Progress
                variant="linear"
                mode="determinate"
                value={progress}
                color="warning"
              />
            </View>
          </Demo>
        </Section>

        {/* Combined Examples */}
        <Section title="Combined Examples">
          <Demo title="Loading States">
            <View style={styles.column}>
              <View style={styles.loadingExample}>
                <Progress variant="native" size="sm" />
                <Typography
                  variant="bodyMedium"
                  style={{ color: theme.colors.textSecondary, marginLeft: 12 }}
                >
                  Loading...
                </Typography>
              </View>

              <View style={styles.loadingExample}>
                <Progress variant="circular" size="sm" />
                <Typography
                  variant="bodyMedium"
                  style={{ color: theme.colors.textSecondary, marginLeft: 12 }}
                >
                  Processing...
                </Typography>
              </View>

              <Progress variant="linear" />
              <Typography
                variant="bodySmall"
                style={{ color: theme.colors.textSecondary, marginTop: 4 }}
              >
                Downloading updates...
              </Typography>
            </View>
          </Demo>

          <Demo title="File Upload Progress">
            <View style={styles.column}>
              <View style={styles.uploadExample}>
                <Progress
                  variant="circular"
                  mode="determinate"
                  value={progress}
                  showPercentage
                  size="sm"
                />
                <View style={styles.uploadInfo}>
                  <Typography
                    variant="bodyMedium"
                    style={{ color: theme.colors.text }}
                  >
                    document.pdf
                  </Typography>
                  <Typography
                    variant="bodySmall"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {progress < 100 ? "Uploading..." : "Upload complete"}
                  </Typography>
                </View>
              </View>
              <Progress variant="linear" mode="determinate" value={progress} />
            </View>
          </Demo>
        </Section>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </Screen>
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
    gap: 16,
    flexWrap: "wrap",
  },
  column: {
    gap: 16,
  },
  controlDemo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  controlButton: {
    minWidth: 80,
  },
  loadingExample: {
    flexDirection: "row",
    alignItems: "center",
  },
  uploadExample: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  uploadInfo: {
    flex: 1,
  },
  bottomPadding: {
    height: 32,
  },
});
