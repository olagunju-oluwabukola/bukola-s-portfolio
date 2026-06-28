import PageHeader from '../components/PageHeader'

const images = [
  { src: '/assets/avatar.png', alt: '' },
  { src: '/assets/bukola-cartoon.jpeg', alt: '' },
  { src: '/assets/img1.png', alt: '' },
  { src: '/assets/img2.jpeg', alt: '' },
  { src: '/assets/img3.jpg', alt: '' },
  // { src: '/assets/gallery/img6.jpg', alt: '' },
  // { src: '/assets/gallery/img7.jpg', alt: '' },
  // { src: '/assets/gallery/img8.jpg', alt: '' },
  // { src: '/assets/gallery/img9.jpg', alt: '' },
]

function GalleryPage() {
  return (
    <div>
      <PageHeader
        label="Gallery"
        title="Collected moments. No particular order.Not everything fits in a case study"
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