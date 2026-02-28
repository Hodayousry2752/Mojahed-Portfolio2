// motionVideos.ts
export interface VideoType {
  id: number;
  title: string;
  duration?: string;
  videoUrl: string;
  thumbnail: string;
  date: string;
  color: string;
  featured?: boolean;
  tags?: string[];
  description?: string;
  size?: string;
}

export const motionVideos: VideoType[] = [
  {
    id: 1,
    title: "1",
    duration: "0:15",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255578/1_vhomnu.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255578/1_h4scn4.png",
    date: "2024-01-22",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 2,
    title: "2",
    duration: "0:10",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255579/2_jr0406.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255579/2_ppkdeo.png",
    date: "2024-07-10",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "3",
    duration: "2:03",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255589/3_ijjvwg.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255588/3_z3kvh4.png",
    date: "2024-05-02",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 4,
    title: "4",
    duration: "0:14",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255589/4_z96yxx.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255589/4_z3kwll.png",
    date: "2024-02-14",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 5,
    title: "5",
    duration: "0:10",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255590/5_txberz.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255590/5_xgcpec.png",
    date: "2024-07-15",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 6,
    title: "6",
    duration: "0:13",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255597/6_clffcm.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255598/6_z9k05i.png",
    date: "2025-06-24",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: 7,
    title: "7",
    duration: "0:15",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255599/7_pchkcc.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255601/7_pbie1u.png",
    date: "2021-09-20",
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    id: 8,
    title: "8",
    duration: "1:52",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255608/8_fssysd.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255606/8_osfegb.png" ,
    date: "2025-10-11",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 9,
    title: "9",
    duration: "0:30",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255608/9_gn6s8e.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255607/9_dkhqh2.png",
    date: "2025-01-25",
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 10,
    title: "10",
    duration: "0:33",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772256629/10_rklhtx.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772256629/10_gozdtt.png",
    date: "2025-04-09",
    color: "from-emerald-500/20 to-green-500/20",
  }
];