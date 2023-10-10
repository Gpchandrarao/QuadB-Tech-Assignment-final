import { Link } from "react-router-dom";

const JobItems = (props) => {
  const { jobDetails } = props;
  const {
    companyName,
    employmentType,
    remote,
    url,
    description,
    location,
    jobType,
    title,
    createdAt,
  } = jobDetails;

  return (
    <li className="job-item">
      <Link to={`/jobs/${createdAt}`} className="link-item">
        <div className="company-and-role-container">
          <img src={url} alt="company logo" className="job-item-company-logo" />
          <div className="job-item-role-container">
            <h1 className="job-item-role-title">{title}</h1>
            <div className="job-item-rating-container">
              <p className="job-item-rating">{jobType}</p>
              <p className="job-item-rating">{companyName}</p>
            </div>
          </div>
        </div>
        <div className="job-item-other-details-container">
          <div className="job-item-location-and-type-container">
            <div className="job-item-location-container">
              <p className="job-item-location">{location}</p>
            </div>
            <div className="job-item-type-container">
              <p className="job-item-type">{employmentType}</p>
            </div>
          </div>
          <p className="package">{remote}</p>
        </div>
        <hr width="100%" />
        <div className="job-item-description-container">
          <h1 className="job-item-description-heading">Description</h1>
          <p className="job-item-description">{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default JobItems;
