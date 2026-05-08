import NewsletterForm from "@/components/ui/NewsletterForm";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Community", href: "#community" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const socials = [
  { icon: <XIcon sx={{ fontSize: 18 }} />, href: "#", label: "X (Twitter)" },
  { icon: <InstagramIcon sx={{ fontSize: 18 }} />, href: "#", label: "Instagram" },
  { icon: <YouTubeIcon sx={{ fontSize: 18 }} />, href: "#", label: "YouTube" },
  { icon: <MusicNoteIcon sx={{ fontSize: 18 }} />, href: "#", label: "TikTok" },
];

export default function FooterSection() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-naija-green to-naija-green-light flex items-center justify-center shadow-lg shadow-naija-green/20">
                <span className="text-white font-heading font-bold text-sm">NT</span>
              </div>
              <span className="font-heading font-bold text-lg text-text-primary">
                Naija <span className="text-gradient">Trivia</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-sm">
              The #1 platform for learning Nigerian culture through fun, competitive trivia.
              Play daily, build streaks, and climb the leaderboards.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-text-primary mb-3">Stay Updated</p>
              <NewsletterForm className="max-w-sm" />
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-text-primary mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Daily Naija Trivia. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/10 hover:border-white/15 transition-all duration-200 cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
