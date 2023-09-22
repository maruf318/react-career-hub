import { useLoaderData, useParams } from "react-router-dom";
import {
  IoLogoEuro,
  IoMailOutline,
  IoCalendarOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);
  console.log(intId, job);

  return (
    <div>
      <h2 className="font-bold text-3xl my-4">
        Job details of: {job.job_title}
      </h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <p className="mb-4">
            <span className="font-bold text-xl">Job description: </span>
            {job.job_description}
          </p>
          <p className="mb-4">
            <span className="font-bold text-xl">Job Responsibility: </span>
            {job.job_responsibility}
          </p>
          <h2 className="text-xl font-bold mb-4">Educational Requirements:</h2>
          <p className="mb-4">{job.educational_requirements}</p>
          <h2 className="text-xl font-bold mb-4">Experiences:</h2>
          <p className="mb-4">{job.experiences}</p>
        </div>
        <div className="border rounded p-2 bg-violet-100">
          <h2 className="my-3 font-bold text-xl">Job Details</h2>
          <hr />
          <div className="flex my-4">
            <p className="text-2xl text-indigo-400">
              <IoLogoEuro></IoLogoEuro>
            </p>
            <p>
              <span className="font-bold">Salary:</span> {job.salary}
            </p>
          </div>
          <div className="flex">
            <p className="text-2xl text-indigo-400">
              <IoCalendarOutline></IoCalendarOutline>
            </p>
            <p>
              <span className="font-bold">Job Title:</span> {job.job_title}
            </p>
          </div>
          <h2 className="my-3 font-bold text-xl">Contact Information</h2>
          <hr />
          <div className="flex mt-4">
            <p className="text-2xl text-indigo-400">
              <IoCallOutline></IoCallOutline>
            </p>
            <p>
              <span className="font-bold">Phone:</span>{" "}
              {job.contact_information.phone}
            </p>
          </div>
          <div className="flex my-4">
            <p className="text-2xl text-indigo-400">
              <IoMailOutline></IoMailOutline>
            </p>
            <p>
              <span className="font-bold">Mail:</span>{" "}
              {job.contact_information.email}
            </p>
          </div>
          <div className="flex mb-4">
            <p className="text-2xl text-indigo-400">
              <IoLocationOutline></IoLocationOutline>
            </p>
            <p>
              <span className="font-bold">Address:</span>{" "}
              {job.contact_information.address}
            </p>
          </div>
          <button className="bt btn-primary w-full py-4">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
