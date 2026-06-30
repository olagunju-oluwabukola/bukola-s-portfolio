import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import RecommendationsSection from './Recommendation'
import SelectedWorkSection from './selectedWork'
import profile from "../assets/profile.jpg"

const PhotoCard = () => (
  <div className="w-full max-w-[380px] bg-bg-card rounded-[20px] overflow-hidden relative">
    <div className="w-full aspect-[3/4] relative">
      <img
        src= {profile}
        alt="Oluwabukola Olagunju"
        className="w-full h-full object-cover"
      />
      {/* Top badge — now "Seeking PM roles" */}
      <div className="absolute top-3 right-3 bg-accent text-white rounded-full px-3.5 py-1.5 text-xs font-medium flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-slow" />
        Open to PM roles
      </div>
    </div>
    {/* Bottom bar — now "Shipping ResumeRx" */}
    <div className="absolute bottom-3 left-3 right-3 rounded-xl p-3">
         <div className="absolute bottom-3  bg-accent text-white rounded-full px-3.5 py-1.5 text-xs font-medium flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-slow" />
        Building and shipping
      </div>
    </div>


  </div>
)

function HeroSection() {
  return (
    <section>
  <section className="max-w-[1300px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-60px)] animate-fade-up">

      {/* Mobile-only image — appears above text on small screens */}
      <div className="flex justify-center relative lg:hidden">
        <PhotoCard />
      </div>

      {/* Text — always second in DOM, left column on desktop */}
      <div>
        <div className="inline-flex items-center gap-2 bg-white border border-border-custom rounded-full px-3.5 py-1.5 text-xs font-medium text-ink-mid tracking-wider uppercase mb-7">
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
          Product Manager
        </div>

        <h1 className="font-serif text-[clamp(48px,7vw,80px)] leading-none tracking-tight text-ink mb-1">
          Oluwabukola<br />Olagunju<span className="text-accent">.</span>
        </h1>

        <p className="md:text-base text-sm text-ink-mid leading-relaxed font-light  mb-8 mt-5">
          Product Manager and  Builder with a background in software engineering and a passion for turning ideas into scalable solutions. Experienced in identifying user needs, defining product requirements, and working closely with engineering teams to deliver products that drive growth and engagement. Committed to building technology that solves meaningful problems and creates lasting impact.
        </p>

        <div className="grid md:flex gap-3 mb-8">
          <div className="md:inline-flex items-center gap-2 bg-white border border-border-custom rounded-full px-4 py-2 text-[13px] font-normal text-ink-mid">
            <div className="w-5 h-5 bg-accent-soft rounded-full flex items-center justify-center text-[11px]">🔍</div>
            Discover problems worth solving
          </div>
          <div className="md:inline-flex items-center gap-2 bg-white border border-border-custom rounded-full px-4 py-2 text-[13px] font-normal text-ink-mid">
            <div className="w-5 h-5 bg-accent-soft rounded-full flex items-center justify-center text-[11px]">🚀</div>
            Ship products people keep using
          </div>
        </div>

        <div className="flex flex-wrap gap-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white rounded-2xl text-sm font-medium no-underline transition-colors duration-200 hover:bg-accent-hover"
          >
            View my work
            <ArrowRight className="w-[15px] h-[15px]" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-ink rounded-2xl text-sm font-medium no-underline border-[1.5px] border-border-custom transition-all duration-200 hover:bg-accent hover:text-white hover:border-ink-muted"
          >
            About me
          </Link>
        </div>
      </div>

      {/* Desktop-only image — right column, hidden on mobile */}
      <div className="hidden lg:flex justify-center relative">
        <PhotoCard />
      </div>


    </section>

    <div>
  <SelectedWorkSection/>
<RecommendationsSection/>
</div>
    </section>

  )
}

export default HeroSection

