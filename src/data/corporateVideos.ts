// corporateVideos.ts
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
}

export const corporateVideos: VideoType[] = [
  {
    id: 1,
    title: "1",
    duration: "1:27",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255066/1_hsvtvm.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255065/1_qlop0k.png",
    date: "2025-08-21",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 2,
    title: "2",
    duration: "1:16",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255066/2_x3yoxe.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255065/2_aoez5v.png",
    date: "2025-11-08",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "3",
    duration: "5:27",
    videoUrl: "public/videos/Corporate Coverage & Events/ONE RUN 2025.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255066/3_qxb7nv.png",
    date: "2025-05-29",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 4,
    title: "4",
    duration: "0:36",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255067/4_ed8a5o.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255066/4_ltrbdg.png",
    date: "2025-09-30",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 5,
    title: "5",
    duration: "5:23",
    videoUrl: "public/videos/Corporate Coverage & Events/Video Full.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255080/5_gqvgyy.png",
    date: "2025-08-06",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    id: 6,
    title: "6",
    duration: "11:07",
    videoUrl: "public/videos/Corporate Coverage & Events/بطولة شهداء سلواد 2.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255082/6_l4rcne.png",
    date: "2025-07-31",
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    id: 7,
    title: "7",
    duration: "0:52",
    videoUrl: "https://res.cloudinary.com/driyz3pac/video/upload/v1772255083/7_sovwcm.mp4",
    thumbnail: "https://res.cloudinary.com/driyz3pac/image/upload/v1772255084/7_o7p1kq.png",
    date: "2025-09-15",
    color: "from-amber-500/20 to-yellow-500/20",
  }
];