<h1>🎓 Student Management System</h1>
    <p>A <strong>React-based</strong> student management system that allows users to <strong>add, edit, delete, and manage</strong> student data with ease. It uses local storage to persist data and provides a user-friendly interface.</p>

  <h2>🚀 Features</h2>
    <ul>
        <li>🔹 <strong>Add new students</strong> with details like name, email, password, gender, hobbies, city, and profile image.</li>
        <li>🔹 <strong>Display all students</strong> in a structured table format.</li>
        <li>🔹 <strong>Edit student details</strong> with an intuitive form.</li>
        <li>🔹 <strong>Delete students</strong> with a confirmation prompt.</li>
        <li>🔹 <strong>Search functionality</strong> to quickly find students.</li>
        <li>🔹 <strong>Sort feature</strong> for ordering students alphabetically or by date added.</li>
        <li>🔹 <strong>Pagination support</strong> for better navigation in case of a large dataset.</li>
        <li>🔹 <strong>Responsive design</strong> for seamless usage across different devices.</li>
        <li>🔹 <strong>Uses Local Storage</strong> to persist data even after the page is refreshed.</li>
    </ul>

<h2>📦 Installation & Setup</h2>
    <p>Ensure you have <strong>Node.js</strong> installed on your system. Follow these steps to set up the project:</p>
    <pre>
      
# Clone the repository
git clone https://github.com/Heer1804/reactJs/edit/main/router

# Navigate to the project directory
cd router

# Install dependencies
npm install

# Start the development server
npm start
    </pre>

<h2>🛠️ Technologies Used</h2>
    <ul>
        <li>⚛️ <strong>React.js</strong> - Frontend library for UI components.</li>
        <li>🔀 <strong>React Router</strong> - Manages navigation between pages.</li>
        <li>📦 <strong>Local Storage</strong> - Stores student data persistently.</li>
        <li>🎨 <strong>CSS</strong> - Used for styling the components.</li>
        <li>✨ <strong>React Icons</strong> - Provides iconography for UI enhancements.</li>
    </ul>

<h2>📂 Project File Structure</h2>
    <pre>
📂 student-management
│── 📜 package.json         # Project dependencies
│── 📜 README.md            # Project documentation
│── 📂 src                  # Source files
│   ├── 📜 index.js         # Entry point
│   ├── 📜 App.js           # Main application component
│   ├── 📂 components       # UI Components
│   │   ├── 📜 Header.js    # Navigation bar
│   │   ├── 📜 Home.js      # Add student form
│   │   ├── 📜 Display.js   # Student records table
│   │   ├── 📜 Update.js    # Edit student details
│   ├── 📂 styles           # CSS styling
│   │   ├── 📜 display.css  # Styles for display page
│   │   ├── 📜 update.css   # Styles for update page
│   ├── 📂 assets           # Images and icons
│── 📂 public               # Static files
│── 📜 .gitignore           # Files to ignore in git
    </pre>

  <h2>📖 How to Use</h2>

  <h3>1️⃣ Home Page</h3>
    <p>Navigate to <code>/</code> (default route) to add a new student. Fill in the details and click <strong>Submit</strong>.</p>

  <h3>2️⃣ Display Page</h3>
    <p>View all student records at <code>/display</code>. Features include:</p>
    <ul>
        <li>🔎 <strong>Search bar</strong> to filter students by name.</li>
        <li>🔼🔽 <strong>Sorting options</strong> for sorting alphabetically.</li>
        <li>📃 <strong>Pagination</strong> for handling large student lists.</li>
        <li>✏️ <strong>Edit button</strong> to update student details.</li>
        <li>🗑️ <strong>Delete button</strong> to remove a student record.</li>
    </ul>

  <h3>3️⃣ Edit Student</h3>
    <p>Click on the <strong>Edit</strong> button next to a student’s entry to update their details.</p>

  <h3>4️⃣ Delete Student</h3>
    <p>Click the <strong>Delete</strong> button, and a confirmation prompt will appear before removing the student.</p>

  <h2>📜 License</h2>
    <p>This project is licensed under the MIT License.</p>

