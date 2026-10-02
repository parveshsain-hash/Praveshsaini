 import React from "react";

function App() {
  const books = [
    {
      id: 1,
      title: "SSC CGL Complete Preparation Book",
      exam: "SSC CGL",
      price: 499,
      oldPrice: 699,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "RRB Railway Group D Guide",
      exam: "Railway Group D",
      price: 399,
      oldPrice: 599,
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "UPSC Civil Services Complete Guide",
      exam: "UPSC",
      price: 599,
      oldPrice: 799,
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Banking Exam Preparation Book",
      exam: "IBPS / SBI",
      price: 449,
      oldPrice: 649,
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#0b1f3a",
          color: "white",
          padding: "20px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>📚 ExamBookStore</h1>

        <nav>
          <span style={{ marginRight: "25px" }}>Home</span>
          <span style={{ marginRight: "25px" }}>Books</span>
          <span>Mock Tests</span>
        </nav>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "55px 20px",
          textAlign: "center",
          background: "white",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            color: "#0b1f3a",
            marginBottom: "10px",
          }}
        >
          Competitive Exam Books
        </h2>

        <p style={{ fontSize: "18px", color: "#666" }}>
          SSC, Railway, UPSC, Banking aur other competitive exams ki books
        </p>
      </section>

      {/* Books */}
      <section style={{ padding: "45px 50px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#0b1f3a",
            marginBottom: "35px",
          }}
        >
          🔥 Popular Books
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "25px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.10)",
              }}
            >
              {/* Book Image */}
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "270px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Book Details */}
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    color: "#f97316",
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  {book.exam}
                </div>

                <h3
                  style={{
                    color: "#172033",
                    fontSize: "18px",
                    minHeight: "50px",
                    margin: "5px 0 15px",
                  }}
                >
                  {book.title}
                </h3>

                {/* Price */}
                <div style={{ marginBottom: "15px" }}>
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      color: "#0b1f3a",
                    }}
                  >
                    ₹{book.price}
                  </span>

                  <span
                    style={{
                      marginLeft: "10px",
                      color: "#999",
                      textDecoration: "line-through",
                    }}
                  >
                    ₹{book.oldPrice}
                  </span>
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => alert(`${book.title} selected`)}
                  style={{
                    width: "100%",
                    padding: "13px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#f97316",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  🛒 Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0b1f3a",
          color: "white",
          textAlign: "center",
          padding: "25px",
          marginTop: "30px",
        }}
      >
        © 2026 ExamBookStore — Competitive Exam Preparation
      </footer>
    </div>
  );
}

export default App;