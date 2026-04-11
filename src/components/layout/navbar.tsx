import { GithubIcon, LinkedinIcon } from "@/assets/svgs";

const Navbar = () => {
  return (
    <div>
      {/* logo */}
      <div>Logo</div>
      {/* nav items */}
      <nav>
        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>Projects & Cases</li>
          <li>Testimonials</li>
          <li>Education</li>
        </ul>
      </nav>
      {/* resume + social icons */}
      <div>
        <button>Resume</button>
        <div>
          <a
            href="https://www.linkedin.com/in/iarafathossain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon width={24} height={24} />
          </a>
          <a
            href="https://github.com/iarafathossain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
