import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhotoFollow from "./WhoToFollow";
import LandingRecommendedPost from "./LandingRecommendedPost";
import axios from "axios";
import { Skeleton } from "antd";
import "./LandingMainPage.css";

const LandingMainPage = ({ userDetails }) => {
  const [tab, setTab] = useState(0);
  const [stories, setStories] = useState();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    async function getStories() {
      await axios
        .get("/api/stories")
        .then((res) => {
          setLoading(false);
          setStories(res.data.data?.slice(0, 10));
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setLoading(false);
        });
    }
    getStories();
  }, []);

  useEffect(() => {
    async function getUsers() {
      await axios
        .get("/api/user")
        .then((res) => {
          if (res.data.status) {
            let _users = res.data?.data?.filter(
              (data) => data?._id !== userDetails?._id
            );
            setUsers(_users);
            setUserLoading(false);
          }
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setUserLoading(false);
        });
    }
    getUsers();
  }, []);

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
            <h6>Share your ideas with millions of readers.</h6>
            <Link to="/new-story">
              <button>Write on Medium</button>
            </Link>
          </div>
          {tab === 0 && (
            <>
              {/* <div className="follow"> */}
              {/* <h2>Who to follow</h2> */}
              {users?.map((data) => (
                <WhotoFollow key={data?._id} data={data} />
              ))}
            </>
          )}
          {tab === 1 && (
            <div className="landing-recommended-posts">
              {[...Array(10)].map((_, index) => {
                return (
                  <>
                    {loading && (
                      <Skeleton.Button
                        key={index}
                        style={{
                          margin: "10px 0",
                        }}
                        active={true}
                        size={"lage"}
                        shape={"default"}
                        block={true}
                      />
                    )}
                  </>
                );
              })}

              {stories?.map((data) => (
                <LandingRecommendedPost
                  userDetails={userDetails}
                  key={data?._id}
                  data={data}
                />
              ))}

              {/* <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost /> */}
            </div>
          )}
        </div>
        <div className="landing-main-right">
          <div className="recommended-topics">
            <h2>Recommended topics</h2>
            <div className="topic">
              <span>Technology</span>
              <span>Money</span>
              <span>Business</span>
              <span>Productiviy</span>
              <span>Psychology</span>
              <span>Mindfulness</span>
              <span>Art</span>
            </div>
          </div>
          <div className="follow">
            <h2>Who to follow</h2>
            {users?.map((data) => (
              <WhotoFollow key={data?._id} data={data} />
            ))}
            {[...Array(5)].map((_, idx) => {
              return (
                <>
                  {userLoading && (
                    <Skeleton key={idx} active avatar paragraph={{ rows: 1 }} />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMainPage;
