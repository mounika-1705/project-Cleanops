import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import "./CommunityList.css";

export default function CommunityList() {
  const { user } = useAuth(); 
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/community").then((res) => setList(res.data));
  }, []);

  return (
    <div className="community-list-container">
      
      {/* header */}
      <div className="list-header">
        <h2>Community Projects</h2>

        {/* show for all logged in users */}
        {user && (
          <Link to="/community/create" className="create-btn"> Create Project </Link>
        )}
      </div>

      {/* list */}
      {list.length === 0 ? (
        <p>No community projects</p>
      ) : (
        <ul className="project-list">
          {list.map((c) => (
            <li key={c._id}>
              <Link to={`/community/${c._id}`}>
                {c.title} – {c.status} – Ward {c.ward}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}