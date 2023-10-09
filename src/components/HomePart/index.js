import { Component } from "react";
import Header from "../Header";
import Cookies from "js-cookie";
import JobItems from "../JobItems";
import { Link } from "react-router-dom";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class HomePart extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: "",
    allJobsData: [],
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    // const { searchInput } = this.state;
    const url = `https://www.arbeitnow.com/api/job-board-api`;
    const jwtToken = Cookies.get("jw_token");
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };

    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      const updateDat = data.data.map((eachJob) => ({
        companyName: eachJob.company_name,
        employmentType: eachJob.employment_type,
        remote: eachJob.remote,
        url: eachJob.url,
        description: eachJob.description,
        location: eachJob.location,
        jobType: eachJob.job_type,
        title: eachJob.title,
        createdAt: eachJob.created_at,
      }));
      console.log(updateDat);
      this.setState({
        apiStatus: apiStatusConstants.success,
        allJobsData: updateDat,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  onClickJobButton = () => {
    this.getAllJobs();
  };

  onChangeSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  successView = () => {
    const { allJobsData } = this.state;
    return (
      <ul>
        {allJobsData.map((jobDetails, inex) =>(
          <JobItems key={inex} jobDetails={jobDetails} />

        ))}
    </ul>
    )
  };

  getFinalRender = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatus.inProgress:
        return this.loading();
      case apiStatus.success:
        return this.successView();
      case apiStatus.failure:
        return this.failureView();
      default:
        return null;
    }
  };

  render() {
    const { searchInput } = this.state;
    return (
      <>
        <Header />
        {this.getFinalRender()}
        <div className="home-container">
          <div className="hone-content">
            <input
              text="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearch}
            />
            <Link to="/jobs">
              <button
                type="button"
                onClick={this.onClickJobButton}
                className="job-button"
              >
                Find JOb
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default HomePart;
