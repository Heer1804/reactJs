<h1>📘 React CRUD App (Form + Table View)</h1>

  <p>This project is a simple and responsive React CRUD (Create, Read, Update, Delete) application that lets users:</p>
  <ul>
    <li>Add new data using a form</li>
    <li>Preview user-uploaded images via URL</li>
    <li>Validate inputs for name, email, phone, and image</li>
    <li>Search, filter, and soft delete entries</li>
    <li>Use pagination and control records per page</li>
  </ul>

  <hr>

  <h2>📂 Folder & File Structure</h2>
  <ul>
    <li><code>App.jsx</code> – Main component with routing logic</li>
    <li><code>main.jsx</code> – React root rendering</li>
    <li><code>components/Header.jsx</code> – Sticky navigation bar with links</li>
    <li><code>components/Add.jsx</code> – Form to add new entries with validations</li>
    <li><code>components/View.jsx</code> – Table view with search, pagination, delete</li>
  </ul>

  <hr>

  <h2>✨ Features Explained</h2>

  <h3>1. Add Page</h3>
  <ul>
    <li>Form fields: Name, Email, Phone Number, Image URL</li>
    <li>Validations:
      <ul>
        <li>Name must be at least 3 characters</li>
        <li>Email must follow correct pattern</li>
        <li>Phone must contain only digits</li>
        <li>Image must not be empty</li>
      </ul>
    </li>
    <li>Image preview is shown below the input if valid</li>
    <li>After submission, data is saved to <code>localStorage</code> with a unique ID and <code>status: true</code></li>
  </ul>

  <h3>2. View Page</h3>
  <ul>
    <li>Loads only records where <code>status === true</code></li>
    <li>Search across name, email, or phone</li>
    <li>Delete button sets <code>status: false</code> to hide (soft delete)</li>
    <li>Pagination:
      <ul>
        <li>Choose how many records per page (5 / 10 / 15)</li>
        <li>Switch pages using previous/next & direct numbers</li>
      </ul>
    </li>
    <li>Responsive layout with Bootstrap styling</li>
  </ul>

  <hr>

  <h2>⚙️ Getting Started</h2>

  <h3>🔧 Prerequisites</h3>
  <ul>
    <li>Node.js and npm installed</li>
    <li>Modern browser (Chrome, Firefox, etc.)</li>
  </ul>

  <h3>📥 Installation</h3>
  <pre><code>git clone https://github.com/yourusername/react-crud-form-app.git
cd react-crud-form-app
npm install</code></pre>

  <h3>▶️ Running the App</h3>
  <pre><code>npm run dev</code></pre>
  <p>Open browser at: <a href="http://localhost:5173" target="_blank">http://localhost:5173</a></p>

  <hr>

  <h2>🧠 Technologies Used</h2>
  <ul>
    <li><strong>React</strong> – For building UI</li>
    <li><strong>React Router</strong> – For navigation between pages</li>
    <li><strong>React Bootstrap</strong> – For layout and components</li>
    <li><strong>LocalStorage</strong> – For storing data persistently in the browser</li>
  </ul>

  <hr>

  <h2>🗃️ Example Data Format</h2>
  <pre><code>[
  {
    "id": "1713689013912",
    "name": "Alice Smith",
    "email": "alice@example.com",
    "phone": "9876543210",
    "image": "https://example.com/alice.jpg",
    "status": true
  }
]</code></pre>

  <hr>

  <h2>📸 Screenshots</h2>
  
![Screenshot 2025-04-21 160227](https://github.com/user-attachments/assets/6a32d04b-a242-4cef-abcf-7b4cc130ae2e)
![Screenshot 2025-04-21 160201](https://github.com/user-attachments/assets/aeeedfe2-1663-4eba-b0f0-cd30e4368ad0)
![Screenshot 2025-04-21 160142](https://github.com/user-attachments/assets/b907b8fb-d895-4ac4-87c0-0157f62898d4)
![Screenshot 2025-04-21 160122](https://github.com/user-attachments/assets/712e4714-5df5-4b99-b14a-793bb9573bf4)
![Screenshot 2025-04-21 155955](https://github.com/user-attachments/assets/4d7754f5-ae92-429c-92e3-65ed53f10853)

 
  <hr>

  <h2>🙋 Tips</h2>
  <ul>
    <li>If image URL is broken, a placeholder image is shown automatically</li>
    <li>All form fields reset after successful submission</li>
    <li>You can update the app to support edit functionality as well</li>
  </ul>

  <hr>

  <h2>🧑‍💻 Author</h2>
  <p><strong>Heer Parikh</strong><br>
    Check out my <a href="https://github.com/Heer1804" target="https://github.com/Heer1804">GitHub</a>
  </p>
