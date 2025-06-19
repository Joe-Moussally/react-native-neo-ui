import { TextField } from "@/core/components/TextField";
import {
  TextFieldSize,
  TextFieldVariant,
} from "@/core/components/TextField/types";
import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import { ThemeColor } from "@/core/theme/types";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Define examples for demonstration
const VARIANTS: TextFieldVariant[] = ["filled", "outline", "underline"];
const SIZES: TextFieldSize[] = ["sm", "md", "lg"];
const COLORS: ThemeColor[] = [
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "error",
];

export default function TextFieldScreen() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
    search: "",
    phone: "",
  });

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
      <View style={styles.fieldContainer}>{children}</View>
    </View>
  );

  const renderVariantExamples = () => {
    return VARIANTS.map((variant) => (
      <ExampleContainer key={variant} label={`variant="${variant}"`}>
        <TextField
          variant={variant}
          placeholder={`${variant} variant`}
          label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Label`}
          helperText="This is helper text"
        />
      </ExampleContainer>
    ));
  };

  const renderSizeExamples = () => {
    return SIZES.map((size) => (
      <ExampleContainer key={size} label={`size="${size}"`}>
        <TextField
          size={size}
          placeholder={`Size ${size.toUpperCase()}`}
          label={`${size.toUpperCase()} Size`}
        />
      </ExampleContainer>
    ));
  };

  const renderColorExamples = () => {
    return COLORS.map((color) => (
      <ExampleContainer key={color} label={`color="${color}"`}>
        <TextField
          color={color}
          placeholder={`${color} color`}
          label={`${color.charAt(0).toUpperCase() + color.slice(1)} Color`}
          variant="outline"
        />
      </ExampleContainer>
    ));
  };

  const renderStateExamples = () => {
    const states = [
      {
        prop: "disabled={true}",
        disabled: true,
        placeholder: "Disabled field",
      },
      {
        prop: "error={true}",
        error: true,
        placeholder: "Error field",
        errorText: "This field has an error",
      },
      { prop: "loading={true}", loading: true, placeholder: "Loading field" },
      {
        prop: "required={true}",
        required: true,
        placeholder: "Required field",
      },
    ];

    return states.map((state, index) => (
      <ExampleContainer key={index} label={state.prop}>
        <TextField
          {...state}
          label="Example Label"
          helperText={!state.error ? "Helper text" : undefined}
        />
      </ExampleContainer>
    ));
  };

  const renderIconExamples = () => {
    const examples = [
      {
        label: "startIcon={<Ionicons />}",
        props: {
          startIcon: <Ionicons name="person" />,
          placeholder: "Username",
          label: "Username",
        },
      },
      {
        label: "endIcon={<Ionicons />}",
        props: {
          endIcon: <Ionicons name="eye" />,
          placeholder: "Password",
          label: "Password",
          secureTextEntry: true,
        },
      },
      {
        label: "Both icons",
        props: {
          startIcon: <Ionicons name="search" />,
          endIcon: <Ionicons name="close" />,
          placeholder: "Search...",
          label: "Search",
        },
      },
      {
        label: "Icon with loading",
        props: {
          startIcon: <Ionicons name="mail" />,
          loading: true,
          placeholder: "Email",
          label: "Email",
        },
      },
    ];

    return examples.map((example, index) => (
      <ExampleContainer key={index} label={example.label}>
        <TextField {...example.props} />
      </ExampleContainer>
    ));
  };

  const renderInputTypeExamples = () => {
    const examples = [
      {
        label: 'keyboardType="email-address"',
        props: {
          keyboardType: "email-address" as const,
          placeholder: "Enter your email",
          label: "Email Address",
          autoCapitalize: "none" as const,
        },
      },
      {
        label: 'keyboardType="numeric"',
        props: {
          keyboardType: "numeric" as const,
          placeholder: "Enter phone number",
          label: "Phone Number",
        },
      },
      {
        label: "secureTextEntry={true}",
        props: {
          secureTextEntry: true,
          placeholder: "Enter password",
          label: "Password",
        },
      },
      {
        label: "multiline={true}",
        props: {
          multiline: true,
          numberOfLines: 4,
          placeholder: "Enter your message...",
          label: "Message",
        },
      },
    ];

    return examples.map((example, index) => (
      <ExampleContainer key={index} label={example.label}>
        <TextField {...example.props} />
      </ExampleContainer>
    ));
  };

  const renderInteractiveExamples = () => {
    return (
      <>
        <ExampleContainer label="Interactive Form">
          <View style={styles.formContainer}>
            <TextField
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, name: text }))
              }
              startIcon={<Ionicons name="person" />}
              required
              margin="sm"
            />

            <TextField
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, email: text }))
              }
              keyboardType="email-address"
              autoCapitalize="none"
              startIcon={<Ionicons name="mail" />}
              helperText="We'll never share your email"
              required
              margin="sm"
            />

            <TextField
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, password: text }))
              }
              secureTextEntry
              startIcon={<Ionicons name="lock-closed" />}
              endIcon={<Ionicons name="eye" />}
              helperText="Must be at least 8 characters"
              required
              margin="sm"
            />

            <TextField
              label="Phone"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, phone: text }))
              }
              keyboardType="phone-pad"
              startIcon={<Ionicons name="call" />}
              variant="outline"
              margin="sm"
            />

            <TextField
              label="Message"
              placeholder="Tell us about yourself..."
              value={formData.message}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, message: text }))
              }
              multiline
              numberOfLines={4}
              variant="filled"
              helperText="Optional message"
              margin="sm"
            />
          </View>
        </ExampleContainer>

        <ExampleContainer label="Search Field">
          <TextField
            placeholder="Search anything..."
            value={formData.search}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, search: text }))
            }
            startIcon={<Ionicons name="search" />}
            endIcon={formData.search ? <Ionicons name="close" /> : undefined}
            variant="outline"
            fullWidth
            onSubmitEditing={() => console.log("Search:", formData.search)}
            returnKeyType="search"
          />
        </ExampleContainer>
      </>
    );
  };

  const renderFullWidthExamples = () => {
    return (
      <ExampleContainer label="fullWidth={true}">
        <TextField
          label="Full Width Field"
          placeholder="This field takes full width"
          fullWidth
          variant="filled"
          helperText="This field spans the full width of its container"
        />
      </ExampleContainer>
    );
  };

  return (
    <Screen title="TextField">
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Section title="Variants">{renderVariantExamples()}</Section>

        <Section title="Sizes">{renderSizeExamples()}</Section>

        <Section title="Colors">{renderColorExamples()}</Section>

        <Section title="States">{renderStateExamples()}</Section>

        <Section title="With Icons">{renderIconExamples()}</Section>

        <Section title="Input Types">{renderInputTypeExamples()}</Section>

        <Section title="Full Width">{renderFullWidthExamples()}</Section>

        <Section title="Interactive Examples">
          {renderInteractiveExamples()}
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
    marginBottom: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  label: {
    marginBottom: 8,
  },
  fieldContainer: {
    // Basic container for examples
  },
  formContainer: {
    gap: 8,
  },
});
