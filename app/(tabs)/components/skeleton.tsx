import { Avatar } from "@/core/components/Avatar";
import { Skeleton } from "@/core/components/Skeleton";
import {
  SkeletonAnimation,
  SkeletonVariant,
} from "@/core/components/Skeleton/types";
import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Switch, View } from "react-native";

// Define examples for demonstration
const VARIANTS: SkeletonVariant[] = [
  "text",
  "circular",
  "rectangular",
  "rounded",
];
const ANIMATIONS: SkeletonAnimation[] = ["pulse", "wave", false];

export default function SkeletonScreen() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

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
      <View style={styles.skeletonContainer}>{children}</View>
    </View>
  );

  const renderBasicUsage = () => {
    return (
      <ExampleContainer label="Basic usage - Replace content when loading">
        <View style={styles.cardExample}>
          {loading ? (
            <View
              style={[styles.card, { backgroundColor: theme.colors.surface }]}
            >
              <Skeleton variant="circular" width={40} height={40} />
              <View style={styles.cardContent}>
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="60%" />
              </View>
            </View>
          ) : (
            <View
              style={[styles.card, { backgroundColor: theme.colors.surface }]}
            >
              <Avatar src="https://i.pravatar.cc/40" size="md" />
              <View style={styles.cardContent}>
                <Typography variant="h3">John Doe</Typography>
                <Typography variant="body" color={theme.colors.textSecondary}>
                  Software Engineer
                </Typography>
              </View>
            </View>
          )}
        </View>
        <View style={styles.switchContainer}>
          <Typography variant="body">Toggle Loading: </Typography>
          <Switch
            value={loading}
            onValueChange={setLoading}
            trackColor={{
              false: theme.colors.border,
              true: theme.colors.primary,
            }}
            thumbColor={theme.colors.background}
          />
        </View>
      </ExampleContainer>
    );
  };

  const renderVariantExamples = () => {
    return VARIANTS.map((variant) => (
      <ExampleContainer key={variant} label={`variant="${variant}"`}>
        <View style={styles.variantRow}>
          <Skeleton
            variant={variant}
            width={variant === "text" ? 200 : 60}
            height={variant === "text" ? undefined : 60}
            sx={variant === "text" ? { fontSize: 16 } : undefined}
          />
          <Typography variant="bodySmall" style={styles.variantLabel}>
            {variant}
          </Typography>
        </View>
      </ExampleContainer>
    ));
  };

  const renderAnimationExamples = () => {
    return ANIMATIONS.map((animation, index) => (
      <ExampleContainer
        key={index}
        label={`animation=${animation === false ? "false" : `"${animation}"`}`}
      >
        <Skeleton
          variant="rectangular"
          width={150}
          height={60}
          animation={animation}
        />
      </ExampleContainer>
    ));
  };

  const renderInferredDimensions = () => {
    return (
      <>
        <ExampleContainer label="Text variants with different font sizes">
          <View style={styles.textExamples}>
            <Typography variant="h1">
              {loading ? <Skeleton /> : "h1"}
            </Typography>
            <Typography variant="h3">
              {loading ? <Skeleton /> : "h3"}
            </Typography>
            <Typography variant="body">
              {loading ? <Skeleton /> : "body1"}
            </Typography>
            <Typography variant="bodySmall">
              {loading ? <Skeleton /> : "caption"}
            </Typography>
          </View>
        </ExampleContainer>

        <ExampleContainer label="Inferred from children">
          <View style={styles.inferredExample}>
            {loading ? (
              <Skeleton variant="circular">
                <Avatar size="lg" />
              </Skeleton>
            ) : (
              <Avatar src="https://i.pravatar.cc/60" size="lg" />
            )}
          </View>
        </ExampleContainer>
      </>
    );
  };

  const renderColorCustomization = () => {
    return (
      <ExampleContainer label="Custom background color">
        <View style={styles.colorExample}>
          <View
            style={[
              styles.darkBackground,
              { backgroundColor: theme.colors.text },
            ]}
          >
            <Skeleton
              variant="rectangular"
              width={150}
              height={60}
              sx={{ bgcolor: theme.colors.surface }}
            />
          </View>
        </View>
      </ExampleContainer>
    );
  };

  const renderMediaExample = () => {
    const mediaItems = [
      {
        image: "https://picsum.photos/210/118?random=1",
        title: "React Native Tutorial: Building Modern Apps",
        channel: "Code Academy",
        views: "125k views",
        time: "2 days ago",
      },
      {
        image: "https://picsum.photos/210/118?random=2",
        title: "Advanced TypeScript Patterns",
        channel: "Dev Channel",
        views: "89k views",
        time: "1 week ago",
      },
      {
        image: "https://picsum.photos/210/118?random=3",
        title: "UI Design Best Practices",
        channel: "Design Hub",
        views: "201k views",
        time: "3 days ago",
      },
    ];

    return (
      <ExampleContainer label="Media loading example (YouTube-style)">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.mediaContainer}>
            {(loading ? Array.from(new Array(3)) : mediaItems).map(
              (item, index) => (
                <View key={index} style={styles.mediaItem}>
                  {item ? (
                    <Image
                      source={{ uri: item.image }}
                      style={styles.mediaImage}
                    />
                  ) : (
                    <Skeleton variant="rectangular" width={210} height={118} />
                  )}

                  <View style={styles.mediaContent}>
                    {item ? (
                      <>
                        <Typography variant="body" numberOfLines={2}>
                          {item.title}
                        </Typography>
                        <Typography
                          variant="bodySmall"
                          color={theme.colors.textSecondary}
                        >
                          {item.channel}
                        </Typography>
                        <Typography
                          variant="bodySmall"
                          color={theme.colors.textSecondary}
                        >
                          {`${item.views} • ${item.time}`}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Skeleton variant="text" width="100%" />
                        <Skeleton variant="text" width="80%" />
                        <Skeleton variant="text" width="60%" />
                      </>
                    )}
                  </View>
                </View>
              )
            )}
          </View>
        </ScrollView>
      </ExampleContainer>
    );
  };

  const renderCombinedExamples = () => {
    return (
      <ExampleContainer label="Card with avatar and content">
        <View
          style={[
            styles.combinedCard,
            { backgroundColor: theme.colors.surface },
          ]}
        >
          {loading ? (
            <>
              <View style={styles.combinedHeader}>
                <Skeleton
                  variant="circular"
                  width={40}
                  height={40}
                  animation="wave"
                />
                <View style={styles.combinedHeaderText}>
                  <Skeleton
                    variant="text"
                    width="80%"
                    height={10}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    width="40%"
                    height={10}
                    animation="wave"
                  />
                </View>
              </View>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={140}
                animation="wave"
              />
              <View style={styles.combinedContent}>
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" width="80%" animation="wave" />
              </View>
            </>
          ) : (
            <>
              <View style={styles.combinedHeader}>
                <Avatar src="https://i.pravatar.cc/40?img=1" size="md" />
                <View style={styles.combinedHeaderText}>
                  <Typography variant="h3">Sarah Chen</Typography>
                  <Typography
                    variant="bodySmall"
                    color={theme.colors.textSecondary}
                  >
                    2 hours ago
                  </Typography>
                </View>
              </View>
              <View
                style={[
                  styles.imagePlaceholder,
                  { backgroundColor: theme.colors.border },
                ]}
              >
                <Typography variant="body" color={theme.colors.textSecondary}>
                  Image Content
                </Typography>
              </View>
              <View style={styles.combinedContent}>
                <Typography variant="body">
                  Beautiful sunset from my hiking trip today. The view was
                  absolutely breathtaking!
                </Typography>
              </View>
            </>
          )}
        </View>
      </ExampleContainer>
    );
  };

  return (
    <Screen>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Typography variant="h1" style={styles.title}>
          Skeleton
        </Typography>
        <Typography variant="body" color={theme.colors.textSecondary}>
          Display a placeholder preview of your content before the data gets
          loaded to reduce load-time frustration.
        </Typography>

        <Section title="Basic Usage">{renderBasicUsage()}</Section>

        <Section title="Variants">{renderVariantExamples()}</Section>

        <Section title="Animations">{renderAnimationExamples()}</Section>

        <Section title="Inferring Dimensions">
          {renderInferredDimensions()}
        </Section>

        <Section title="Color Customization">
          {renderColorCustomization()}
        </Section>

        <Section title="Media Example">{renderMediaExample()}</Section>

        <Section title="Combined Examples">{renderCombinedExamples()}</Section>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 8,
  },
  section: {
    marginTop: 32,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  exampleContainer: {
    marginBottom: 24,
  },
  label: {
    marginBottom: 8,
    fontFamily: "monospace",
  },
  skeletonContainer: {
    paddingVertical: 8,
  },
  cardExample: {
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  cardContent: {
    marginLeft: 12,
    flex: 1,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  variantRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  variantLabel: {
    marginLeft: 12,
  },
  textExamples: {
    gap: 8,
  },
  inferredExample: {
    alignItems: "flex-start",
  },
  colorExample: {
    alignItems: "flex-start",
  },
  darkBackground: {
    padding: 16,
    borderRadius: 8,
  },
  mediaContainer: {
    flexDirection: "row",
    gap: 12,
  },
  mediaItem: {
    width: 210,
  },
  mediaImage: {
    width: 210,
    height: 118,
    borderRadius: 8,
  },
  mediaContent: {
    paddingTop: 8,
    gap: 4,
  },
  combinedCard: {
    borderRadius: 12,
    padding: 16,
  },
  combinedHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  combinedHeaderText: {
    marginLeft: 12,
    flex: 1,
    gap: 4,
  },
  imagePlaceholder: {
    width: "100%",
    height: 140,
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  combinedContent: {
    gap: 4,
  },
});
