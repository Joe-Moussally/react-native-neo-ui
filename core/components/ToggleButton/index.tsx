import { useTheme } from "@/core/theme";
import React, { Children, cloneElement, isValidElement } from "react";
import { Pressable, View, ViewStyle } from "react-native";
import { Typography } from "../Typography";
import {
  ToggleButtonGroupProps,
  ToggleButtonProps,
  ToggleButtonSize,
} from "./types";

const getSizeStyles = (size: ToggleButtonSize) => {
  const sizes = {
    sm: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      minHeight: 32,
      fontSize: 12,
    },
    md: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      minHeight: 40,
      fontSize: 14,
    },
    lg: {
      paddingVertical: 14,
      paddingHorizontal: 20,
      minHeight: 48,
      fontSize: 16,
    },
  };
  return sizes[size];
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  selected = false,
  size = "md",
  color = "primary",
  disabled = false,
  children,
  style,
  onChange,
  testID,
  ...pressableProps
}) => {
  const { theme } = useTheme();
  const sizeStyles = getSizeStyles(size);
  const primaryColor = theme.colors[color];

  const handlePress = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  const getButtonStyles = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderWidth: 2,
      borderColor: selected ? primaryColor : theme.colors.border,
      backgroundColor: selected ? primaryColor + "15" : theme.colors.surface,
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      ...sizeStyles,
    };

    if (disabled) {
      baseStyle.borderColor = theme.colors.disabled;
      baseStyle.backgroundColor = theme.colors.disabled + "10";
    }

    return baseStyle;
  };

  const getTextColor = () => {
    if (disabled) return theme.colors.disabled;
    return selected ? primaryColor : theme.colors.text;
  };

  return (
    <Pressable
      {...pressableProps}
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        getButtonStyles(),
        pressed && !disabled && { opacity: 0.8 },
        style,
      ]}
      testID={testID}
    >
      {typeof children === "string" ? (
        <Typography
          variant="bodyMedium"
          style={{
            color: getTextColor(),
            fontSize: sizeStyles.fontSize,
            fontWeight: selected ? "600" : "400",
          }}
        >
          {children}
        </Typography>
      ) : (
        children
      )}
    </Pressable>
  );
};

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  value,
  exclusive = false,
  orientation = "horizontal",
  size = "md",
  color = "primary",
  disabled = false,
  children,
  style,
  onChange,
  enforceValueSet = false,
  fullWidth = false,
  testID,
}) => {
  const { theme } = useTheme();

  const handleButtonChange = (buttonValue: string) => {
    if (disabled) return;

    if (exclusive) {
      // Exclusive selection (single value)
      const newValue = value === buttonValue ? null : buttonValue;

      // If enforceValueSet is true and we're trying to deselect the only selected item, do nothing
      if (enforceValueSet && newValue === null && value === buttonValue) {
        return;
      }

      onChange?.(newValue);
    } else {
      // Multiple selection (array of values)
      const currentValues = Array.isArray(value) ? value : [];
      let newValues: string[];

      if (currentValues.includes(buttonValue)) {
        newValues = currentValues.filter((v) => v !== buttonValue);

        // If enforceValueSet is true and we're trying to remove the last selected item, do nothing
        if (enforceValueSet && newValues.length === 0) {
          return;
        }
      } else {
        newValues = [...currentValues, buttonValue];
      }

      onChange?.(newValues);
    }
  };

  const isButtonSelected = (buttonValue: string): boolean => {
    if (exclusive) {
      return value === buttonValue;
    } else {
      return Array.isArray(value) ? value.includes(buttonValue) : false;
    }
  };

  const containerStyle: ViewStyle = {
    flexDirection: orientation === "horizontal" ? "row" : "column",
    width: fullWidth ? "100%" : undefined,
  };

  const childrenArray = Children.toArray(children);

  return (
    <View style={[containerStyle, style]} testID={testID}>
      {childrenArray.map((child, index) => {
        if (!isValidElement(child) || child.type !== ToggleButton) {
          return child;
        }

        const childProps = child.props as ToggleButtonProps;
        const isFirst = index === 0;
        const isLast = index === childrenArray.length - 1;
        const isMiddle = !isFirst && !isLast;

        // Calculate border radius for grouped buttons
        const getBorderRadius = (): ViewStyle => {
          const radius = 6;
          const isSelected = isButtonSelected(childProps.value);
          const nextChildSelected =
            index < childrenArray.length - 1 &&
            isValidElement(childrenArray[index + 1]) &&
            isButtonSelected((childrenArray[index + 1] as any).props.value);

          if (orientation === "horizontal") {
            if (isFirst) {
              return {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderRightWidth: isSelected || nextChildSelected ? 2 : 0,
                flex: fullWidth ? 1 : undefined,
              };
            } else if (isLast) {
              return {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                flex: fullWidth ? 1 : undefined,
              };
            } else if (isMiddle) {
              return {
                borderRadius: 0,
                borderRightWidth: isSelected || nextChildSelected ? 2 : 0,
                flex: fullWidth ? 1 : undefined,
              };
            }
          } else {
            // Vertical orientation
            if (isFirst) {
              return {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderBottomWidth: isSelected || nextChildSelected ? 2 : 0,
                width: fullWidth ? "100%" : undefined,
              };
            } else if (isLast) {
              return {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                width: fullWidth ? "100%" : undefined,
              };
            } else if (isMiddle) {
              return {
                borderRadius: 0,
                borderBottomWidth: isSelected || nextChildSelected ? 2 : 0,
                width: fullWidth ? "100%" : undefined,
              };
            }
          }

          return {};
        };

        return cloneElement(child, {
          ...childProps,
          selected: isButtonSelected(childProps.value),
          size: childProps.size || size,
          color: childProps.color || color,
          disabled: childProps.disabled || disabled,
          onChange: handleButtonChange,
          style: [childProps.style, getBorderRadius()],
        });
      })}
    </View>
  );
};
