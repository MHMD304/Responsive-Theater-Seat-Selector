# 📸 Screenshots Guide for Responsive Seat Selector

This guide provides detailed instructions for capturing all the screenshots needed for the README documentation.

## 🎯 Required Screenshots

### 1. Basic Views

#### `desktop-view.png` - Full Desktop Interface
- **Setup**: Open the application in desktop browser (Chrome recommended)
- **Viewport**: Desktop size (1200px+ width)
- **Content**: Show the complete 6x10 seat grid
- **Focus**: All seats should be in default green (available) state
- **Include**: The "Reserve Seat" button (should be disabled)

#### `mobile-areas.png` - Mobile Area Selection
- **Setup**: Use browser dev tools, set to mobile viewport (375px width)
- **Content**: Show the three area buttons: "Front", "Middle", "Back"
- **Layout**: Buttons should be centered and properly spaced

#### `mobile-seats.png` - Mobile Seat Detail
- **Setup**: In mobile view, click on "Front" area
- **Content**: Show the detailed seat layout for the selected area
- **Include**: The "Back" button at the bottom

### 2. Seat Status Examples

#### `available-seats.png` - All Available Seats
- **Setup**: Fresh page load, no interactions
- **Content**: All 60 seats in green (available) state
- **Note**: This is the default state when the page loads

#### `selected-seat.png` - Single Selected Seat
- **Setup**: Click on any available seat (e.g., seat "1-5")
- **Content**: One seat in orange (selected) state
- **Include**: The "Reserve Seat" button should be enabled
- **Focus**: Clear view of the orange selected seat

#### `reserved-seats.png` - Multiple Reserved Seats
- **Setup**: Reserve several seats (click seat → click "Reserve Seat" → repeat)
- **Content**: Multiple seats in red (reserved) state
- **Suggestion**: Reserve 5-8 seats in different areas for good visual impact
- **Include**: Show the "Reserve Seat" button (should be disabled if no seat selected)

#### `mixed-status.png` - Mixed Seat States
- **Setup**: Create a scenario with all three states
- **Content**: 
  - Most seats in green (available)
  - 1-2 seats in orange (selected)
  - 3-4 seats in red (reserved)
- **Layout**: Show a good mix across different rows/columns

### 3. Mobile Seat Status

#### `mobile-selected.png` - Mobile Selected State
- **Setup**: Mobile viewport, select an area (e.g., "Middle"), click a seat
- **Content**: Show the selected seat in orange within the mobile layout
- **Include**: The "Reserve Seat" button enabled

#### `mobile-reserved.png` - Mobile Reserved State
- **Setup**: Mobile viewport, reserve a few seats in the selected area
- **Content**: Show reserved seats in red within the mobile layout
- **Include**: Mix of available (green) and reserved (red) seats

### 4. Interactive States

#### `reservation-process.png` - Step-by-Step Process
- **Setup**: Create a sequence showing the reservation process
- **Content**: Three panels or one image showing:
  1. Initial state (all green)
  2. Selection state (one orange)
  3. Reserved state (one red)
- **Alternative**: Use browser dev tools to show the process in stages

#### `button-states.png` - Button State Changes
- **Setup**: Show the "Reserve Seat" button in different states
- **Content**: 
  - Button disabled (grayed out, no seat selected)
  - Button enabled (normal, seat selected)
- **Layout**: Side-by-side comparison or before/after

## 🛠️ How to Take Screenshots

### Using Browser Developer Tools (Recommended)

1. **Open the Application**
   ```bash
   # Start the server
   python -m http.server 8000
   # Navigate to http://localhost:8000
   ```

2. **Desktop Screenshots**
   - Press `F12` to open Developer Tools
   - Ensure you're in desktop view (not mobile)
   - Use browser's built-in screenshot or system tools

3. **Mobile Screenshots**
   - Press `F12` to open Developer Tools
   - Click the device toggle button (📱 icon)
   - Select a mobile device (e.g., iPhone 12, 375px width)
   - Take screenshots using system tools

### Screenshot Tools

#### Windows
- **Snipping Tool**: `Win + Shift + S`
- **Print Screen**: `PrtScn` key
- **Windows + Print Screen**: Saves to Pictures folder

#### Mac
- **Screenshot**: `Cmd + Shift + 4` (select area)
- **Full screen**: `Cmd + Shift + 3`
- **Window capture**: `Cmd + Shift + 4`, then press Space

#### Linux
- **GNOME**: `gnome-screenshot`
- **KDE**: `spectacle`
- **Terminal**: `import` (ImageMagick)

### Browser Extensions
- **Firefox**: Built-in "Firefox Screenshots"
- **Chrome**: "Full Page Screen Capture" extension
- **Edge**: Built-in screenshot tool

## 📋 Screenshot Checklist

### Basic Views
- [ ] `desktop-view.png` - Full desktop interface
- [ ] `mobile-areas.png` - Mobile area selection
- [ ] `mobile-seats.png` - Mobile seat detail

### Seat Status Examples
- [ ] `available-seats.png` - All available (green)
- [ ] `selected-seat.png` - Single selected (orange)
- [ ] `reserved-seats.png` - Multiple reserved (red)
- [ ] `mixed-status.png` - Mixed states

### Mobile Status
- [ ] `mobile-selected.png` - Mobile selected state
- [ ] `mobile-reserved.png` - Mobile reserved state

### Interactive States
- [ ] `reservation-process.png` - Step-by-step process
- [ ] `button-states.png` - Button state changes

## 🎨 Visual Guidelines

### Quality Standards
- **Resolution**: Minimum 1200px width for desktop, 375px for mobile
- **Format**: PNG preferred for clarity
- **Quality**: High quality, no compression artifacts
- **Clarity**: Text and colors should be clearly visible

### Composition Tips
- **Center the content**: Ensure the seat grid is centered in the frame
- **Show context**: Include enough surrounding area to show the full interface
- **Highlight states**: Make sure the different seat colors are clearly visible
- **Include UI elements**: Show buttons and interactive elements when relevant

### Color Accuracy
- **Available seats**: Green (#4CAF50)
- **Selected seats**: Orange (#ff9800)
- **Reserved seats**: Red (#f44336)
- **Button states**: Normal vs disabled (grayed out)

## 🔧 Troubleshooting

### Common Issues
1. **Colors not showing correctly**: Ensure you're using a modern browser
2. **Mobile view not working**: Check that dev tools mobile mode is enabled
3. **Screenshots too small**: Increase browser zoom or use full-page capture
4. **Button states unclear**: Take screenshots with and without seat selection

### Testing Checklist
- [ ] All seat states are clearly visible
- [ ] Mobile responsive behavior works
- [ ] Interactive elements are functional
- [ ] Colors match the specification
- [ ] Screenshots are high quality and clear

---

**Note**: Once you have all the screenshots, replace the placeholder references in the main README.md file. The screenshots will make the documentation much more engaging and helpful for users understanding the application's functionality.
