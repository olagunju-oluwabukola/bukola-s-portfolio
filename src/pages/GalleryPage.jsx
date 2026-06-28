import PageHeader from '../components/PageHeader'

import avatar from '/src/assets/avatar.png'
import bukolaCartoon from '../assets/bukola-cartoon.jpeg'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpg'

const images = [
  { src: avatar, alt: '' },
  { src: bukolaCartoon, alt: '' },
  { src: img1, alt: '' },
  { src: img2, alt: '' },
  { src: img3, alt: '' },
]

function GalleryPage() {
  return (
    <div>
      <PageHeader
        label="Gallery"
        title="Collected moments. No particular order. Not everything fits in a case study"
      />

      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden bg-bg-card border border-border-custom">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryPage