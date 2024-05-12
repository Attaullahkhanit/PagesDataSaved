PagesDataSaved Overview PagesDataSaved is a React.js application utilizing Redux Toolkit and Ant Design for managing and saving data across multiple tabs.

Functionality The application consists of a parent component containing four different tabs, each with its own child component representing a form. The parent component also includes a footer with 'Save' and 'Close' buttons.

Components Parent Component: This is the main component of the application. It contains the tabs and manages the state of the data across them.

Tab Components: Each tab is represented by a child component. These components contain forms for collecting and editing data.

Data Management Redux Toolkit: Redux Toolkit is used for state management. The parent component dispatches actions to update the Redux store when data changes within the child components. Reducers: Redux reducers handle state updates based on dispatched actions. Actions: Actions trigger state updates by dispatching payloads to reducers. Selectors: Selectors are used to retrieve specific pieces of data from the Redux store. Save Functionality When changes are made within any of the child components (tabs), the updated data is dispatched to the Redux store. The 'Save' button in the parent component triggers a save action, which collects all updated data from the Redux store and sends it to the server or performs any necessary data-saving operations. Dependencies React.js Redux Toolkit Ant Design Installation Clone the repository: git clone https://github.com/Attaullahkhanit/PagesDataSaved Navigate to the project directory: cd PagesDataSaved Install dependencies: npm install Usage Start the development server: npm start Access the application in your web browser at http://localhost:3000 Contributions Contributions are welcome! Feel free to fork the repository and submit pull requests with any improvements or additional features.

License This project is licensed under the MIT License.
