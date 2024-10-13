# Unsplash Photo Gallery Project

## Display Photos from Unsplash and Show Photo Details
### Objective:
- Build a React app that fetches and displays a list of photos from the Unsplash API. When a user clicks on a photo, a detailed view of that photo, including its title, author, and description, should be shown.
  
### Requirements:
#### 1. Display a Grid/List of Photos:
- Fetch a list of photos from the Unsplash API using their public API.
- Display the photos in a responsive grid or list view on the page.
- Each photo should display a thumbnail (a small version of the image) and the author’s name.

#### 2. Infinite Scroll (Scroll to Load More):
- As the user scrolls down the page, loads more photos automatically from the Unsplash API.
- Use pagination or the "page" parameter from the Unsplash API to fetch additional pages of photos.
- Add a loading indicator that shows when new photos are being fetched.
- Handle cases where there are no more photos to load (end of list).

#### 3. View Photo Details on Click:
- When a user clicks on any photo, navigate to a detailed view of that specific photo.
- In the detailed view, show the following:
    - The full-size image.
    - The photo title (if available) or placeholder text.
    - The author’s name.
    - The photo description (if available) or placeholder text.

#### 4. Navigation and Routing:
- Use React Router or equivalent library for navigation between the list of photos and the detailed photo view.
- Implement appropriate URLs such as /photos for the list and /photos/:id for the detailed view.

#### 5. API Integration:
- Use the Unsplash API to fetch data. You’ll need to sign up for an API key at Unsplash Developers.
- Use the official API endpoint to retrieve the list of photos and individual photo details.
- Handle loading states and errors appropriately while fetching data.

#### 6. Styling and Responsiveness:
- The UI should be responsive for both desktop and mobile screens.
- Add some basic styling, but the emphasis is more on functionality than appearance. Use a CSS framework like Bootstrap, Material UI, or plain CSS.

## Rubric

| **Criteria**            | **Description**                                                                                      | **Point** |
|-------------------------|------------------------------------------------------------------------------------------------------|-----------|
| API Integration         | Successfully fetches data from the Unsplash API, handles loading and error states well.               | 1         |
| Photo Grid/List Display | Displays photos in a responsive, well-styled grid/list with author info.                              | 2         |
| Infinite Scroll         | Infinite scroll works smoothly, with seamless loading of new photos and clear loading indicators.     | 1         |
| Photo Details View      | Displays full photo, title, author, and description. Provides a good user experience.                 | 2         |
| Routing and Navigation  | URLs are intuitive and functional.                                                                   | 1         |
| Styling and Responsiveness | App is well-designed, fully responsive across devices, with additional style considerations.       | 1         |
| Code Quality            | Code is well-organized, with comments, reusable components, and follows React best practices.         | 1         |
| Public hosting          | Upload to a public host.                                                                             | 1         |
