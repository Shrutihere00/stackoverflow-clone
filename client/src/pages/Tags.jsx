import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import Tagslist from "./Tagslist";
import "./tags.css";
const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: "javascript",
      tagDesc:
        "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
    },
    {
      id: 2,
      tagName: "python",
      tagDesc:
        "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.",
    },
    {
      id: 3,
      tagName: "c#",
      tagDesc:
        'C# (pronounced "See Sharp") is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers.',
    },
    {
      id: 4,
      tagName: "java",
      tagDesc:
        "What is Java? Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages.",
    },
    {
      id: 5,
      tagName: "php",
      tagDesc:
        "PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites. It is integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix, and Microsoft SQL Server.",
    },
    {
      id: 6,
      tagName: "html",
      tagDesc:
        "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.",
    },
    {
      id: 7,
      tagName: "android",
      tagDesc:
        "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.",
    },
    {
      id: 8,
      tagName: "css",
      tagDesc:
        "CSS stands for Cascading Style Sheets · CSS describes how HTML elements are to be displayed on screen, paper, or in other media · CSS saves a lot of work.",
    },
    {
      id: 9,
      tagName: "reactjs",
      tagDesc:
        "React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
    },
    {
      id: 10,
      tagName: "nodejs",
      tagDesc:
        "Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.",
    },
  ];
  return (
    <>
      <div className="home-main-container">
        <div className="home-container-1">
          <LeftSideBar />
        </div>
        <div className="home-container-2">
          <h1 className="tags-h1">Tags</h1>
          <p className="tags-p">
            A tag is a keyword or label that categories your question with
            other, similar questions.
          </p>
          <p className="tags-p">
            Using the right tags makes it easier for others to find and answer
            your question.
          </p>
          <div className="tags-list-container">
            {tagsList.map((tag) => {
              return <Tagslist tag={tag} key={tag.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
