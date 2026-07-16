import { IMAGES } from '../constants/images'

export function Footer() {
  const links = ['Terms of Service', 'Privacy Policy', 'Compliance Standards', 'Mining Regulations']

  return (
    <footer className="bg-primary text-on-primary w-full mt-auto py-lg px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md border-t-2 border-secondary-fixed">
      <div className="flex flex-col items-center md:items-start gap-xs">
        <div className="flex items-center gap-base">
          <img alt="GoldTrace Logo" className="h-8 w-8 brightness-0 invert" src={IMAGES.logo} />
          <span className="text-headline-sm text-secondary-fixed font-bold">GoldTrace</span>
        </div>
        <p className="text-sm mt-2 text-center md:text-left text-on-primary/60">
          © 2026 GoldTrace. Government Authorized Traceability Provider.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-md">
        {links.map((link) => (
          <a key={link} href="#" className="text-on-primary/80 hover:text-on-primary hover:underline transition-all text-body-md">
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}
