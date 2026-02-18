import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  Play,
  X,
  Clock,
  MessageCircle,
  Pause,
  Maximize2,
  Minimize2,
  Loader2,
  Download,
  Share2,
  Camera,
  Navigation,
  Film,
  Wind,
  Target,
  Eye,
  Zap,
  Star,
} from "lucide-react";
import { droneVideos } from "../data/droneVideos";
import droneImg from "../assets/images/drone-img.jfif"
type SortOption = "date" | "duration" | "name" | "location";
type ViewMode = "grid" | "list";

interface DroneVideo {
  id: number;
  title: string;
  duration: string;
  date: string;
  altitude: string;
  color: string;
  videoUrl: string;
  thumbnail: string;
  featured?: boolean;
}

export default function DroneGallery() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState<DroneVideo | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  const isRTL = i18n.language === "ar";
  const MotionLink = motion(Link);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedVideo) return;
      if (e.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
      if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    if (selectedVideo) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo]);

  const handlePlayVideo = (video: DroneVideo) => {
    setSelectedVideo(video);
    setIsLoading(true);
    setIsPlaying(false);
    setCurrentTime(0);
    setShowControls(true);
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      }
    });
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const toggleFullscreen = async () => {
    if (!modalRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await modalRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getTotalSeconds = (duration?: string) => {
    const parts = (duration || "0:00").split(":").map(Number);
    return parts[0] * 60 + parts[1];
  };

  const handleDownload = (video: DroneVideo, e: React.MouseEvent) => {
    e.stopPropagation();
    if (video.videoUrl) {
      const link = document.createElement("a");
      link.href = video.videoUrl;
      link.download = `${video.title.replace(/\s+/g, "_")}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(isRTL ? `جاري تحميل ${video.title}` : `Downloading ${video.title}`);
    }
  };

  const handleShare = (video: DroneVideo, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator
        .share({
          title: video.title,
          text: t("droneGallery.contactCta"),
          url: window.location.href,
        })
        .catch((err) => console.log("Share error:", err));
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert(isRTL ? "تم نسخ الرابط" : "Link copied"))
        .catch((err) => console.log("Copy error:", err));
    } else {
      alert(isRTL ? "تم نسخ الرابط" : "Link copied");
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Sticky header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800/50"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-all"
              >
                <ChevronLeft className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
                <span className="text-sm font-medium">{t("nav.projects")}</span>
              </motion.button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <h1 className="font-bold text-lg">{t("nav.drone")}</h1>
                  <p className="text-gray-400 text-xs">
                    {droneVideos.length} {isRTL ? "مقطع جوي" : "aerial clips"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mavic 3 Pro features section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-7xl mx-auto px-4 pt-8"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/50 via-black to-blue-950/20 border border-blue-500/10 p-6 md:p-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Drone image */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-blue-500/30 bg-black/50 flex items-center justify-center">
                  <img
                    src={droneImg}
                    alt="DJI Mavic 3 Pro"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = document.createElement("div");
                        fallback.className = "flex items-center justify-center w-full h-full";
                        fallback.innerHTML = `<svg class="w-24 h-24 text-blue-400" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12l4-2v6"/><circle cx="12" cy="12" r="2"/></svg>`;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{t("droneGallery.droneFeatures.title")}</span>
                </div>
              </div>
            </div>

            {/* Features text */}
            <div className="lg:w-2/3 space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  DJI Mavic 3 Pro
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Video quality */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-5 h-5 text-blue-400" />
                    <h3 className="font-semibold text-lg">{t("droneGallery.droneFeatures.video.title")}</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span>{t("droneGallery.droneFeatures.video.item1")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span>{t("droneGallery.droneFeatures.video.item2")}</span>
                    </li>
                  </ul>
                </div>

                {/* Intelligent features */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-blue-400" />
                    <h3 className="font-semibold text-lg">{t("droneGallery.droneFeatures.intelligent.title")}</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-cyan-400" />
                      <span>{t("droneGallery.droneFeatures.intelligent.item1")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Film className="w-4 h-4 text-cyan-400" />
                      <span>{t("droneGallery.droneFeatures.intelligent.item2")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>{t("droneGallery.droneFeatures.intelligent.item3")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 text-cyan-400 flex items-center justify-center text-xs">10</span>
                      <span>{t("droneGallery.droneFeatures.intelligent.item4")}</span>
                    </li>
                  </ul>
                </div>

                {/* Flight system */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 transition-colors md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-5 h-5 text-blue-400" />
                    <h3 className="font-semibold text-lg">{t("droneGallery.droneFeatures.flight.title")}</h3>
                  </div>
                  <p className="text-sm text-gray-300">
                    {t("droneGallery.droneFeatures.flight.description")}
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <p className="text-gray-400 text-sm italic border-t border-blue-500/20 pt-3 mt-2">
                {t("droneGallery.droneFeatures.conclusion")}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Videos grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {droneVideos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => handlePlayVideo(video)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/40 bg-gradient-to-br from-zinc-900/30 to-black/30 transition-all duration-300 group-hover:border-blue-500/50 group-hover:from-zinc-900/50 group-hover:to-black/50">
                <div className="relative aspect-video overflow-hidden">
                  {video.thumbnail ? (
                    <div className="relative w-full h-full">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallbackDiv = e.currentTarget.parentElement?.querySelector(".thumbnail-fallback");
                          if (fallbackDiv) {
                            (fallbackDiv as HTMLDivElement).style.display = "flex";
                          }
                        }}
                      />
                      <div
                        className={`thumbnail-fallback absolute inset-0 bg-gradient-to-r ${video.color} flex items-center justify-center`}
                        style={{ display: "none" }}
                      >
                        <Navigation className="w-16 h-16 text-white/80" />
                      </div>
                    </div>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-r ${video.color} flex items-center justify-center relative`}>
                      <Navigation className="w-16 h-16 text-white/80" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative transform transition-transform group-hover:scale-110">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                      <div className="relative w-20 h-20 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center border-2 border-white/20 group-hover:border-blue-400/50 transition-all">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {video.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm mb-1">{t("droneGallery.videoInfo.date")}</div>
                      <div className="text-white font-medium">{video.date}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-800/30">
                      <Target className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-xs text-gray-400">{t("droneGallery.videoInfo.altitude")}</div>
                        <div className="text-white font-medium">{video.altitude}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/30">
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors"
                        onClick={(e) => handleDownload(video, e)}
                        title={t("droneGallery.controls.download")}
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors"
                        onClick={(e) => handleShare(video, e)}
                        title={t("droneGallery.controls.share")}
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all text-sm">
                      {t("droneGallery.controls.play")}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats / technology showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/10 to-cyan-900/10 border border-blue-500/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                <Navigation className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {isRTL ? "تقنية تصوير الدرون المتقدمة" : "Advanced Drone Photography Technology"}
              </h3>
              <p className="text-gray-300">
                {isRTL
                  ? "جميع المقاطع الجوية مسجلة بتقنية 4K عالية الجودة مع استقرار متطور للحصول على لقطات سلسة واحترافية."
                  : "All aerial footage recorded in high-quality 4K with advanced stabilization for smooth, professional shots."}
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-black/30 border border-gray-800/30">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-blue-400" />
                </div>
                <div className="font-bold text-white mb-1">4K Ultra HD</div>
                <div className="text-gray-400 text-sm">{isRTL ? "دقة تصوير عالية" : "High recording resolution"}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-black/30 border border-gray-800/30">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="font-bold text-white mb-1">200m+</div>
                <div className="text-gray-400 text-sm">{isRTL ? "ارتفاع تصوير" : "Shooting altitude"}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-black/30 border border-gray-800/30">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Wind className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="font-bold text-white mb-1">30min+</div>
                <div className="text-gray-400 text-sm">{isRTL ? "زمن طيران" : "Flight time"}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Video modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[100] flex items-center justify-center ${
              isFullscreen ? "p-0" : "p-4"
            } bg-black/95 backdrop-blur-xl`}
            onClick={() => {
              if (isPlaying) {
                videoRef.current?.pause();
              }
              setSelectedVideo(null);
            }}
            onMouseMove={handleMouseMove}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative ${isFullscreen ? "w-screen h-screen" : "w-full max-w-[90vw] xl:max-w-[75vw] h-[85vh]"} bg-gradient-to-br from-gray-900 to-black ${
                isFullscreen ? "rounded-none" : "rounded-2xl"
              } overflow-hidden border border-gray-800/50 shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {isLoading && (
                <div className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-blue-500/30 border-t-blue-500"
                    >
                      <Loader2 className="w-full h-full text-blue-500 p-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">{t("droneGallery.loading")}</h3>
                    <p className="text-gray-400">{isRTL ? "يرجى الانتظار..." : "Please wait..."}</p>
                  </div>
                </div>
              )}

              <div className="relative w-full h-full bg-black">
                {isFullscreen && (
                  <div className="absolute top-4 right-4 z-30 flex items-center gap-4">
                    <h2 className="text-xl font-bold text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                      {selectedVideo.title}
                    </h2>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        if (isPlaying) {
                          videoRef.current?.pause();
                        }
                        setSelectedVideo(null);
                      }}
                      className="p-2 rounded-xl bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors flex-shrink-0"
                      title={t("droneGallery.controls.close")}
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  </div>
                )}

                <video
                  ref={videoRef}
                  src={selectedVideo.videoUrl}
                  muted
                  playsInline
                  preload="metadata"
                  className={`w-full h-full ${isFullscreen ? "object-cover" : "object-contain"}`}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={() => {
                    setIsLoading(false);
                    setCurrentTime(0);
                  }}
                  onEnded={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {(!isPlaying || showControls) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={togglePlay}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-50" />
                      <div className="relative w-20 h-20 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center border-2 border-white/20">
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </div>
                    </motion.button>
                  </div>
                )}

                {(showControls || !isPlaying) && (
                  <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 z-30"
                  >
                    <div className="mb-4">
                      <input
                        type="range"
                        min="0"
                        max={getTotalSeconds(selectedVideo.duration)}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-2 bg-gray-700/50 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-600 [&::-webkit-slider-thumb]:to-cyan-600"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>{formatTime(currentTime)}</span>
                        <span>{selectedVideo.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {!isFullscreen && (
                          <div className="flex items-center gap-3">
                            <h3 className="text-sm font-medium text-white">{selectedVideo.title}</h3>
                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{selectedVideo.duration}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={togglePlay}
                          className="p-3 rounded-xl bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors flex items-center gap-2"
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                          <span className="text-sm">
                            {isPlaying ? t("droneGallery.controls.pause") : t("droneGallery.controls.play")}
                          </span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={toggleFullscreen}
                          className="p-3 rounded-xl bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors flex items-center gap-2"
                        >
                          {isFullscreen ? (
                            <Minimize2 className="w-5 h-5" />
                          ) : (
                            <Maximize2 className="w-5 h-5" />
                          )}
                          <span className="text-sm">
                            {isFullscreen ? t("droneGallery.controls.exitFullscreen") : t("droneGallery.controls.fullscreen")}
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {!isFullscreen && (
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      if (isPlaying) {
                        videoRef.current?.pause();
                      }
                      setSelectedVideo(null);
                    }}
                    className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-800/50 transition-colors flex-shrink-0 z-10"
                    title={t("droneGallery.controls.close")}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                )}

                {isFullscreen && !showControls && (
                  <div className="absolute top-4 left-4 text-gray-400 text-sm bg-black/50 px-3 py-2 rounded-lg">
                    {isRTL ? "اضغط Esc للخروج من وضع الشاشة الكاملة" : "Press Esc to exit fullscreen"}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="mt-16 pt-12 pb-8 border-t border-gray-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Camera className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {isRTL ? "مشروع يحتاج تصوير جوي؟" : "Need aerial photography for your project?"}
                  </h3>
                  <p className="text-gray-400 text-lg max-w-2xl">
                    {isRTL
                      ? "دعنا نعمل معاً لإنشاء محتوى درون احترافي يعرض مشروعك من منظور فريد وجذاب."
                      : "Let's work together to create professional drone content that showcases your project from a unique and engaging perspective."}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all font-bold flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                {t("droneGallery.contactCta")}
              </MotionLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}