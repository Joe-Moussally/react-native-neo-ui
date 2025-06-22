// ============================================================================
// MAIN PACKAGE EXPORTS - Only shared utilities and commonly used items
// ============================================================================

// Theme exports - commonly used across the app
export * from './theme';

// Navigation exports - commonly used across the app
export * from './navigation';

// Core utility components that are commonly used
export { default as ParallaxScrollView } from './components/ParallaxScrollView';
export * from './components/ThemedText';
export * from './components/ThemedView';

// ============================================================================
// INDIVIDUAL COMPONENTS - Must be imported from specific paths
// ============================================================================
//
// ❌ DO NOT IMPORT FROM MAIN PACKAGE:
// import { Button } from '@joe111/neo-ui';
// import { RootToastProvider } from '@joe111/neo-ui';
//
// ✅ CORRECT - Import from specific component paths:
// import { Button, ButtonProps } from '@joe111/neo-ui/Button';
// import { RootToastProvider, useToast } from '@joe111/neo-ui/Toast';
// import { Alert, AlertProps } from '@joe111/neo-ui/Alert';
// import { Avatar, AvatarProps } from '@joe111/neo-ui/Avatar';
// import { Badge, BadgeProps } from '@joe111/neo-ui/Badge';
// import { Box, BoxProps } from '@joe111/neo-ui/Box';
// import { Chip, ChipProps } from '@joe111/neo-ui/Chip';
// import { Rating, RatingProps } from '@joe111/neo-ui/Rating';
// import { Skeleton, SkeletonProps } from '@joe111/neo-ui/Skeleton';
// import { TextField, TextFieldProps } from '@joe111/neo-ui/TextField';
// import { Ticker, TickerProps } from '@joe111/neo-ui/Ticker';
// import { Typography, TypographyProps } from '@joe111/neo-ui/Typography';
//
// This approach provides:
// - Better tree-shaking (smaller bundle sizes)
// - Clearer component organization
// - Explicit imports that show exactly what you're using
// - Faster build times (no need to process unused components)
// ============================================================================
