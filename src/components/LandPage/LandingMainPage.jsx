import React from "react";

const LandingMainPage = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMainPage;
