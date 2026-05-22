import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/50 px-6 lg:px-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr_1fr] gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">🇳🇬</span>
            <span className="font-display text-xl font-bold">Daily Naija <span className="text-gold">Trivia</span></span>
          </div>
          <p className="mt-5 text-foreground/60 max-w-sm leading-relaxed">
            Celebrating Nigerian knowledge, one question at a time.
          </p>
          <div className="mt-6 flex gap-3">
            {[XIcon, InstagramIcon, MusicNoteIcon, WhatsAppIcon].map((Icon, i) => (
              <a key={i} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors cursor-pointer">
                <Icon style={{ fontSize: 18 }} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono-tk text-xs uppercase tracking-[0.25em] text-gold mb-5">Company</h4>
          <ul className="space-y-3 text-foreground/70">
            <li><a className="hover:text-gold transition-colors cursor-pointer">About</a></li>
            <li><a className="hover:text-gold transition-colors cursor-pointer">Careers</a></li>
            <li><a className="hover:text-gold transition-colors cursor-pointer">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono-tk text-xs uppercase tracking-[0.25em] text-gold mb-5">Legal</h4>
          <ul className="space-y-3 text-foreground/70">
            <li><a className="hover:text-gold transition-colors cursor-pointer">Privacy</a></li>
            <li><a className="hover:text-gold transition-colors cursor-pointer">Terms</a></li>
            <li><a className="hover:text-gold transition-colors cursor-pointer">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tk uppercase tracking-wider text-foreground/45">
        <span>© 2025 Daily Naija Trivia</span>
        <span>Built with 🇳🇬 pride.</span>
      </div>
    </footer>
  );
}
