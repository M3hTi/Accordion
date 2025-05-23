# Accordion Implementation Examples

This project demonstrates three different approaches to implementing an accordion component in React, showing the evolution from a basic implementation to a more sophisticated compound component pattern.

## 1. Basic Independent Accordion (Accordion-v1.jsx)

The first implementation (`Accordion-v1.jsx`) shows a basic, self-contained accordion component:

- Uses local state management with `useState` hook
- Each accordion manages its own open/closed state independently
- Simple implementation with minimal props
- Styled using styled-components
- Perfect for use cases where accordions need to work independently

## 2. Controlled Accordion Pattern (Accordion.jsx & Accordions.jsx)

The second implementation shows a controlled component pattern:

- `Accordions.jsx` acts as a container component that:
  - Manages the state for all accordion items
  - Contains the data for all accordions
  - Controls which accordion is currently open
- `Accordion.jsx` is a presentational component that:
  - Receives props for title, description, and current state
  - Delegates state management to its parent
  - Provides consistent styling and behavior

This pattern is ideal when you need:

- Single accordion open at a time
- Centralized state management
- Consistent behavior across all accordions

## 3. Compound Component Pattern (ui/Accordions.jsx)

The third implementation demonstrates the compound component pattern, offering the most flexible and reusable solution:

- Uses React Context for state management
- Implements a compound component API with three main components:
  - `Accordions`: The parent container that provides context
  - `Accordions.Accordion`: Individual accordion container
  - `Accordions.Title`: The clickable header component
  - `Accordions.Description`: The expandable content component

Example usage:

```jsx
<Accordions>
  <Accordions.Accordion>
    <Accordions.Title name="example">Title</Accordions.Title>
    <Accordions.Description name="example">Content</Accordions.Description>
  </Accordions.Accordion>
</Accordions>
```

Benefits of this approach:

- Maximum flexibility in layout and styling
- Clear separation of concerns
- Reusable components
- Maintains semantic structure
- Better developer experience

## Technologies Used

- React
- Styled Components
- React Icons
- Vite

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```
