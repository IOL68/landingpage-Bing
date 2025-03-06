#!/bin/bash

# This script copies UI components to the locations where they're imported
# This helps with module resolution during static export builds

# Create necessary directories
mkdir -p src/app/components/ui
mkdir -p src/components/ui
mkdir -p src/components/pricing/ui

# Copy UI components to app directory
echo "Copying UI components to app directory"
cp -f src/components/ui/button.tsx src/app/components/ui/
cp -f src/components/ui/card.tsx src/app/components/ui/
cp -f src/components/ui/dialog.tsx src/app/components/ui/

# Copy UI components to components directory
echo "Copying UI components to components directory"
cp -f src/components/ui/button.tsx src/components/ui/
cp -f src/components/ui/card.tsx src/components/ui/
cp -f src/components/ui/dialog.tsx src/components/ui/

# Copy UI components to pricing directory
echo "Copying UI components to pricing directory"
cp -f src/components/ui/button.tsx src/components/pricing/ui/
cp -f src/components/ui/card.tsx src/components/pricing/ui/

# Copy TypeformModal to app directory
echo "Copying TypeformModal to app directory"
cp -f src/components/TypeformModal.tsx src/app/components/

# Update imports in app components
echo "Updating imports in app components"
sed -i.bak 's|@/components/ui/button|./components/ui/button|g' src/app/example-example/page.tsx
sed -i.bak 's|@/components/ui/card|./components/ui/card|g' src/app/example-example/page.tsx
sed -i.bak 's|@/components/TypeformModal|./components/TypeformModal|g' src/app/example-example/page.tsx
rm -f src/app/example-example/page.tsx.bak

# Update imports in TypeformModal
echo "Updating imports in TypeformModal"
sed -i.bak 's|@/components/ui/button|./ui/button|g' src/components/TypeformModal.tsx
sed -i.bak 's|@/components/ui/dialog|./ui/dialog|g' src/components/TypeformModal.tsx
rm -f src/components/TypeformModal.tsx.bak

# Update imports in pricing components
echo "Updating imports in pricing components"
sed -i.bak 's|@/components/ui/card|./ui/card|g' src/components/pricing/PricingCard.tsx
sed -i.bak 's|@/components/ui/button|./ui/button|g' src/components/pricing/PricingCard.tsx
rm -f src/components/pricing/PricingCard.tsx.bak

sed -i.bak 's|@/components/TypeformModal|../TypeformModal|g' src/components/pricing/StandardPricingCard.tsx
rm -f src/components/pricing/StandardPricingCard.tsx.bak

# Create a simple index.ts in ui directories to export components
cat > src/app/components/ui/index.ts << 'EOL'
export * from './button';
export * from './card';
export * from './dialog';
EOL

cat > src/components/pricing/ui/index.ts << 'EOL'
export * from './button';
export * from './card';
EOL

echo "Completed copying UI components and updating imports"
