import { Chip } from "@/core/components/Chip";
import { ChipSize, ChipVariant } from "@/core/components/Chip/types";
import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import { ThemeColor } from "@/core/theme/types";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Define examples for demonstration
const VARIANTS: ChipVariant[] = ["solid", "soft", "outline", "ghost"];
const SIZES: ChipSize[] = ["xs", "sm", "md", "lg"];
const COLORS: ThemeColor[] = [
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "error",
  "info",
];

export default function ChipScreen() {
  const { theme } = useTheme();
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [tags, setTags] = useState([
    "React Native",
    "TypeScript",
    "UI Components",
    "Design System",
  ]);

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
      <View style={styles.chipContainer}>{children}</View>
    </View>
  );

  const renderVariantExamples = () => {
    return VARIANTS.map((variant) => (
      <ExampleContainer key={variant} label={`variant="${variant}"`}>
        <Chip
          variant={variant}
          label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Chip`}
        />
      </ExampleContainer>
    ));
  };

  const renderSizeExamples = () => {
    return SIZES.map((size) => (
      <ExampleContainer key={size} label={`size="${size}"`}>
        <Chip size={size} label={`${size.toUpperCase()} Size`} />
      </ExampleContainer>
    ));
  };

  const renderColorExamples = () => {
    return COLORS.map((color) => (
      <ExampleContainer key={color} label={`color="${color}"`}>
        <Chip
          color={color}
          variant="soft"
          label={color.charAt(0).toUpperCase() + color.slice(1)}
        />
      </ExampleContainer>
    ));
  };

  const renderIconExamples = () => {
    const examples = [
      {
        label: "startIcon={<Ionicons />}",
        props: {
          startIcon: <Ionicons name="star" />,
          label: "Featured",
        },
      },
      {
        label: "endIcon={<Ionicons />}",
        props: {
          endIcon: <Ionicons name="chevron-down" />,
          label: "Dropdown",
        },
      },
      {
        label: "Both icons",
        props: {
          startIcon: <Ionicons name="person" />,
          endIcon: <Ionicons name="close" />,
          label: "User Tag",
        },
      },
      {
        label: "deletable={true}",
        props: {
          deletable: true,
          label: "Deletable",
          onDelete: () => console.log("Delete pressed"),
        },
      },
    ];

    return examples.map((example, index) => (
      <ExampleContainer key={index} label={example.label}>
        <Chip {...example.props} />
      </ExampleContainer>
    ));
  };

  const renderStateExamples = () => {
    const states = [
      {
        prop: "disabled={true}",
        disabled: true,
        label: "Disabled",
      },
      {
        prop: "selected={true}",
        selected: true,
        label: "Selected",
      },
      {
        prop: "selectable={true}",
        selectable: true,
        label: "Selectable",
        onPress: () => console.log("Chip selected"),
      },
    ];

    return states.map((state, index) => (
      <ExampleContainer key={index} label={state.prop}>
        <Chip {...state} />
      </ExampleContainer>
    ));
  };

  const renderInteractiveExamples = () => {
    const toggleSelection = (chipId: string) => {
      setSelectedChips((prev) =>
        prev.includes(chipId)
          ? prev.filter((id) => id !== chipId)
          : [...prev, chipId]
      );
    };

    const removeTag = (tagToRemove: string) => {
      setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
    };

    return (
      <>
        <ExampleContainer label="Selectable Chips">
          <View style={styles.chipsGrid}>
            {["Option 1", "Option 2", "Option 3", "Option 4"].map((option) => (
              <Chip
                key={option}
                label={option}
                variant="outline"
                selected={selectedChips.includes(option)}
                selectable
                onPress={() => toggleSelection(option)}
                margin="xs"
              />
            ))}
          </View>
        </ExampleContainer>

        <ExampleContainer label="Tag Management">
          <View style={styles.chipsGrid}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                variant="soft"
                color="secondary"
                deletable
                onDelete={() => removeTag(tag)}
                margin="xs"
              />
            ))}
          </View>
        </ExampleContainer>

        <ExampleContainer label="Category Filters">
          <View style={styles.chipsGrid}>
            <Chip
              startIcon={<Ionicons name="code" />}
              label="Development"
              variant="solid"
              color="primary"
              margin="xs"
            />
            <Chip
              startIcon={<Ionicons name="color-palette" />}
              label="Design"
              variant="solid"
              color="accent"
              margin="xs"
            />
            <Chip
              startIcon={<Ionicons name="rocket" />}
              label="Marketing"
              variant="solid"
              color="success"
              margin="xs"
            />
          </View>
        </ExampleContainer>
      </>
    );
  };

  const renderCombinedExamples = () => {
    const examples = [
      {
        label: "User Mention",
        props: {
          startIcon: <Ionicons name="person" />,
          label: "@johndoe",
          variant: "soft" as ChipVariant,
          color: "primary" as ThemeColor,
          size: "sm" as ChipSize,
        },
      },
      {
        label: "Status Badge",
        props: {
          startIcon: <Ionicons name="checkmark-circle" />,
          label: "Completed",
          variant: "solid" as ChipVariant,
          color: "success" as ThemeColor,
          size: "xs" as ChipSize,
        },
      },
      {
        label: "Warning Alert",
        props: {
          startIcon: <Ionicons name="warning" />,
          label: "Attention Required",
          variant: "outline" as ChipVariant,
          color: "warning" as ThemeColor,
          endIcon: <Ionicons name="chevron-forward" />,
        },
      },
    ];

    return examples.map((example, index) => (
      <ExampleContainer key={index} label={example.label}>
        <Chip {...example.props} />
      </ExampleContainer>
    ));
  };

  return (
    <Screen title="Chip">
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Section title="Variants">{renderVariantExamples()}</Section>

        <Section title="Sizes">{renderSizeExamples()}</Section>

        <Section title="Colors">{renderColorExamples()}</Section>

        <Section title="With Icons">{renderIconExamples()}</Section>

        <Section title="States">{renderStateExamples()}</Section>

        <Section title="Interactive Examples">
          {renderInteractiveExamples()}
        </Section>

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
    marginBottom: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  label: {
    marginBottom: 8,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  chipsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
});
