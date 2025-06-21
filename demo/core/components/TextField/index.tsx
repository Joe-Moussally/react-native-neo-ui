import { Box } from "@joe111/neo-ui/Box";
import { Typography } from "@joe111/neo-ui/Typography";
import { useTheme } from "@joe111/neo-ui/theme";
import { spacing } from "@/core/theme/spacing";
import React, { useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native";
import { TextFieldProps, TextFieldSize, TextFieldVariant } from "./types";

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  variant = "filled",
  size = "md",
  color = "primary",
  fullWidth = false,
  disabled = false,
  error = false,
  loading = false,
  required = false,
  helperText,
  errorText,
  startIcon,
  endIcon,
  margin,
  multiline = false,
  numberOfLines = 1,
  secureTextEntry = false,
  autoCapitalize = "sentences",
  autoCorrect = true,
  keyboardType = "default",
  returnKeyType = "done",
  onFocus,
  onBlur,
  onSubmitEditing,
  style,
  containerStyle,
  ...props
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();

    // Scroll to view when focused (with a small delay to ensure layout is complete)
    if (multiline) {
      setTimeout(() => {
        textInputRef.current?.measure((x, y, width, height, pageX, pageY) => {
          // You can implement scrollTo functionality here if you have a ScrollView reference
          // For now, we'll just focus the input
          textInputRef.current?.focus();
        });
      }, 100);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const getSizeStyles = (size: TextFieldSize) => {
    const sizes = {
      sm: {
        height: 36,
        fontSize: 14,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: spacing.rounded,
        iconSize: 16,
      },
      md: {
        height: 44,
        fontSize: 16,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: spacing.rounded,
        iconSize: 20,
      },
      lg: {
        height: 52,
        fontSize: 18,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        borderRadius: spacing.rounded,
        iconSize: 24,
      },
    };
    return sizes[size];
  };

  const getVariantStyles = (variant: TextFieldVariant) => {
    const baseColor = theme.colors[color];
    const errorColor = theme.colors.error;
    const currentColor = error ? errorColor : baseColor;

    switch (variant) {
      case "filled":
        return {
          backgroundColor: isFocused
            ? currentColor + "10"
            : theme.colors.surface,
          borderWidth: isFocused ? 2 : 1,
          borderColor: isFocused ? currentColor : theme.colors.border,
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          borderWidth: isFocused ? 2 : 1,
          borderColor: isFocused ? currentColor : theme.colors.border,
        };
      case "underline":
        return {
          backgroundColor: "transparent",
          borderBottomWidth: isFocused ? 2 : 1,
          borderBottomColor: isFocused ? currentColor : theme.colors.border,
        };
    }
  };

  const sizeStyles = getSizeStyles(size);
  const variantStyles = getVariantStyles(variant);

  const inputHeight = multiline
    ? Math.max(sizeStyles.height * (numberOfLines || 3), sizeStyles.height * 2)
    : sizeStyles.height;

  const textColor = disabled ? theme.colors.disabled : theme.colors.text;

  const placeholderColor = disabled
    ? theme.colors.disabled
    : theme.colors.textSecondary;

  // Clone icons with proper color and size
  const renderIcon = (icon: React.ReactNode) => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<any>, {
        size: sizeStyles.iconSize,
        color: disabled ? theme.colors.disabled : theme.colors.textSecondary,
      });
    }
    return icon;
  };

  return (
    <Box margin={margin} style={containerStyle} flexDirection="column" gap="xs">
      {/* Label */}
      {label && (
        <View style={styles.labelContainer}>
          <Typography
            variant="bodySmall"
            weight="medium"
            color={error ? theme.colors.error : theme.colors.text}
          >
            {label}
            {required && (
              <Typography variant="bodySmall" color={theme.colors.error}>
                {" *"}
              </Typography>
            )}
          </Typography>
        </View>
      )}

      {/* Input Container */}
      <Box
        style={[
          styles.inputContainer,
          {
            ...variantStyles,
            borderRadius: variant === "underline" ? 0 : sizeStyles.borderRadius,
            height: inputHeight,
            opacity: disabled ? 0.6 : 1,
            width: fullWidth ? "100%" : undefined,
          },
        ]}
        flexDirection="row"
        padding={undefined} // Override Box padding
      >
        {/* Start Icon */}
        {startIcon && (
          <View style={[styles.iconContainer, styles.startIcon]}>
            {renderIcon(startIcon)}
          </View>
        )}

        {/* Text Input */}
        <TextInput
          ref={textInputRef}
          style={[
            styles.input,
            {
              fontSize: sizeStyles.fontSize,
              color: textColor,
              paddingHorizontal:
                startIcon || endIcon
                  ? spacing.xs
                  : sizeStyles.paddingHorizontal,
              paddingVertical: sizeStyles.paddingVertical,
              textAlignVertical: multiline ? "top" : "center",
              minHeight: multiline ? sizeStyles.height : undefined,
              height: multiline
                ? inputHeight - sizeStyles.paddingVertical * 2
                : undefined,
            },
            style,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          editable={!disabled && !loading}
          multiline={multiline}
          numberOfLines={numberOfLines}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={onSubmitEditing}
          scrollEnabled={multiline}
          blurOnSubmit={!multiline}
          {...props}
        />

        {/* End Icon or Loading */}
        {(endIcon || loading) && (
          <View style={[styles.iconContainer, styles.endIcon]}>
            {loading ? (
              <ActivityIndicator size="small" color={theme.colors.primary} />
            ) : (
              renderIcon(endIcon)
            )}
          </View>
        )}
      </Box>

      {/* Helper Text */}
      {(helperText || errorText) && (
        <Typography
          variant="bodySmall"
          color={error ? theme.colors.error : theme.colors.textSecondary}
        >
          {error ? errorText : helperText}
        </Typography>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  startIcon: {
    paddingLeft: spacing.sm,
    paddingRight: spacing.xs,
  },
  endIcon: {
    paddingRight: spacing.sm,
    paddingLeft: spacing.xs,
  },
});

export * from "./types";
