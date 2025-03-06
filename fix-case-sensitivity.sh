#!/bin/bash

# This script modifies imports in component files to use relative paths instead of @/ aliases
# This helps with module resolution during static export builds

# Function to replace imports in a file
replace_imports() {
  local file=$1
  if [ -f "$file" ]; then
    echo "Updating imports in $file"
    # Replace @/components/ui/button with relative path
    sed -i.bak 's|@/components/ui/button|../../../components/ui/button|g' "$file"
    # Replace @/components/ui/card with relative path
    sed -i.bak 's|@/components/ui/card|../../../components/ui/card|g' "$file"
    # Replace @/components/ui/dialog with relative path
    sed -i.bak 's|@/components/ui/dialog|../../../components/ui/dialog|g' "$file"
    # Replace @/components/TypeformModal with relative path
    sed -i.bak 's|@/components/TypeformModal|../../../components/TypeformModal|g' "$file"
    # Clean up backup files
    rm -f "$file.bak"
  fi
}

# Update imports in app components
replace_imports "src/app/example-example/page.tsx"

# Function to replace imports in component files
replace_component_imports() {
  local file=$1
  if [ -f "$file" ]; then
    echo "Updating imports in $file"
    # Replace @/components/ui/button with relative path
    sed -i.bak 's|@/components/ui/button|./ui/button|g' "$file"
    # Replace @/components/ui/card with relative path
    sed -i.bak 's|@/components/ui/card|./ui/card|g' "$file"
    # Replace @/components/ui/dialog with relative path
    sed -i.bak 's|@/components/ui/dialog|./ui/dialog|g' "$file"
    # Clean up backup files
    rm -f "$file.bak"
  fi
}

# Update imports in component files
replace_component_imports "src/components/TypeformModal.tsx"

# Function to replace imports in pricing component files
replace_pricing_imports() {
  local file=$1
  if [ -f "$file" ]; then
    echo "Updating imports in $file"
    # Replace @/components/ui/button with relative path
    sed -i.bak 's|@/components/ui/button|../ui/button|g' "$file"
    # Replace @/components/ui/card with relative path
    sed -i.bak 's|@/components/ui/card|../ui/card|g' "$file"
    # Replace @/components/TypeformModal with relative path
    sed -i.bak 's|@/components/TypeformModal|../TypeformModal|g' "$file"
    # Clean up backup files
    rm -f "$file.bak"
  fi
}

# Update imports in pricing component files
replace_pricing_imports "src/components/pricing/PricingCard.tsx"
replace_pricing_imports "src/components/pricing/PremiumPricingCard.tsx"
replace_pricing_imports "src/components/pricing/StandardPricingCard.tsx"

echo "Updated imports in component files to use relative paths"
