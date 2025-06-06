import {
  ToggleButton,
  ToggleButtonGroup,
} from "@/core/components/ToggleButton";
import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ToggleButtonScreen() {
  const { theme } = useTheme();

  // Exclusive selection states
  const [alignment, setAlignment] = useState<string | null>("left");
  const [platform, setPlatform] = useState<string | null>("web");
  const [view, setView] = useState<string | null>("list");

  // Multiple selection states
  const [formats, setFormats] = useState<string[]>(["bold", "italic"]);
  const [devices, setDevices] = useState<string[]>(["phone"]);

  // Enforced value states
  const [enforcedAlignment, setEnforcedAlignment] = useState<string | null>(
    "left"
  );
  const [enforcedDevices, setEnforcedDevices] = useState<string[]>(["phone"]);

  // Standalone toggle states
  const [checked, setChecked] = useState(false);

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

  const handleEnforcedAlignment = (newAlignment: string | string[] | null) => {
    if (newAlignment !== null) {
      setEnforcedAlignment(newAlignment as string);
    }
  };

  const handleEnforcedDevices = (newDevices: string | string[] | null) => {
    if (Array.isArray(newDevices) && newDevices.length > 0) {
      setEnforcedDevices(newDevices);
    }
  };

  return (
    <Screen title="Toggle Button" options={{ headerLargeTitle: true }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Exclusive Selection */}
        <Section title="Exclusive Selection">
          <Demo title="Text Alignment (Only one can be selected)">
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={setAlignment}
            >
              <ToggleButton value="left">
                <Ionicons name="text" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="center">
                <Ionicons name="text" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="right">
                <Ionicons name="text" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="justify" disabled>
                <Ionicons name="text" size={16} color={theme.colors.disabled} />
              </ToggleButton>
            </ToggleButtonGroup>
            <Typography
              variant="bodySmall"
              style={{ color: theme.colors.textSecondary, marginTop: 8 }}
            >
              Selected: {alignment || "None"}
            </Typography>
          </Demo>

          <Demo title="Platform Selection">
            <ToggleButtonGroup
              value={platform}
              exclusive
              color="primary"
              onChange={setPlatform}
            >
              <ToggleButton value="web">Web</ToggleButton>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
            <Typography
              variant="bodySmall"
              style={{ color: theme.colors.textSecondary, marginTop: 8 }}
            >
              Selected: {platform || "None"}
            </Typography>
          </Demo>
        </Section>

        {/* Multiple Selection */}
        <Section title="Multiple Selection">
          <Demo title="Text Formatting (Multiple selections allowed)">
            <ToggleButtonGroup value={formats} onChange={setFormats}>
              <ToggleButton value="bold">
                <Ionicons
                  name="text"
                  size={16}
                  color={theme.colors.text}
                  style={{ fontWeight: "bold" }}
                />
              </ToggleButton>
              <ToggleButton value="italic">
                <Ionicons
                  name="text-outline"
                  size={16}
                  color={theme.colors.text}
                  style={{ fontStyle: "italic" }}
                />
              </ToggleButton>
              <ToggleButton value="underlined">
                <Ionicons name="text" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="color" disabled>
                <Ionicons
                  name="color-palette"
                  size={16}
                  color={theme.colors.disabled}
                />
              </ToggleButton>
            </ToggleButtonGroup>
            <Typography
              variant="bodySmall"
              style={{ color: theme.colors.textSecondary, marginTop: 8 }}
            >
              Selected: {formats.length > 0 ? formats.join(", ") : "None"}
            </Typography>
          </Demo>

          <Demo title="Device Selection">
            <ToggleButtonGroup value={devices} onChange={setDevices}>
              <ToggleButton value="laptop">
                <Ionicons name="laptop" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="tv">
                <Ionicons name="tv" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="phone">
                <Ionicons
                  name="phone-portrait"
                  size={16}
                  color={theme.colors.text}
                />
              </ToggleButton>
            </ToggleButtonGroup>
            <Typography
              variant="bodySmall"
              style={{ color: theme.colors.textSecondary, marginTop: 8 }}
            >
              Selected: {devices.length > 0 ? devices.join(", ") : "None"}
            </Typography>
          </Demo>
        </Section>

        {/* Sizes */}
        <Section title="Sizes">
          <Demo title="Small">
            <ToggleButtonGroup
              size="sm"
              exclusive
              value="center"
              onChange={() => {}}
            >
              <ToggleButton value="left">
                <Ionicons
                  name="text-outline"
                  size={14}
                  color={theme.colors.text}
                />
              </ToggleButton>
              <ToggleButton value="center">
                <Ionicons name="text" size={14} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="right">
                <Ionicons
                  name="text-outline"
                  size={14}
                  color={theme.colors.text}
                />
              </ToggleButton>
            </ToggleButtonGroup>
          </Demo>

          <Demo title="Medium (Default)">
            <ToggleButtonGroup
              size="md"
              exclusive
              value="center"
              onChange={() => {}}
            >
              <ToggleButton value="left">
                <Ionicons
                  name="text-outline"
                  size={16}
                  color={theme.colors.text}
                />
              </ToggleButton>
              <ToggleButton value="center">
                <Ionicons name="text" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="right">
                <Ionicons
                  name="text-outline"
                  size={16}
                  color={theme.colors.text}
                />
              </ToggleButton>
            </ToggleButtonGroup>
          </Demo>

          <Demo title="Large">
            <ToggleButtonGroup
              size="lg"
              exclusive
              value="center"
              onChange={() => {}}
            >
              <ToggleButton value="left">
                <Ionicons
                  name="text-outline"
                  size={18}
                  color={theme.colors.text}
                />
              </ToggleButton>
              <ToggleButton value="center">
                <Ionicons name="text" size={18} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="right">
                <Ionicons
                  name="text-outline"
                  size={18}
                  color={theme.colors.text}
                />
              </ToggleButton>
            </ToggleButtonGroup>
          </Demo>
        </Section>

        {/* Colors */}
        <Section title="Colors">
          <Demo title="Primary">
            <ToggleButtonGroup
              color="primary"
              exclusive
              value="web"
              onChange={() => {}}
            >
              <ToggleButton value="web">Web</ToggleButton>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
          </Demo>

          <Demo title="Secondary">
            <ToggleButtonGroup
              color="secondary"
              exclusive
              value="web"
              onChange={() => {}}
            >
              <ToggleButton value="web">Web</ToggleButton>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
          </Demo>

          <Demo title="Success">
            <ToggleButtonGroup
              color="success"
              exclusive
              value="web"
              onChange={() => {}}
            >
              <ToggleButton value="web">Web</ToggleButton>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
          </Demo>

          <Demo title="Error">
            <ToggleButtonGroup
              color="error"
              exclusive
              value="web"
              onChange={() => {}}
            >
              <ToggleButton value="web">Web</ToggleButton>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
          </Demo>
        </Section>

        {/* Vertical Orientation */}
        <Section title="Vertical Orientation">
          <Demo title="Vertical Button Group">
            <ToggleButtonGroup
              orientation="vertical"
              value={view}
              exclusive
              onChange={setView}
            >
              <ToggleButton value="list">
                <Ionicons name="list" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="module">
                <Ionicons name="grid" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="quilt">
                <Ionicons name="apps" size={16} color={theme.colors.text} />
              </ToggleButton>
            </ToggleButtonGroup>
            <Typography
              variant="bodySmall"
              style={{ color: theme.colors.textSecondary, marginTop: 8 }}
            >
              Selected: {view || "None"}
            </Typography>
          </Demo>
        </Section>

        {/* Enforce Value Set */}
        <Section title="Enforce Value Set">
          <Demo title="Always One Selected (Exclusive)">
            <ToggleButtonGroup
              value={enforcedAlignment}
              exclusive
              enforceValueSet
              onChange={handleEnforcedAlignment}
            >
              <ToggleButton value="left">
                <Ionicons
                  name="text-outline"
                  size={16}
                  color={theme.colors.text}
                />
              </ToggleButton>
              <ToggleButton value="center">
                <Ionicons name="text" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="right">
                <Ionicons
                  name="text-outline"
                  size={16}
                  color={theme.colors.text}
                />
              </ToggleButton>
            </ToggleButtonGroup>
            <Typography
              variant="bodySmall"
              style={{ color: theme.colors.textSecondary, marginTop: 8 }}
            >
              Try to deselect - at least one must remain selected
            </Typography>
          </Demo>

          <Demo title="Always At Least One Selected (Multiple)">
            <ToggleButtonGroup
              value={enforcedDevices}
              enforceValueSet
              onChange={handleEnforcedDevices}
            >
              <ToggleButton value="laptop">
                <Ionicons name="laptop" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="tv">
                <Ionicons name="tv" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="phone">
                <Ionicons
                  name="phone-portrait"
                  size={16}
                  color={theme.colors.text}
                />
              </ToggleButton>
            </ToggleButtonGroup>
            <Typography
              variant="bodySmall"
              style={{ color: theme.colors.textSecondary, marginTop: 8 }}
            >
              Try to deselect all - at least one must remain selected
            </Typography>
          </Demo>
        </Section>

        {/* Standalone Toggle Button */}
        <Section title="Standalone Toggle Button">
          <Demo title="Single Toggle Button">
            <ToggleButton
              value="check"
              selected={checked}
              onChange={() => setChecked(!checked)}
            >
              <Ionicons
                name={checked ? "checkmark" : "close"}
                size={16}
                color={theme.colors.text}
              />
            </ToggleButton>
            <Typography
              variant="bodySmall"
              style={{ color: theme.colors.textSecondary, marginTop: 8 }}
            >
              Standalone toggle: {checked ? "Checked" : "Unchecked"}
            </Typography>
          </Demo>

          <Demo title="Text-only Toggle">
            <ToggleButton
              value="subscribe"
              selected={checked}
              onChange={() => setChecked(!checked)}
            >
              {checked ? "Subscribed" : "Subscribe"}
            </ToggleButton>
          </Demo>
        </Section>

        {/* Disabled State */}
        <Section title="Disabled State">
          <Demo title="Disabled Group">
            <ToggleButtonGroup
              disabled
              value="web"
              exclusive
              onChange={() => {}}
            >
              <ToggleButton value="web">Web</ToggleButton>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
          </Demo>

          <Demo title="Individual Disabled Buttons">
            <ToggleButtonGroup value="web" exclusive onChange={() => {}}>
              <ToggleButton value="web">Web</ToggleButton>
              <ToggleButton value="android" disabled>
                Android
              </ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
          </Demo>
        </Section>

        {/* Full Width */}
        <Section title="Full Width">
          <Demo title="Full Width Toggle Groups">
            <ToggleButtonGroup
              value={platform}
              exclusive
              fullWidth
              onChange={setPlatform}
              style={{ marginBottom: 16 }}
            >
              <ToggleButton value="web">Web</ToggleButton>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup value={devices} fullWidth onChange={setDevices}>
              <ToggleButton value="laptop">
                <Ionicons name="laptop" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="tv">
                <Ionicons name="tv" size={16} color={theme.colors.text} />
              </ToggleButton>
              <ToggleButton value="phone">
                <Ionicons
                  name="phone-portrait"
                  size={16}
                  color={theme.colors.text}
                />
              </ToggleButton>
            </ToggleButtonGroup>
          </Demo>
        </Section>

        {/* Combined Examples */}
        <Section title="Combined Examples">
          <Demo title="Text Editor Toolbar">
            <View style={styles.textEditor}>
              <View style={styles.toolbar}>
                <ToggleButtonGroup
                  value={formats}
                  size="sm"
                  onChange={setFormats}
                  style={styles.toolbarGroup}
                >
                  <ToggleButton value="bold">
                    <Ionicons
                      name="text"
                      size={14}
                      color={theme.colors.text}
                      style={{ fontWeight: "bold" }}
                    />
                  </ToggleButton>
                  <ToggleButton value="italic">
                    <Ionicons
                      name="text"
                      size={14}
                      color={theme.colors.text}
                      style={{ fontStyle: "italic" }}
                    />
                  </ToggleButton>
                  <ToggleButton value="underlined">
                    <Ionicons name="text" size={14} color={theme.colors.text} />
                  </ToggleButton>
                </ToggleButtonGroup>

                <View
                  style={[
                    styles.divider,
                    { backgroundColor: theme.colors.border },
                  ]}
                />

                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  size="sm"
                  onChange={setAlignment}
                  style={styles.toolbarGroup}
                >
                  <ToggleButton value="left">
                    <Ionicons name="text" size={14} color={theme.colors.text} />
                  </ToggleButton>
                  <ToggleButton value="center">
                    <Ionicons name="text" size={14} color={theme.colors.text} />
                  </ToggleButton>
                  <ToggleButton value="right">
                    <Ionicons name="text" size={14} color={theme.colors.text} />
                  </ToggleButton>
                </ToggleButtonGroup>

                <View
                  style={[
                    styles.divider,
                    { backgroundColor: theme.colors.border },
                  ]}
                />

                <ToggleButtonGroup
                  value={view}
                  exclusive
                  size="sm"
                  onChange={setView}
                  style={styles.toolbarGroup}
                >
                  <ToggleButton value="list">
                    <Ionicons name="list" size={14} color={theme.colors.text} />
                  </ToggleButton>
                  <ToggleButton value="module">
                    <Ionicons name="grid" size={14} color={theme.colors.text} />
                  </ToggleButton>
                </ToggleButtonGroup>
              </View>

              <View
                style={[
                  styles.textArea,
                  {
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.border,
                  },
                ]}
              >
                <Typography
                  style={{ color: theme.colors.textSecondary, padding: 16 }}
                >
                  Your text content would appear here...
                  {"\n\n"}
                  Formatting: {formats.length > 0 ? formats.join(", ") : "None"}
                  {"\n"}
                  Alignment: {alignment || "None"}
                  {"\n"}
                  View: {view || "None"}
                </Typography>
              </View>
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
    alignItems: "flex-start",
  },
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
  toolbarGroup: {
    marginHorizontal: 4,
  },
  divider: {
    width: 1,
    height: 24,
    marginHorizontal: 8,
  },
  textEditor: {
    borderRadius: 8,
    overflow: "hidden",
  },
  textArea: {
    borderWidth: 1,
    minHeight: 120,
    borderTopWidth: 0,
  },
  bottomPadding: {
    height: 32,
  },
});
