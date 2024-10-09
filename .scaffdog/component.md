---
name: 'component'
root: 'app/components'
output: '.'
ignore: []
questions:
  value: 'Please enter any text.'
---

# `{{ inputs.value | kebab }}/index.ts`

```typescript
export * from './{{ inputs.value | kebab }}';
```

# `{{ inputs.value | kebab }}/{{ inputs.value | kebab }}.tsx`

```tsx
export function {{ inputs.value | pascal }}() {
  return (
    <div>
      new component    
    </div>
  )
}
```

# `{{ inputs.value | kebab }}/{{ inputs.value | kebab }}.stories.tsx`

```tsx
import type { Meta, StoryObj } from "@storybook/react";

import { {{ inputs.value | pascal }} } from "./{{ inputs.value | kebab }}";

const meta = {
  title: "Components/{{ inputs.value | pascal }}",
  component: {{ inputs.value | pascal }},
  tags: ["autodocs"],
} satisfies Meta<typeof {{ inputs.value | pascal }}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```
