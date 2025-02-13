import { FaList } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { BiSolidJoystick } from "react-icons/bi";

// NFT carousel images
import nftOneWebp from "../assets/images/homepage/collection/nft-one.webp";
import nftOnePng from "../assets/images/homepage/collection/nft-one.png";
import nftTwoWebp from "../assets/images/homepage/collection/nft-two.webp";
import nftTwoPng from "../assets/images/homepage/collection/nft-two.png";
import nftThreeWebp from "../assets/images/homepage/collection/nft-three.webp";
import nftThreePng from "../assets/images/homepage/collection/nft-three.png";

// Roadmap images
import dummyImgWebp from "../assets/images/homepage/roadmap/dummy-img.webp";
import dummyImgPng from "../assets/images/homepage/roadmap/dummy-img.png";

// NFT carousel data
export const collections = [
  {
    id: "nft-001",
    name: "Robotic rabbit",
    webpImage: nftOneWebp,
    pngImage: nftOnePng,
  },
  {
    id: "nft-002",
    name: "Robotic rabbit",
    webpImage: nftTwoWebp,
    pngImage: nftTwoPng,
  },
  {
    id: "nft-003",
    name: "Robotic rabbit",
    webpImage: nftThreeWebp,
    pngImage: nftThreePng,
  },
  {
    id: "nft-004",
    name: "Robotic rabbit",
    webpImage: nftOneWebp,
    pngImage: nftOnePng,
  },
  {
    id: "nft-005",
    name: "Robotic rabbit",
    webpImage: nftTwoWebp,
    pngImage: nftTwoPng,
  },
  {
    id: "nft-006",
    name: "Robotic rabbit",
    webpImage: nftThreeWebp,
    pngImage: nftThreePng,
  },
  {
    id: "nft-007",
    name: "Robotic rabbit",
    webpImage: nftOneWebp,
    pngImage: nftOnePng,
  },
  {
    id: "nft-008",
    name: "Robotic rabbit",
    webpImage: nftTwoWebp,
    pngImage: nftTwoPng,
  },
  {
    id: "nft-009",
    name: "Robotic rabbit",
    webpImage: nftThreeWebp,
    pngImage: nftThreePng,
  },
  {
    id: "nft-010",
    name: "Robotic rabbit",
    webpImage: nftOneWebp,
    pngImage: nftOnePng,
  },
  {
    id: "nft-011",
    name: "Robotic rabbit",
    webpImage: nftTwoWebp,
    pngImage: nftTwoPng,
  },
  {
    id: "nft-012",
    name: "Robotic rabbit",
    webpImage: nftThreeWebp,
    pngImage: nftThreePng,
  },
];

// Roadmap data
export const roadmap = [
  {
    id: "rm001",
    webpImage: dummyImgWebp,
    pngImage: dummyImgPng,
    title: "Robotic rabbit",
    desc: "Robotic rabbit description, robotic rabbit description",
  },
  {
    id: "rm002",
    webpImage: dummyImgWebp,
    pngImage: dummyImgPng,
    title: "Robotic rabbit",
    desc: "Robotic rabbit description, robotic rabbit description",
  },
  {
    id: "rm003",
    webpImage: dummyImgWebp,
    pngImage: dummyImgPng,
    title: "Robotic rabbit",
    desc: "Robotic rabbit description, robotic rabbit description",
  },
  {
    id: "rm004",
    webpImage: dummyImgWebp,
    pngImage: dummyImgPng,
    title: "Robotic rabbit",
    desc: "Robotic rabbit description, robotic rabbit description",
  },
];

// Team data
export const team = [
  {
    id: "member001",
    name: "Lucian - The Palette Magician",
    role: "Lead Artist/Illustrator",
    desc: "Where words fail, Lucian’s art speaks. Each artwork is a universe in itself, echoing the emotions, tales, and dreams of the Robotic Rabbit Syndicate.",
  },
  {
    id: "member002",
    name: "Luck - The Digital Dynamo",
    role: "Web3 & Website Engineer Guru",
    desc: "In the world of 1s and 0s, Luck crafts masterpieces. Merging the realms of web3 and classic web design, he ensures our digital presence is not just functional but also transcendent.",
  },
  {
    id: "member003",
    name: "Mehdi - The Visionary Heartbeat",
    role: "Founder, CEO, Creative Director, Sole Investor, & Head Designer",
    desc: "As the foundation stone of our Syndicate, Mehdi infuses life into our mission. Every pixel dances with his vision, every design narrates his story. Dive into the world he envisions, and witness the magic first-hand",
  },
  {
    id: "member004",
    name: "Can - The Anime Alchemist",
    role: "Anime Animator",
    desc: "To Can, anime is more than a medium - it’s an essence. Merging reality with fantasy, his animations embody the spirit of our Syndicate with every frame.",
  },
];

// FAQ data
export const faq = [
  {
    id: "faq001",
    question: "What rewards are available for community members?",
    answer:
      "Enjoy engaging storylines, follow up collections, an exclusive villain series, and shared IP Ownership rights.",
  },
  {
    id: "faq002",
    question: "What does the brand include?",
    answer:
      "We offer an anime series, toys, and merchandise, games on unity engine and decentralized IP ownership. Future plans include games on Unreal Engine and potential cinematic ventures.",
  },
  {
    id: "faq003",
    question: "How is the art quality of the Robotic Rabbits?",
    answer:
      "Our 4K resolution art boasts unique colors, primed for captivating merchandise, toys, and animation.",
  },
  {
    id: "faq004",
    question: "How many characters are in the brand?",
    answer:
      "We feature 3,333 Robotic Rabbits and multiple 3,333 capped collections. Only Robotic Rabbit holders can access follow-up collections.",
  },
  {
    id: "faq005",
    question: "How do I keep updated on the brand's progress?",
    answer:
      "Stay connected with our community updates via Discord. We value transparency and communication.",
  },
];

// Dashboard sidebar links
export const links = [
  { path: "", Icon: FaList, label: "Inventory" },
  { path: "account", Icon: FaUser, label: "Account" },
  { path: "wallet", Icon: IoIosLink, label: "Linked Wallet" },
  { path: "roles", Icon: FaDiscord, label: "Discord Roles" },
  { path: "mint", Icon: BiSolidJoystick, label: "Play to Mint" },
];
