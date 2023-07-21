import React, { useState } from "react";
import { Link } from "react-router-dom";

const LandingMainPage = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="landing-main">
      <div className="landing-main-container">
        <div className="landing-main-left">
          <div className="landing-main-tabs">
            <div
              onClick={() => setTab(0)}
              className={`tab ${tab === 0 && "active"}`}
            >
              <span>FOLLOWING</span>
            </div>
            <div
              onClick={() => setTab(1)}
              className={`tab ${tab === 1 && "active"}`}
            >
              <span>RECOMMENDED FOR YOU</span>
            </div>
          </div>
          <div className="landing-write-story">
            <h6>Share your ideas with millions of readers</h6>
            <Link to="/new-story">
              <button>Write on medium</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMainPage;
