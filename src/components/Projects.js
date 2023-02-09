import React from "react";
import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "NFT marketplace — digital art and collectibles",
    img1: "https://res.cloudinary.com/dluzykyma/image/upload/v1675864294/Screenshot_1_bowej9.png",
    img2: "https://res.cloudinary.com/dluzykyma/image/upload/v1675864375/Screenshot_2_bkmdpp.png",
    description:
      "Users should be able to browse and view the NFTs that are available on the site, including their images, descriptions, and other relevant information, purchase NFTs directly from the site, either from the creators or from other users.",
    tools: ["Node.js", "React.js", "Gsap", "Tailwind CSS"],
    liveLink: "https://nftgsap.netlify.app",
    frontEndLink: "https://github.com/sakhyat/nft_gsap",
    backEndLink: "https://github.com/sakhyat/nft_gsap",
  },
  {
    id: 2,
    title: "REACT SHOPPING — AN ELECTRONICS STORE",
    img1: "https://res.cloudinary.com/dluzykyma/image/upload/v1675864915/Screenshot_3_lasn3r.png",
    img2: "https://res.cloudinary.com/dluzykyma/image/upload/v1675864948/Screenshot_4_pbc4tb.png",
    description:
      "Shopping cart functionality has been implemented using Redux Toolkit. All the product data has been served via JSON server and fetched using RTK Query. Cart items also saved into the local storage of the client’s browser",
    tools: [
      "React.js",
      "Redux.js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
    ],
    liveLink: "https://redux-ecommerce2023.netlify.app",
    frontEndLink: "https://www.google.com",
  },
];

const Projects = () => {
  return (
    <div className="project mt-40" id="projects">
      <SectionTitle title={"Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
