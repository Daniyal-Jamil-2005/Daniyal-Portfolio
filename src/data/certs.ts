import aiSeekho from "../imports/Daniyal_Jamil_AI_Seekho_2026_-_Certificate_of_Participation.png";
import sqlLinux from "../imports/CERTIFICATE_SQL_and_Linux_Google_.jpeg";
import fastHackathon from "../imports/FAST_University_Ai_Hackathon_top_10.PNG";
import googleCyber from "../imports/google_cyber_.png";
import ituCtf from "../imports/ITU_Lahore_CTF_top_10_Certificate.PNG";
import umtOpa from "../imports/UMT_OPA_Ai_hackathon.PNG";

export type Certificate = {
  title: string;
  issuer: string;
  tag: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    title: "AI Seekho 2026",
    issuer: "Certificate of Participation",
    tag: "AI",
    image: aiSeekho,
  },
  {
    title: "SQL & Linux",
    issuer: "Google",
    tag: "Data / Linux",
    image: sqlLinux,
  },
  {
    title: "Cybersecurity Professional",
    issuer: "Google",
    tag: "Security",
    image: googleCyber,
  },
  {
    title: "AI Hackathon — Top 10",
    issuer: "FAST University",
    tag: "Hackathon",
    image: fastHackathon,
  },
  {
    title: "CTF — Top 10",
    issuer: "ITU Lahore",
    tag: "Security / CTF",
    image: ituCtf,
  },
  {
    title: "OPA AI Hackathon",
    issuer: "UMT",
    tag: "Hackathon",
    image: umtOpa,
  },
];
