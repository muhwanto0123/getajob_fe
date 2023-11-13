// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { list } from "postcss";

const listData = [
  {
    id: 1,
    photo: `https://i.pravatar.cc/150`,
    fullname: "Wilson LoSiento",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
    
  },
  {
    id: 2,
    photo: `https://i.pravatar.cc/160`,
    fullname: "Nurul Tirta",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
    
  },
  {
    id: 3,
    photo: `https://i.pravatar.cc/170`,
    fullname: "Anwar Taufik",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
    
  },
  {
    id: 4,
    photo: `https://i.pravatar.cc/180`,
    fullname: "Iskandar Bambang",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
    
  },
  {
    id: 5,
    photo: `https://i.pravatar.cc/190`,
    fullname: "Hadi Putra",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
    
  },
  {
    id: 6,
    photo: `https://i.pravatar.cc/200`,
    fullname: "Wilson LoSiento",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
    
  },
  {
    id: 7,
    photo: `https://i.pravatar.cc/210`,
    fullname: "Danial Slamet",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
    
  },
  {
    id: 8,
    photo: `https://i.pravatar.cc/220`,
    fullname: "Ayal Amnon",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
    
  },
  {
    id: 9,
    photo: `https://i.pravatar.cc/230`,
    fullname: "Nitzan Chayyim",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
  },
  {
    id: 10,
    photo: `https://i.pravatar.cc/240`,
    fullname: "Rahman Ruiha",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
  },
  {
    id: 11,
    photo: `https://i.pravatar.cc/250`,
    fullname: "Wilson LoSiento",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
  },
  {
    id: 12,
    photo: `https://i.pravatar.cc/260`,
    fullname: "Petera Abdul",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
  },
  {
    id: 13,
    photo: `https://i.pravatar.cc/270`,
    fullname: "Marama Tama",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
  },
  {
    id: 14,
    photo: `https://i.pravatar.cc/280`,
    fullname: "Krisna Maata",
    job: "Web Developer",
    address: "Blitar",
    skills: ["PHP", "Java Script", "HTML"],
    desc:"Saya adalah seorang pengembang web yang berfokus pada menciptakan pengalaman pengguna yang menarik dan fungsional. Dengan keahlian utama dalam JavaScript, PHP, dan HTML, saya telah terlibat dalam berbagai proyek pengembangan web yang berhasil."
  },
];

export default function handler(req, res) {
  if (req.query.id) {
    res
      .status(200)
      .json({ status: true, message: "Get Data Sucess !!", data: listData?.find((item) => 
        item?.id === parseInt(req.query.id)
      ) });
  } else {
    res
      .status(200)
      .json({ status: true, message: "Get Data Sucess !!", data: listData });
  }
}
