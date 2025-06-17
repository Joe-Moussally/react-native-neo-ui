import { Box } from "@/core/components/Box";
import { useTheme } from "@/core/theme";
import { spacing } from "@/core/theme/spacing";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { AlertProps, AlertSeverity } from "./types";

export const Alert: React.FC<AlertProps> = ({
  severity,
  variant = "solid",
  title,
  children,
  style,
  showIcon = true,
}) => {
  const { theme } = useTheme();

  const getAlertColors = (
    severity: AlertSeverity,
    variant: "solid" | "soft"
  ) => {
    const baseColors = {
      success: theme.colors.success,
      info: theme.colors.info,
      warning: theme.colors.warning,
      error: theme.colors.error,
    };

    const severityColor = baseColors[severity];

    if (variant === "solid") {
      return {
        backgroundColor: severityColor,
        textColor: theme.isDark ? theme.colors.text : theme.colors.background,
        iconColor: theme.isDark ? theme.colors.text : theme.colors.background,
        borderColor: severityColor,
      };
    } else {
      // soft variant
      return {
        backgroundColor: severityColor + "15", // 15% opacity
        textColor: severityColor,
        iconColor: severityColor,
        borderColor: severityColor + "40", // 40% opacity
      };
    }
  };

  const getIcon = (severity: AlertSeverity) => {
    const iconSize = 20;
    const colors = getAlertColors(severity, variant);

    switch (severity) {
      case "success":
        return (
          <Feather
            name="check-circle"
            size={iconSize}
            color={colors.iconColor}
          />
        );
      case "info":
        return <Feather name="info" size={iconSize} color={colors.iconColor} />;
      case "warning":
        return (
          <Feather
            name="alert-triangle"
            size={iconSize}
            color={colors.iconColor}
          />
        );
      case "error":
        return (
          <Feather name="x-circle" size={iconSize} color={colors.iconColor} />
        );
      default:
        return <Feather name="info" size={iconSize} color={colors.iconColor} />;
    }
  };

  const colors = getAlertColors(severity, variant);

  const titleStyle = [
    styles.title,
    {
      color: colors.textColor,
    },
  ];

  const messageStyle = [
    styles.message,
    {
      color: colors.textColor,
    },
  ];

  return (
    <Box
      style={[
        {
          backgroundColor: colors.backgroundColor,
          borderColor: colors.borderColor,
          borderWidth: 1,
          marginVertical: spacing.xs,
        },
        style,
      ]}
      padding="md"
      borderRadius={spacing.rounded}
    >
      <Box flexDirection="row" style={{ alignItems: "flex-start" }}>
        {showIcon && (
          <Box style={{ marginRight: spacing.sm, marginTop: 2 }}>
            {getIcon(severity)}
          </Box>
        )}
        <Box flex={1}>
          {title && <Text style={titleStyle}>{title}</Text>}
          <Text style={messageStyle}>{children}</Text>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export * from "./types";
