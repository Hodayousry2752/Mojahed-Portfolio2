// realEstateVideos.ts
export interface VideoType {
  id: number;
  title: string;
  description?: string; 
  tags?: string[];
  duration?:string;
  videoUrl: string;
  thumbnail: string;
  date?: string;
  color?: string;
}
export const realEstateVideos: VideoType[] = [
  {
    id: 1,
    title: "1",
    duration: "1:06",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/q_auto,f_auto,vc_auto/v1770938374/Dron_Video_1_dyybxb",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237175/1_co2ona.png",
    date: "2023-09-19",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 2,
    title: "2",
    duration: "0:33",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1770940291/Reel_1_u7b45z.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237175/2_fsv9pz.png",
    date: "2026-02-04",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    id: 3,
    title: "3",
    duration: "0:33",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1770940463/Reel-_1_z6qrjd.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237175/3_ejqqjn.png",
    date: "2025-09-02",
    color: "from-red-500/20 to-rose-500/20"
  },
  {
    id: 4,
    title: "4",
    duration: "1:03",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1770940599/Reel_1-1_hfgynw.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237177/4_jdhiwv.png",
    date: "2025-06-30",
    color: "from-indigo-500/20 to-violet-500/20"
  },
  {
    id: 5,
    title: "5",
    duration: "0:25",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1770940530/Reel_2_v3nvwh.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237176/5_ckfevx.png",
    date: "2025-10-29",
    color: "from-teal-500/20 to-cyan-500/20"
  },
  {
    id: 6,
    title: "6",
    duration: "1:40",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772240619/6_zxwowe.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237176/6_qrhdpf.png",
    date: "2025-11-30",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    id: 7,
    title: "7",
    duration: "0:51",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1770940580/Reel_6_ckdsew.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237177/7_lidwig.png",
    date: "2025-08-21",
    color: "from-lime-500/20 to-green-500/20"
  },
  {
    id: 8,
    title: "8",
    duration: "0:17",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1770940503/Reels_1_wuczzk.mp4",
        thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237178/10_udngox.png",

    date: "2024-02-14",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 9,
    title: "9",
    duration: "0:25",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1770940531/Reels_2_houtnh.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237176/11_gvw2do.png",

    date: "2024-02-18",
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    id: 10,
    title: "10",
    duration: "0:33",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1770940616/Reels_7_l2gkhw.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237175/12_sfd7fc.png",
    date: "2024-02-19",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 11,
    title: "11",
    duration: "0:44",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772240535/8_secxw4.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237178/8_mpcvmk.png",
    date: "2024-07-20",
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: 12,
    title: "12",
    duration: "0:57",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772240293/9_jlvf96.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772237181/9_nyr58s.png",
    date: "2025-09-23",
    color: "from-orange-500/20 to-red-500/20"
  }
];