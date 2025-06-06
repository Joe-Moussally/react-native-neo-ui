import { Box } from "@/core/components/Box";
import { Rating } from "@/core/components/Rating";
import { RatingSize } from "@/core/components/Rating/types";
import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Define examples for demonstration
const SIZES: RatingSize[] = ["small", "medium", "large"];

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const getLabelText = (value: number) => {
  return `${value} Star${value !== 1 ? "s" : ""}`;
};

export default function RatingScreen() {
  const { theme } = useTheme();
  const [value, setValue] = useState<number>(2);
  const [hover, setHover] = useState(-1);
  const [controlledValue, setControlledValue] = useState<number | null>(3);
  const [hoverFeedbackValue, setHoverFeedbackValue] = useState<number | null>(
    2
  );
  const [hoverFeedbackHover, setHoverFeedbackHover] = useState(-1);

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
      <View style={styles.ratingContainer}>{children}</View>
    </View>
  );

  const renderBasicExamples = () => {
    return (
      <>
        <ExampleContainer label="Controlled">
          <Rating
            name="simple-controlled"
            value={controlledValue}
            onChange={(event, newValue) => {
              setControlledValue(newValue);
            }}
          />
        </ExampleContainer>
        <ExampleContainer label="Uncontrolled">
          <Rating
            name="simple-uncontrolled"
            onChange={(event, newValue) => {
              console.log(newValue);
            }}
            defaultValue={2}
          />
        </ExampleContainer>
        <ExampleContainer label="Read only">
          <Rating name="read-only" value={value} readOnly />
        </ExampleContainer>
        <ExampleContainer label="Disabled">
          <Rating name="disabled" value={value} disabled />
        </ExampleContainer>
        <ExampleContainer label="No rating given">
          <Rating name="no-value" value={null} />
        </ExampleContainer>
      </>
    );
  };

  const renderPrecisionExamples = () => {
    return (
      <>
        <ExampleContainer label="precision={0.5}">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </ExampleContainer>
        <ExampleContainer label="precision={0.5} readOnly">
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </ExampleContainer>
      </>
    );
  };

  const renderHoverFeedbackExample = () => {
    return (
      <ExampleContainer label="Hover feedback">
        <View style={styles.hoverFeedbackContainer}>
          <Rating
            name="hover-feedback"
            value={hoverFeedbackValue}
            precision={0.5}
            onChange={(event, newValue) => {
              setHoverFeedbackValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHoverFeedbackHover(newHover);
            }}
            emptyIcon={
              <Ionicons name="star-outline" style={{ opacity: 0.55 }} />
            }
          />
          {hoverFeedbackValue !== null && (
            <Box style={{ marginLeft: 8 }}>
              <Typography variant="body">
                {
                  labels[
                    hoverFeedbackHover !== -1
                      ? hoverFeedbackHover
                      : hoverFeedbackValue
                  ]
                }
              </Typography>
            </Box>
          )}
        </View>
      </ExampleContainer>
    );
  };

  const renderSizeExamples = () => {
    return SIZES.map((size) => (
      <ExampleContainer key={size} label={`size="${size}"`}>
        <Rating name={`size-${size}`} defaultValue={2} size={size} />
      </ExampleContainer>
    ));
  };

  const renderCustomIconExamples = () => {
    return (
      <>
        <ExampleContainer label="Custom icon and color">
          <Rating
            name="customized-color"
            defaultValue={2}
            getLabelText={(value: number) =>
              `${value} Heart${value !== 1 ? "s" : ""}`
            }
            precision={0.5}
            icon={<Ionicons name="heart" />}
            emptyIcon={<Ionicons name="heart-outline" />}
          />
        </ExampleContainer>
        <ExampleContainer label="10 stars">
          <Rating name="customized-10" defaultValue={2} max={10} />
        </ExampleContainer>
        <ExampleContainer label="Custom thumbs icon">
          <Rating
            name="customized-thumbs"
            defaultValue={2}
            max={3}
            icon={<Ionicons name="thumbs-up" />}
            emptyIcon={<Ionicons name="thumbs-up-outline" />}
          />
        </ExampleContainer>
      </>
    );
  };

  const renderRadioGroupExample = () => {
    const customIcons: { [index: string]: { icon: string; label: string } } = {
      1: {
        icon: "sad",
        label: "Very Dissatisfied",
      },
      2: {
        icon: "sad-outline",
        label: "Dissatisfied",
      },
      3: {
        icon: "remove",
        label: "Neutral",
      },
      4: {
        icon: "happy-outline",
        label: "Satisfied",
      },
      5: {
        icon: "happy",
        label: "Very Satisfied",
      },
    };

    return (
      <ExampleContainer label="Radio group (highlightSelectedOnly)">
        <Rating
          name="highlight-selected-only"
          defaultValue={2}
          getLabelText={(value: number) => customIcons[value].label}
          highlightSelectedOnly
          icon={<Ionicons name="happy" />}
          emptyIcon={<Ionicons name="happy-outline" />}
        />
      </ExampleContainer>
    );
  };

  const renderCombinedExamples = () => {
    return (
      <>
        <ExampleContainer label="Large + Half precision + Custom icon">
          <Rating
            name="combined-1"
            defaultValue={3.5}
            precision={0.5}
            size="large"
            icon={<Ionicons name="star" />}
            emptyIcon={<Ionicons name="star-outline" />}
          />
        </ExampleContainer>
        <ExampleContainer label="Small + Max 3 + Hearts">
          <Rating
            name="combined-2"
            defaultValue={2}
            max={3}
            size="small"
            icon={<Ionicons name="heart" />}
            emptyIcon={<Ionicons name="heart-outline" />}
          />
        </ExampleContainer>
        <ExampleContainer label="Custom + Disabled">
          <Rating
            name="combined-3"
            defaultValue={4}
            disabled
            icon={<Ionicons name="diamond" />}
            emptyIcon={<Ionicons name="diamond-outline" />}
          />
        </ExampleContainer>
      </>
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
          Rating
        </Typography>
        <Typography variant="body" color={theme.colors.textSecondary}>
          Ratings provide insight regarding others' opinions and experiences,
          and can allow the user to submit a rating of their own.
        </Typography>

        <Section title="Basic Rating">{renderBasicExamples()}</Section>

        <Section title="Rating Precision">{renderPrecisionExamples()}</Section>

        <Section title="Hover Feedback">{renderHoverFeedbackExample()}</Section>

        <Section title="Sizes">{renderSizeExamples()}</Section>

        <Section title="Customization">{renderCustomIconExamples()}</Section>

        <Section title="Radio Group">{renderRadioGroupExample()}</Section>

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
  ratingContainer: {
    paddingVertical: 8,
  },
  hoverFeedbackContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
