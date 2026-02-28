// medicalVideos.ts
export type VideoType = {
  id: number;
  title: string;
  duration?: string;
  videoUrl: string;
  thumbnail: string;
  date?: string;
  color?: string;
  tags?: string[];
  description?: string;
  featured?: boolean;
};

export const medicalVideos: VideoType[] = [
  {
    id: 1,
    title: "1",
    duration: "00:21",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253805/1_uqbqfj.mp4",
     thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253804/1_sa4f9l.png",
     date: "2025-03-27",
    color: "from-blue-500/20 to-cyan-500/20"
  },
    {
    id: 2,
    title: "2",
    duration: "00:20",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253928/2_la1w4d.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253928/2_k7pr1d.png",
    date: "2025-04-12",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    title: "3",
    duration: "00:34",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253929/3_m4sj9m.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253928/3_zhznqc.png",
    date: "2025-04-12",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    title: "4",
    duration: "00:32",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253929/4_vtlddr.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253929/4_vxqsg4.png",
    date: "2025-04-13",
    color: "from-teal-500/20 to-green-500/20"
  },
  {
    id: 5,
    title: "5",
    duration: "00:29",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253930/5_fmn03y.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253930/5_tclw2z.png",
    date: "2025-04-13",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 6,
    title: "6",
    duration: "00:20",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253936/6_l8h8bs.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253939/6_ilkc1w.png",
    date: "2025-04-13",
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    id: 7,
    title: "7",
    duration: "01:17",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253944/7_vmhghb.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253943/7_e3hvwo.png",
    date: "2024-11-17",
    color: "from-indigo-500/20 to-violet-500/20"
  },
  {
    id: 8,
    title: "8",
    duration: "00:40",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253944/8_pbmnks.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253944/8_ok0jdg.png",
    date: "2024-12-04",
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: 9,
    title: "9",
    duration: "01:29",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253944/9_yghrah.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253944/9_xdujbk.png",
    date: "2024-12-25",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    id: 10,
    title: "10",
    duration: "00:44",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253805/10_fhdfq1.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253805/10_eeesy8.png",
    date: "2025-01-08",
    color: "from-lime-500/20 to-green-500/20"
  },
  {
    id: 11,
    title: "11",
    duration: "01:03",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253805/11_n7zt1p.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253805/11_tuow4c.png",
    date: "2025-11-24",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 12,
    title: "12",
    duration: "00:55",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253807/12_wyowz8.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253806/12_hwjnnp.png",
    date: "2025-10-02",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 13,
    title: "13",
    duration: "00:40",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253807/13_hnnpjz.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253807/13_v1ykbp.png",
    date: "2024-08-05",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 14,
    title: "14",
    duration: "00:24",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772253828/14_uzqefb.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772253849/14_ql5acf.png",
    date: "2024-08-26",
    color: "from-rose-500/20 to-pink-500/20"
  }
];