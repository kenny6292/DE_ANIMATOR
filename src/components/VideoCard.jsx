import { ArrowUpRight } from "lucide-react";

export default function VideoCard({ video }) {
  return (
    <article className="video-card">
      <div className="video-frame">
        <iframe
          src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0`}
          title={video.title}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="eyebrow !text-[9px]">{video.category}</span>
          <a className="video-source" href={video.source} target="_blank" rel="noreferrer">
            View original source <ArrowUpRight size={13} />
          </a>
        </div>
        <h3 className="mt-3 text-lg font-bold tracking-tight">{video.title}</h3>
        <p className="muted mt-3 text-sm leading-6">{video.description}</p>
      </div>
    </article>
  );
}
