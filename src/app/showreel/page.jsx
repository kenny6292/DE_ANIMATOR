import { ArrowUpRight, Clapperboard } from "lucide-react";
import { showreels } from "@/data/showreels";
import VideoCard from "@/components/VideoCard";

export const metadata = {
  title: "Animation Reels | DE_ANIMATOR",
  description: "Explore animation, CGI, 3D, 2D, product visualization and motion-design reels."
};

export default function ShowreelPage() {
  return (
    <main className="section min-h-screen">
      <div className="container">
        <p className="eyebrow mb-5 flex items-center gap-2"><Clapperboard size={14} /> Animation showcase</p>
        <h1 className="section-heading max-w-4xl">A closer look at<br /><span className="gradient-text">the art of motion.</span></h1>
        <p className="muted mt-6 max-w-2xl leading-8">
          Explore animation across 2D, 3D, CGI, product visualization and motion design.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {showreels.map(video => <VideoCard key={video.id} video={video} />)}
        </div>
        <div className="mt-16 rounded-[28px] border border-white/10 bg-[#11111a] px-7 py-12 text-center md:px-14">
          <p className="eyebrow mb-4">Have a visual idea?</p>
          <h2 className="section-heading">Let’s create your<br /><span className="gradient-text">next standout piece.</span></h2>
          <p className="muted mx-auto mt-5 max-w-xl leading-7">For original animation, CGI, product visuals or motion design, get in touch to discuss your brief.</p>
          <a href="/contact" className="btn btn-primary mt-8">Discuss a project <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </main>
  );
}
