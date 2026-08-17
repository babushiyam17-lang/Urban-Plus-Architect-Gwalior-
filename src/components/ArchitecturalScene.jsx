const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4'
const POSTER_URL = 'https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_iglhwn.jpg'

export default function ArchitecturalScene() {
  return (
    <div className="scene-wrap" aria-hidden="true">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER_URL}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
      <div className="hero-video-vignette" />
      <div className="hero-video-grain" />
    </div>
  )
}
