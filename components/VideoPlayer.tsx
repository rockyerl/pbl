"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/** Autoplay tanpa suara, berulang. Tombol kecil untuk jeda (aksesibilitas). */
export function VideoPlayer({ src, poster, title }: { src: string; poster: string; title: string }) {
    const ref = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(true);

    function toggle() {
        const v = ref.current;
        if (!v) return;
        if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
    }

    return (
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink shadow-2xl ring-1 ring-ink/10">
            <video
                ref={ref}
                className="h-full w-full object-cover"
                src={src}
                poster={poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label={title}
            />
            <button
                type="button"
                onClick={toggle}
                aria-label={playing ? "Pause video" : "Play video"}
                className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur transition hover:bg-container"
            >
                {playing ? <Pause size={20} fill="currentColor" aria-hidden /> : <Play size={20} fill="currentColor" aria-hidden className="ml-0.5" />}
            </button>
        </div>
    );
}