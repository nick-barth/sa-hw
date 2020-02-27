import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ClientContext } from "../../App.js";
import Profile from "../../components/profile";
import Search from "../../components/search";
import "./styles.css";

function ClientList() {
  const clients = useContext(ClientContext);
  const [filteredList, setFilteredList] = useState(clients);

  const handleFilter = term => {
    const lowerTerm = term.toLowerCase();
    if (term === "") {
      setFilteredList(clients);
    }
    const newList = clients.filter(item => {
      return (
        item.name.toLowerCase().includes(lowerTerm) ||
        item.title.toLowerCase().includes(lowerTerm) ||
        (item.quote && item.quote.toLowerCase().includes(lowerTerm))
      );
    });
    setFilteredList(newList);
  };

  return (
    <div className="ClientList">
      <h2>Client List</h2>
      <div>
        <Search callback={handleFilter} />
      </div>
      <ul className="ClientList__list">
        {filteredList.map(c => {
          return (
            <Link
              key={c.id}
              className="ClientList__list-item"
              to={`/client/${c.id}`}
            >
              <li>
                <Profile client={c} isList={true} />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
export default ClientList;
