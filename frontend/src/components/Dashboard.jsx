import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "" });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:8081/api/books", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setBooks(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingId
      ? `http://localhost:8081/api/books/${editingId}`
      : "http://localhost:8081/api/books";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ title: "", author: "" });
      setEditingId(null);
      fetchBooks();
    } else {
      alert("Something went wrong");
    }
  };

  const handleEdit = (book) => {
    setForm({ title: book.title, author: book.author });
    setEditingId(book.id);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:8081/api/books/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) fetchBooks();
    else alert("Failed to delete");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <h2>Welcome to your Dashboard</h2>

      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? "Update" : "Add"} Book</button>
      </form>

      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <div className="actions">
              <button onClick={() => handleEdit(book)}>Edit</button>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
