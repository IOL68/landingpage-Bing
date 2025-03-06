#!/bin/bash

# Create uppercase copies of UI component files to handle case sensitivity issues
cd src/components/ui

# Create uppercase copies for commonly used components
cp button.tsx Button.tsx
cp card.tsx Card.tsx
cp dialog.tsx Dialog.tsx
cp container.tsx Container.tsx
cp typography.tsx Typography.tsx
cp Icon.tsx Icon.tsx

# Create a backup of the original index.ts file if it exists
if [ -f index.ts ]; then
  cp index.ts index.ts.bak
fi

# Create an index.ts file that exports all components
cat > index.ts << 'EOL'
// Export all UI components from a single file
// This helps with module resolution during static export builds

export * from './accordion';
export * from './button';
export * from './card';
export * from './container';
export * from './dialog';
export * from './form';
export * from './input';
export * from './label';

// Handle naming conflicts by explicitly re-exporting
import { Toaster as SonnerToaster } from './sonner';
export { SonnerToaster };

export * from './textarea';
export * from './toast';

// Import and re-export from toaster.tsx with its original name
import { Toaster } from './toaster';
export { Toaster };

export * from './tooltip';
export * from './typography';
export * from './use-toast';
export * from './Icon';
export * from './Badge';
EOL

echo "Created uppercase copies and index exports for UI components"
