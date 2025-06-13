# ParallaxScrollView

A scroll view component with parallax scrolling effects, providing smooth animations as content is scrolled.

## Installation

```typescript
import { ParallaxScrollView } from "@/core/components/ParallaxScrollView";
```

## Basic Usage

```typescript
import React from "react";
import { ParallaxScrollView } from "@/core/components/ParallaxScrollView";

export default function ParallaxScrollViewExample() {
  return (
    <ParallaxScrollView
      headerBackgroundColor="#f0f0f0"
      headerImage={<Image source={{ uri: "https://example.com/header.jpg" }} />}
    >
      <Text>Your scrollable content goes here</Text>
      <Text>Content moves with parallax effect</Text>
    </ParallaxScrollView>
  );
}
```

## Props

| Prop                    | Type                   | Default | Description                                               |
| ----------------------- | ---------------------- | ------- | --------------------------------------------------------- |
| `headerImage`           | `ReactElement`         | -       | Header image or component to display with parallax effect |
| `headerBackgroundColor` | `string`               | -       | Background color for the header section                   |
| `headerHeight`          | `number`               | `250`   | Height of the parallax header                             |
| `parallaxRatio`         | `number`               | `0.5`   | Ratio of parallax scrolling effect (0-1)                  |
| `children`              | `ReactNode`            | -       | **Required.** Scrollable content                          |
| `contentContainerStyle` | `StyleProp<ViewStyle>` | -       | Styles for the content container                          |
| `style`                 | `StyleProp<ViewStyle>` | -       | Additional styles for the scroll view                     |

## Usage Examples

### With Header Image

```typescript
<ParallaxScrollView
  headerImage={
    <Image
      source={{ uri: "https://example.com/beautiful-landscape.jpg" }}
      style={{ width: "100%", height: "100%" }}
    />
  }
  headerBackgroundColor="#4a90e2"
>
  <View style={{ padding: 16 }}>
    <Text>Your content here...</Text>
  </View>
</ParallaxScrollView>
```

### Custom Parallax Effect

```typescript
<ParallaxScrollView
  headerImage={<YourCustomHeaderComponent />}
  headerBackgroundColor="#ff6b6b"
  headerHeight={300}
  parallaxRatio={0.3}
>
  <YourContent />
</ParallaxScrollView>
```

### With Themed Colors

```typescript
<ParallaxScrollView
  headerImage={<GradientBackground />}
  headerBackgroundColor={theme.colors.primary}
  contentContainerStyle={{ backgroundColor: theme.colors.background }}
>
  <ThemedText>Themed parallax content</ThemedText>
</ParallaxScrollView>
```

## Performance Considerations

- The parallax effect uses native animations for smooth performance
- Header images should be optimized for mobile devices
- Consider using lower resolution images for better performance on slower devices

## Accessibility

- Supports scroll accessibility features
- Header content can include accessible elements
- Maintains proper focus management during scrolling
