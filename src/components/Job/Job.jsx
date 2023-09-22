import { IoLocationOutline, IoLogoEuro } from "react-icons/io5";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <div className="flex gap-2">
            <h2 className="flex">
              <IoLocationOutline className="text-2xl mr-2"> </IoLocationOutline>
              Location: {location}
            </h2>
            <h2 className="flex">
              <IoLogoEuro className="text-2xl mr-2"> </IoLogoEuro>Salary:{" "}
              {salary}
            </h2>
          </div>
          <div className="card-actions ">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
