# NoteIt Organizer (BoxIt)

A web-based note-taking application that helps you organize your notes into customizable "boxes" with drag-and-drop functionality.

## Overview

NoteIt Organizer is a responsive single-page web application that allows users to:
- Create and manage multiple note containers called "boxes"
- Add, edit, and organize notes within each box
- Reorder notes using intuitive drag-and-drop interactions
- Save and restore data using browser's local storage
- Switch between different boxes seamlessly

## Features

- **Box Management**: Create, rename, and switch between multiple note boxes
- **Note Organization**: Add titled notes with descriptions to any box
- **Drag & Drop**: Reorder notes within a box using drag-and-drop functionality
- **Local Storage**: Persist your data in the browser using localStorage
- **Responsive Design**: Mobile-friendly interface built with Bootstrap 3
- **User Profiles**: Support for multiple user profiles stored locally

## Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **Bootstrap 3.3.4** - Responsive CSS framework
- **jQuery 1.9.1** - DOM manipulation and AJAX
- **jQuery UI** - Drag-and-drop functionality
- **Knockout.js 3.3.0** - MVVM pattern and data binding
- **Knockout Sortable** - Drag-and-drop integration with Knockout

### Backend
- **ASP.NET** - Web server configuration (Web.config)

## Project Structure

```
/workspace
├── BootstrapWebApp1/          # Main web application
│   ├── Content/               # CSS stylesheets
│   │   ├── bootstrap.min.css
│   │   ├── CustomStyles.css
│   │   ├── drag.css
│   │   └── jquery-ui.min.css
│   ├── Scripts/               # JavaScript files
│   │   ├── bootstrap.js       # Bootstrap framework
│   │   ├── jquery-1.9.1.js    # jQuery library
│   │   ├── jquery-ui.js       # jQuery UI
│   │   ├── knockout-3.3.0.js  # Knockout.js
│   │   ├── knockout-sortable.js
│   │   ├── boxit-main.js      # Main application logic
│   │   ├── boxit-note.js      # Note view model
│   │   └── dragdrop.js        # Drag-drop handlers
│   ├── fonts/                 # Web fonts
│   ├── Index.html             # Main entry point
│   ├── BoxItWeb.csproj        # Visual Studio project file
│   └── Web.config             # ASP.NET configuration
├── BoxItSolution.sln          # Visual Studio solution file
└── README.md                  # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Optional: Visual Studio or Visual Studio Code for development
- Optional: IIS Express or any web server for hosting

### Running the Application

#### Option 1: Direct Browser Access
1. Navigate to the `BootstrapWebApp1` folder
2. Open `Index.html` in your web browser

#### Option 2: Using Visual Studio
1. Open `BoxItSolution.sln` in Visual Studio
2. Press `F5` to run with IIS Express
3. The application will open in your default browser

#### Option 3: Using a Local Web Server
```bash
# Using Python 3
cd BootstrapWebApp1
python -m http.server 8000

# Then navigate to http://localhost:8000
```

## Usage Guide

### Creating a Box
1. Click the inbox icon (➕) in the navbar
2. Enter a name for your new box
3. Click "Add" to create the box

### Adding Notes
1. Select a box from the dropdown menu
2. Click the "Add Note" button
3. Fill in the title and description
4. Click "Save"

### Reordering Notes
- Drag and drop notes within a box to reorder them
- Notes will automatically update their positions

### Saving Your Work
- Click the save icon (💾) in the navbar
- Enter your username to save all boxes and notes to localStorage

### Restoring Data
- Click the open icon (📂) in the navbar
- Enter your username to restore previously saved data

## Data Storage

All data is stored locally in your browser's localStorage under the username you provide. The data structure includes:
- User name
- Array of boxes (each with unique ID and name)
- Notes within each box (title, content, position)

**Note**: Clearing your browser data will remove all saved notes. Consider exporting important data.

## Development

### Building from Source

1. Clone the repository
2. Open `BoxItSolution.sln` in Visual Studio
3. Restore NuGet packages if prompted
4. Build and run the solution

### Key Files to Modify

- `Scripts/boxit-main.js` - Main application view models and logic
- `Scripts/boxit-note.js` - Note-specific functionality
- `Content/CustomStyles.css` - Custom styling
- `Index.html` - Main HTML structure and bindings

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Microsoft Edge
- Safari
- Internet Explorer 9+ (limited support)

## License

This project is provided as-is for educational and personal use.

## Contributing

Feel free to fork this project and submit pull requests for improvements.

## Acknowledgments

- Bootstrap team for the responsive framework
- Knockout.js team for the MVVM library
- jQuery team for DOM manipulation utilities
