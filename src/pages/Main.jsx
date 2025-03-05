import React from "react";
import { Card, Col, Row, Tooltip } from "antd";
import {
  GithubFilled,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import vijayPhoto from "./vijay_photo.jpeg"; // Adjust the path if needed
import { motion } from "framer-motion";

export default function MainPage() {
  const projects = [
    {
      title: "Raj. Sampark (Rajasthan Govt.)",
      description: [
        "\u2022 Developed and designed the UI for the 181 Extended Location Form using Ant Design.",
        "\u2022 Integrated APIs and managed child nodes with Redux (RTK) and Saga.",
        "\u2022 Implemented search functionality with recursive hierarchy.",
        "\u2022 Revamped UI, redesigned Side Drawer menu, and added API HealthCheck using Context Provider.",
      ],
      techStack: ["React.js", "Redux", "Saga", "Node.js", "JavaScript"],
      href: "https://samparkdev.e-connectsolutions.com/",
      icon: <GithubOutlined style={{color: "white"}}/>,
      github: "https://github.com/ankittparikh/sampark-web-portal"
    },
    {
      title: "EWS Project",
      description: [
        "\u2022 Developed RESTful APIs and React UI components for the UAM module.",
        "\u2022 Implemented functionalities for managing users, groups, roles, and features.",
      ],
      techStack: ["JavaScript", "Node.js", "React.js", "MongoDB", "PostgreSQL"],
      href: "https://lentra.ai/",
    },
    {
      title: "Data Capture",
      description: [
        "\u2022 Developed and maintained real-time monitoring dashboards using Node.js API and React.",
      ],
      techStack: ["Node.js", "React.js"],
    },
    {
      title: "Astrology Life",
      description: [
        "\u2022 Built an astrology platform where users can chat with astrologers in real-time.",
        "\u2022 Implemented WebSocket-based real-time messaging.",
        "\u2022 Developed an e-commerce section for purchasing Puja Samagri.",
        "\u2022 Managed PostgreSQL database with Prisma ORM and containerized services using Docker.",
      ],
      techStack: [
        "WebSocket",
        "Node.js",
        "React.js",
        "JavaScript",
        "PostgreSQL",
        "Prisma",
        "Docker",
      ],
      href: "",
      icon: <GithubOutlined style={{color: "white"}}/>,
      github: "https://github.com/vijayameta/astro"
    },
    {
      title: "Portfolio",
      description: [
        "\u2022 Showcases my experience and projects in full-stack development.",
        "\u2022 Demonstrates expertise in both frontend and backend technologies.",
        "\u2022 Features a clean and interactive UI with a seamless user experience.",
      ],
      techStack: ["Node.js", "Express.js", "React.js", "JavaScript", "MongoDb"],
      href: "https://portfolio-seven-pi-10.vercel.app/Home",
      icon: <GithubOutlined style={{color: "white"}}/>,
      github: "https://github.com/vijayameta/portfolio"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        width: 760,
        background: "transparent",
        padding: 10,
        fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
        background: "#242424",
        color: "white", // Consistent text color
      }}
    >
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Vijay Ameta</h2>
        <motion.p
          style={{
            background: "white",
            color: "black",
            borderRadius: 5,
            textAlign: "center",
            height: 20,
            padding: "2px 10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          animate={{ rotate: [0, 10, -10, 0] }} // Rotates back and forth
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          Hire me!
        </motion.p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <p style={{ textAlign: "initial" }}>
            Jr. Full Stack Engineer focused on learning through experimentation
            and product development.
          </p>
          <p style={{ textAlign: "initial", marginBottom: 5 }}>
            @ Udaipur, Rajasthan
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Tooltip title="+91 8209220877">
              <PhoneOutlined style={{ fontSize: 18, cursor: "pointer" }} />
            </Tooltip>
            <Tooltip title="https://github.com/vijayameta">
              <GithubOutlined
                style={{ fontSize: 18, cursor: "pointer" }}
                onClick={() =>
                  window.open("https://github.com/vijayameta", "_blank")
                }
              />
            </Tooltip>
            <Tooltip title="linkedin.com/in/vijay-ameta-151080a3">
              <LinkedinOutlined
                style={{ fontSize: 18, cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vijay-ameta-151080a3",
                    "_blank"
                  )
                }
              />
            </Tooltip>
            <Tooltip title="ametajoshi23@gmail.com">
              <MailOutlined style={{ fontSize: 18, cursor: "pointer" }} />
            </Tooltip>
          </p>
        </div>
        <img
          src={vijayPhoto}
          alt="Profile"
          style={{ width: 100, height: 100, borderRadius: "50%" }}
        />
      </div>

      <div>
        <h3 style={{ textAlign: "initial" }}>About Me</h3>
        <p style={{ textAlign: "initial" }}>
          Experienced Full Stack Engineer proficient in HTML, CSS, JavaScript,
          ReactJS, Redux, Saga, Node.js, Express, MongoDB, Postgres, Prisma, and
          Docker. Skilled in crafting clean, scalable code to meet business
          objectives. Adept at problem-solving and data integration. Eager to
          leverage expertise in a challenging role for continuous growth and
          development.
        </p>
      </div>

      <div>
        <h3 style={{ textAlign: "initial" }}>Work Experience</h3>
        <Card
          style={{
            width: "100%",
            textAlign: "initial",
            background: "transparent",
            color: "white",
            fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif", // Ensuring consistent font
            marginBottom: 10,
          }}
        >
          <p>
            <strong>E-connect Solutions Pvt. Ltd. - Udaipur</strong> (Intern)
          </p>
          <p>Full Stack Developer</p>
          <p style={{ fontSize: 14 }}>
            Worked on building scalable web applications using React and
            Node.js. Developed REST APIs and optimized UI performance.
          </p>
        </Card>
        <Card
          style={{
            width: "100%",
            textAlign: "initial",
            background: "transparent",
            color: "white",
            fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif", // Ensuring consistent font
          }}
        >
          <p>
            <strong>Lentra.ai - Remote</strong> (Intern)
          </p>
          <p>Full Stack Developer</p>
          <p style={{ fontSize: 14 }}>
            Built and integrated AI-driven solutions into financial products.
            Focused on microservices, API integration, and frontend
            enhancements.
          </p>
        </Card>
      </div>

      <div>
        <h3 style={{ textAlign: "initial" }}>Education</h3>
        <Card
          style={{
            width: "100%",
            textAlign: "initial",
            background: "transparent",
            color: "white",
            fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif", // Ensuring consistent font
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <strong>College of Technology and Engineering</strong>
            </p>
            <p style={{ color: "grey" }}>2021-2023</p>
          </div>
          <p style={{ color: "grey" }}>
            Master of Technology in Power Electronics
          </p>
        </Card>
        <Card
          style={{
            width: "100%",
            textAlign: "initial",
            background: "transparent",
            color: "white",
            fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif", // Ensuring consistent font
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <strong>SRM University, Chennai</strong>
            </p>
          </div>
          <p style={{ color: "grey" }}>
            Bachelor of Technology in Electrical and Electronics Engineering
          </p>
        </Card>
      </div>
      <div>
        <h3 style={{ textAlign: "initial" }}>Skills</h3>
        <p style={{ textAlign: "initial", fontSize: 14 }}>
          Language:- Javascript, Typescript
        </p>
        <p style={{ textAlign: "initial", fontSize: 14 }}>
          Databases/Os:- PostgreSQL, MongoDb, Redis, Linux, Windows
        </p>
        <p style={{ textAlign: "initial", fontSize: 14 }}>ORM:- Prisma</p>
        <p style={{ textAlign: "initial", fontSize: 14 }}>
          Libraries:- Antd, Material-UI, Tailwind css, Zod, Mongoose, Redux
        </p>
        <p style={{ textAlign: "initial", fontSize: 14 }}>
          Frameworks:- React.js, Express.js
        </p>
        <p style={{ textAlign: "initial", fontSize: 14 }}>
          Tools:- Node.js, Websocket, RTK, Docker
        </p>
      </div>
      <h3 style={{ textAlign: "initial" }}>Projects</h3>
      <Row gutter={[16, 16]} style={{ display: "flex", flexWrap: "wrap" }}>
        {projects.map((project, index) => (
          <Col xs={24} md={12} key={index} style={{ display: "flex" }}>
            <Card
              style={{
                textAlign: "initial",
                background: "transparent",
                color: "white",
                fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minHeight: "220px", // Adjusted for uniform height
                minWidth: "100%",
              }}
            >
              <p>
                <strong>{project.title}</strong>
              </p>
              <div
                style={{
                  maxHeight: "80px", // Set max height for scrollability
                  overflowY: "auto",
                  color: "grey",
                  fontSize: 14,
                }}
              >
                {project.description.map((desc, i) => (
                  <p key={i} style={{ margin: 0 }}>
                    {desc}
                  </p>
                ))}
              </div>
              <p>
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
              <a
                href={project.href}
                style={{
                  color: "#1890ff",
                  fontSize: 14,
                  textDecoration: "underline",
                }}
                target="blank"
              >
                Learn More
              </a>
              <a style={{position: "absolute", right: 20}} href={project.github} target="_blank">{project.icon}</a>
            </Card>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}
