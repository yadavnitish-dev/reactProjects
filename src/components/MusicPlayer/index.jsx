import { Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaBackward, FaForward } from "react-icons/fa";
import { RxPlay } from "react-icons/rx";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicTrack, setCurrentMusicTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const tracks = [
    {
      title: "Saiyaara",
      source:
        "https://aac.saavncdn.com/598/7323a0d8686f6c1b9c21f098c23a9557_160.mp4",
      image:
        "https://c.saavncdn.com/598/Saiyaara-Hindi-2025-20250703061754-350x350.jpg",
    },
    {
      title: "Tum Hi Ho",
      source:
        "https://aac.saavncdn.com/430/5c5ea5cc00e3bff45616013226f376fe_160.mp4",
      image: "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg",
    },
  ];

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio && audio.duration) {
        setTrackProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio?.addEventListener("timeupdate", updateProgress);

    return () => {
      audio?.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load();
      setTrackProgress(0);

      if (isPlaying) {
        audio.play();
      }
    }
  }, [currentMusicTrack]);

  const handlePauseAndPlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkipTrack = (getDirection) => {
    if (getDirection === "forward") {
      setCurrentMusicTrack((prevTrack) => (prevTrack + 1) % tracks.length);
    } else if (getDirection === "backward") {
      setCurrentMusicTrack(
        (prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
      );
    }
    setTrackProgress(0);
    setIsPlaying(true);
  };

  const handleSeek = (e) => {
    const newProgress = Number(e.target.value);
    const audio = audioRef.current;
    if (audio?.duration) {
      audio.currentTime = (newProgress / 100) * audio.duration;
      setTrackProgress(newProgress);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => {
      handleSkipTrack("forward");
    };

    audio?.addEventListener("ended", handleEnded);

    return () => {
      audio?.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center text-white bg-black h-screen">
      <h1 className="text-8xl mb-15">Music Player</h1>
      <div className="mb-5 w-[350px]">
        <img
          src={tracks[currentMusicTrack].image}
          alt={tracks[currentMusicTrack].title}
        />
      </div>
      <h2 className="text-3xl">{tracks[currentMusicTrack].title}</h2>
      <audio src={tracks[currentMusicTrack].source} ref={audioRef}></audio>
      <div className="w-[80%] max-w-md px-4">
        <input
          type="range"
          min="0"
          max="100"
          value={trackProgress}
          onChange={(e) => handleSeek(e)}
          className="w-full mt-5 accent-blue-500"
        />
      </div>
      <div className="flex gap-3 mt-10">
        <button
          className="px-3 py-3 rounded-full bg-indigo-500"
          onClick={() => handleSkipTrack("backward")}
        >
          <FaBackward />
        </button>
        <button
          className="px-3 py-3 rounded-full bg-indigo-500"
          onClick={handlePauseAndPlay}
        >
          {isPlaying ? <Pause /> : <RxPlay />}
        </button>
        <button
          className="px-3 py-3 rounded-full bg-indigo-500"
          onClick={() => handleSkipTrack("forward")}
        >
          <FaForward />
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;
