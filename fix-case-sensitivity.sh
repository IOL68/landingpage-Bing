#!/bin/bash

# This script implements multiple strategies to fix module resolution issues
# during Next.js static export builds on AWS Amplify

echo "Starting comprehensive fix for module resolution issues"

# Strategy 1: Create a central components directory at the project root level
echo "Strategy 1: Creating central components directory"
mkdir -p components/ui
mkdir -p components/pricing

# Copy all UI components to the root components directory
cp -f src/components/ui/*.tsx components/ui/
cp -f src/components/ui/*.ts components/ui/ 2>/dev/null || true
cp -f src/components/TypeformModal.tsx components/
cp -f src/components/pricing/*.tsx components/pricing/ 2>/dev/null || true

# Copy UI components to src/app directory for direct imports
mkdir -p src/app/components/ui
cp -f src/components/ui/*.tsx src/app/components/ui/
cp -f src/components/ui/*.ts src/app/components/ui/ 2>/dev/null || true

# Create an index.ts file in the root components/ui directory
cat > components/ui/index.ts << 'EOL'
export * from './button';
export * from './card';
export * from './dialog';
export * from './toast';
export * from './toaster';
export * from './textarea';
EOL

# Strategy 2: Create case-insensitive copies of all UI components
echo "Strategy 2: Creating case-insensitive copies"
for file in src/components/ui/*.tsx; do
  if [ -f "$file" ]; then
    basename=$(basename "$file")
    uppercase_name=$(echo "$basename" | tr '[:lower:]' '[:upper:]')
    cp -f "$file" "src/components/ui/$uppercase_name"
    echo "Created uppercase copy: $uppercase_name"
  fi
done

# Strategy 3: Update tsconfig.json paths to include multiple possible locations
echo "Strategy 3: Updating tsconfig.json paths"
if [ -f "tsconfig.json" ]; then
  # Backup original tsconfig.json
  cp tsconfig.json tsconfig.json.bak
  
  # Create a new tsconfig.json with updated paths
  echo "Updating tsconfig.json with additional module resolution paths"
  
  # Create a temporary file with proper JSON syntax
  cat > tsconfig.json.new << EOL
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*", "./*"],
      "@/components/*": ["./src/components/*", "./components/*"],
      "@/components/ui/*": ["./src/components/ui/*", "./components/ui/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOL

  # Replace the original tsconfig.json with our new version
  mv tsconfig.json.new tsconfig.json
  echo "Updated tsconfig.json with additional module resolution paths"
fi

# Strategy 4: Create symbolic links for all UI components in node_modules
echo "Strategy 4: Creating symbolic links in node_modules"
mkdir -p node_modules/@/components/ui
mkdir -p node_modules/@/components/pricing

# Create symbolic links for UI components
ln -sf $(pwd)/src/components/ui/*.tsx node_modules/@/components/ui/
ln -sf $(pwd)/src/components/TypeformModal.tsx node_modules/@/components/
ln -sf $(pwd)/src/components/pricing/*.tsx node_modules/@/components/pricing/

# Strategy 5: Modify next.config.js to include additional module resolution paths
echo "Strategy 5: Updating next.config.js"
if [ -f "next.config.js" ]; then
  # Backup original next.config.js
  cp next.config.js next.config.js.bak
  
  # Check if next.config.js already has webpack configuration
  if grep -q "webpack" next.config.js; then
    echo "next.config.js already has webpack configuration, skipping"
  else
    # Add webpack configuration to next.config.js
    cat > next.config.js.new << 'EOL'
const nextConfig = {
  output: 'export',
  webpack: (config, { isServer }) => {
    // Add additional module resolution paths
    config.resolve.modules.push("./components");
    config.resolve.modules.push("./src/components");
    
    // Add alias for @/components
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': ["./src/components", "./components"]
    };
    
    return config;
  }
};

module.exports = nextConfig;
EOL
    
    mv next.config.js.new next.config.js
    echo "Updated next.config.js with additional module resolution paths"
  fi
fi

# Strategy 6: Create a dummy package.json in the components directory
echo "Strategy 6: Creating dummy package.json in components directory"
cat > components/package.json << 'EOL'
{
  "name": "components",
  "version": "1.0.0",
  "main": "index.js"
}
EOL

# Strategy 7: Update import statements in key files
echo "Strategy 7: Updating import statements in key files"

# Update imports in app/example-example/page.tsx
if [ -f "src/app/example-example/page.tsx" ]; then
  # Create directories for direct imports
  mkdir -p src/app/example-example/components/ui
  mkdir -p src/app/example-example/components/pricing
  
  # Copy components directly to the page directory
  cp -f src/components/ui/button.tsx src/app/example-example/components/ui/
  cp -f src/components/ui/card.tsx src/app/example-example/components/ui/
  cp -f src/components/TypeformModal.tsx src/app/example-example/components/
  cp -f src/components/pricing/StandardPricingCard.tsx src/app/example-example/components/pricing/
  cp -f src/components/pricing/PlusPricingCard.tsx src/app/example-example/components/pricing/
  cp -f src/components/pricing/PremiumPricingCard.tsx src/app/example-example/components/pricing/
  
  # Update imports to use relative paths
  sed -i.bak 's|from "@/components/ui/button"|from "./components/ui/button"|g' src/app/example-example/page.tsx
  sed -i.bak 's|from "@/components/ui/card"|from "./components/ui/card"|g' src/app/example-example/page.tsx
  sed -i.bak 's|from "@/components/TypeformModal"|from "./components/TypeformModal"|g' src/app/example-example/page.tsx
  sed -i.bak 's|from "@/components/pricing/StandardPricingCard"|from "./components/pricing/StandardPricingCard"|g' src/app/example-example/page.tsx
  sed -i.bak 's|from "@/components/pricing/PlusPricingCard"|from "./components/pricing/PlusPricingCard"|g' src/app/example-example/page.tsx
  sed -i.bak 's|from "@/components/pricing/PremiumPricingCard"|from "./components/pricing/PremiumPricingCard"|g' src/app/example-example/page.tsx
  rm -f src/app/example-example/page.tsx.bak
  echo "Updated imports in src/app/example-example/page.tsx"
fi

# Update imports in components/TypeformModal.tsx
if [ -f "src/components/TypeformModal.tsx" ]; then
  # Create ui directory if it doesn't exist
  mkdir -p src/components/ui
  
  # Copy UI components directly to the components directory
  cp -f src/components/ui/button.tsx src/components/ui/
  cp -f src/components/ui/dialog.tsx src/components/ui/
  
  # Update imports to use relative paths
  sed -i.bak 's|from "@/components/ui/button"|from "./ui/button"|g' src/components/TypeformModal.tsx
  sed -i.bak 's|from "@/components/ui/dialog"|from "./ui/dialog"|g' src/components/TypeformModal.tsx
  rm -f src/components/TypeformModal.tsx.bak
  echo "Updated imports in src/components/TypeformModal.tsx"
fi

# Update imports in components/pricing/PricingCard.tsx
if [ -f "src/components/pricing/PricingCard.tsx" ]; then
  # Create ui directory if it doesn't exist
  mkdir -p src/components/ui
  
  # Copy UI components directly to the components directory
  cp -f src/components/ui/card.tsx src/components/ui/
  cp -f src/components/ui/button.tsx src/components/ui/
  
  # Update imports to use relative paths
  sed -i.bak 's|from "@/components/ui/card"|from "../ui/card"|g' src/components/pricing/PricingCard.tsx
  sed -i.bak 's|from "@/components/ui/button"|from "../ui/button"|g' src/components/pricing/PricingCard.tsx
  rm -f src/components/pricing/PricingCard.tsx.bak
  echo "Updated imports in src/components/pricing/PricingCard.tsx"
fi

# Update imports in components/pricing/StandardPricingCard.tsx
if [ -f "src/components/pricing/StandardPricingCard.tsx" ]; then
  # Copy TypeformModal directly to the components directory
  cp -f src/components/TypeformModal.tsx src/components/
  
  # Update imports to use relative paths
  sed -i.bak 's|from "@/components/TypeformModal"|from "../TypeformModal"|g' src/components/pricing/StandardPricingCard.tsx
  rm -f src/components/pricing/StandardPricingCard.tsx.bak
  echo "Updated imports in src/components/pricing/StandardPricingCard.tsx"
fi

echo "Completed comprehensive fix for module resolution issues"
