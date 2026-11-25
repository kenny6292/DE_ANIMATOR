export default function VideoCard({ video }) {
  const watchUrl = video.source || `https://vimeo.com/${video.id}`;
  const thumbnailUrl = video.thumbnail || `https://vumbnail.com/${video.id}.jpg`;

  return (
    <article className="video-card overflow-hidden">
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-video overflow-hidden bg-gradient-to-br from-violet-950 via-[#171522] to-cyan-950"
        aria-label={`Watch ${video.title} in a new tab`}
      >
        <img
          src={thumbnailUrl}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/10">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-black/55 text-2xl text-white shadow-xl backdrop-blur transition group-hover:scale-110">
            ▶
          </span>
        </span>
        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur">
          Watch video ↗
        </span>
      </a>
      <div className="p-5 sm:p-6">
        <span className="eyebrow !text-[9px]">{video.category}</span>
        <h3 className="mt-3 text-lg font-bold tracking-tight">{video.title}</h3>
        <p className="muted mt-3 text-sm leading-6">{video.description}</p>
      </div>
    </article>
  );
}
