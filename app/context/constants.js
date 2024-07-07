// THIS FILE HOLD THE DYNAMIC DATA OF THIS WEBSITE
import taskVareImg from "@/public/work/taskvare-img.jpg";
import taskVareCoverImg from "@/public/work/taskvare-cover-img.jpg";
import talentVareImg from "@/public/work/talentvare-img.jpg";
import noImage from "@/public/backgrounds/card-bg-img.jpg";
import loadeImg from "@/public/work/loade-img.jpg";
import loadeCoverImg from "@/public/work/loade-cover-img.jpg";
import socialMediaImg from "@/public/projects/social-media-img.jpg";
import transviti from "@/public/companyLogos/transviti.jpeg"
import softsyncDev from "@/public/companyLogos/softsyncdev.jpeg"
import smit from "@/public/companyLogos/smit.jpeg"
import gbs from "@/public/companyLogos/gbsinn_logo.jpeg"
import digitalverse from "@/public/projects/digitalverse.png"
import react from "@/public/projects/react.png"
import etherSender from "@/public/projects/etherSender.png"

export const caseStudyNotFound = {
  id: 0,
  title: "Case Study Not Found",
  subTitle: "Project Management Tool",
  url: "https://www.taskvare.com/",
  imgSrc: noImage.src,
};

export const workListData = [
  {
    companyName: "Transviti",
    designation: "Front end developer",
    img: transviti,
    techStack: "React , Material UI , Tailwind CSS , Chart.js , Axios , Swagger , Git",
    startDate: "August 2023",
    endDate: "Present",
    link: 'https://www.linkedin.com/company/transviti/'
  },
  {
    companyName: "SoftsyncDev",
    designation: "Front end & Blockchain Developer",
    img: softsyncDev,
    techStack: "React , Solidity , Remix , Hardhat , Openzeppline  , Javascript ",
    startDate: "May 2023",
    endDate: "July 2023",
    link: "https://www.linkedin.com/company/softsyncdev/"
  },
  {
    companyName: "SMIT",
    designation: "MERN Stack Trainer",
    img: smit,
    techStack: "Javascript , HTML5 , CSS3 , Github",
    startDate: "February 2023",
    endDate: "May 2023",
    link: 'https://www.linkedin.com/company/saylani-welfare-international-trust-official/'
  },
  {
    companyName: "Ghani Business Solutions",
    designation: "Blockchain Developer Intern",
    img: gbs,
    techStack: "Solidity , Hardhat , truffle , Openzeppline , Remix and React",
    startDate: "Dec 2022",
    endDate: "March 2023",
    link: 'https://www.linkedin.com/company/gbsinn/'
  },
]



export const projectListData = [
  {
    id: "React-quiz-app",
    title: "Quiz App",
    subTitle: "A simple quiz app where user can score by giving right answers to the questions.",
    imgSrc: react.src,
    isFeatured: true,
    isLocked: false,
    details: {
      coverImgSrc: react.src,
      overview: {
        myRole: "Frontend Developer",
        techUsed: "React, Typescript, Material UI, Style components",
        team: "Solo worked on this Project",
        timeline: "October 2023 - January 2024",
        projectDesc: {
          para1:
            "Questions are coming from API and after selecting any option user will get to know rather the answer is correct or Not score will increase by giving the right answer of the question",
          para2:
            "",
        },
        sourceCode: "https://github.com/Sameer-472/Quiz-app-",
        demoLink: "https://wary-airplane.surge.sh/"
      },
    },
  },
  // {
  //   id: "risk-vare",
  //   title: "RiskVare",
  //   subTitle: "Risk Management system to mange and assess risk in an organization.",
  //   imgSrc: react.src,
  //   isFeatured: true,
  //   isLocked: false,
  //   details: {
  //     coverImgSrc: react.src,
  //     overview: {
  //       myRole: "Frontend Developer",
  //       techUsed: "React, Typescript, Material UI, Style components",
  //       team: "Solo worked on this Project",
  //       timeline: "October 2023 - January 2024",
  //       projectDesc: {
  //         para1:
  //           "Questions are coming from API and after selecting any option user will get to know rather the answer is correct or Not score will increase by giving the right answer of the question",
  //         para2:
  //           "",
  //       },
  //       sourceCode: "https://github.com/Sameer-472/Quiz-app-",
  //       demoLink: "https://wary-airplane.surge.sh/"
  //     },
  //   },
  // },
  {
    id: "digitalVerse",
    title: "DigitalVerse",
    subTitle: "In this Marketplace you can create sell mint and resell NFTs",
    imgSrc: digitalverse.src,
    isFeatured: true,
    isLocked: false,
    details: {
      coverImgSrc: digitalverse.src,
      overview: {
        myRole: "Frontend Developer, API Integrator",
        techUsed: "React, Ether.js, Metamask, Openzepline, Solidity , Infura , Binance Smart Chain",
        team: "Solo worked on this Project",
        timeline: "October 2023 - January 2024",
        projectDesc: {
          para1:
            "User can connect metamask wallet , user can create NFts , User can purchase NFTs , User can browse NFTs , User can resell NFTs , User can not upload duplicate NFTs",
          para2:
            "",
        },
        sourceCode: "https://github.com/Sameer-472/DigitalVerse",
        demoLink: "https://63d61ce706bfdf15e7f082ef--ditalversefyp.netlify.app/"
      },
    },
  },
  {
    id: "crypto-sender",
    title: "Web3 Ethereum transfers App",
    subTitle: "Transfer crypto to any wallet address",
    imgSrc: etherSender.src,
    isFeatured: true,
    isLocked: false,
    details: {
      coverImgSrc: etherSender.src,
      overview: {
        myRole: "Frontend Developer, Web3 developer",
        techUsed: "React, Ether.js, Metamask, Openzepline, Solidity , Infura , Alchemy , Hardhat , Ropsten test network",
        team: "Solo worked on this Project",
        timeline: "October 2023 - January 2024",
        projectDesc: {
          para1:
            "User can connect metamask wallet , User can transfer Ethers to any address , User can check current balance of the wallet",
          para2:
            "",
        },
        sourceCode: "https://github.com/Sameer-472/Web-3.0-blockchain-project",
        demoLink: "https://etherblockchain.netlify.app/"
      },
    },
  }
];
