import React from "react";
import "./dashboard.css";
import chart from "../../assets/attendance.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard">
        <div className="left">
          <ul>
            <Link to='/dashboard' className="active">Dashboard</Link>
            <Link to='/submissions'>Submissions</Link>
            <Link to='/classes'>Classes</Link>
            <Link to='/forum'>Forum</Link>
          </ul>
        </div>
        <div className="right">
          <div className="header">
            <div className="box">
              <p>
                Course : <b>ECE</b>
              </p>
              <p>
                Level: <b>500</b>
              </p>
            </div>
            <div className="box week">
              <h2>Week 6</h2>
              <p>Wednesday, 23rd July 2024</p>
            </div>
            <div className="div">
              <h4>John Iluyemi</h4>
              <p>U2018/3020***</p>
            </div>
          </div>
          <div>
            <table>
              <tr>
                <th></th>
                <th>8 - 10 am</th>
                <th>10 - 12 am</th>
                <th>12 - 2 pm</th>
                <th>2 - 4pm</th>
                <th>4 - 6 pm</th>
              </tr>
              <tr>
                <th>Monday</th>
                <td>ECE 507</td>
                <td>ECE 515</td>
                <td>ECE 508</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th>Tuesday</th>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>ECE 510</td>
              </tr>
              <tr>
                <th>Wednesday</th>
                <td>ECE 509</td>
                <td>ECE 518</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th>Thursday</th>
                <td>ECE 517</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th>Friday</th>
                <td>-</td>
                <td>ECE 516</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </table>
          </div>

          <section className="content">
            <img src={chart} alt="chart" width={150} height={200} />
            <div className="updates">
              <p className="update-title">Updates</p>
              <div className="box">
                <div className="group">
                  <p>ECE 517 class is live</p>
                  <button>Join</button>
                </div>
                <div className="group">
                  <p>ECE 507 assignment submission is ongoing</p>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
