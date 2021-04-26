//import React, { Component } from "react";
import React, { useState, useEffect, useCallback } from "react";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="SearchForm-button"
          // onClick={() => onDeleteTodo(id)}
        >
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          // checked={completed}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
// class SearchBar extends Component {
//   state = { query: "" };
//   handleChange = (e) => {
//     this.setState({ query: e.currentTarget.value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.query);
//     this.setState({ query: "" });
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button
//             type="submit"
//             className="SearchForm-button"
//             // onClick={() => onDeleteTodo(id)}
//           >
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             value={this.state.query}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             // checked={completed}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default SearchBar;
