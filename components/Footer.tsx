import { Logo } from "@/components/Logo";
import { EnquireButton } from "@/components/enquiry/EnquireButton";
import {
  IconFacebook,
  IconLinkedin,
  IconTwitter,
  IconInstagram,
  IconYoutube,
} from "@/components/icons";

const socials = [
  { label: "Facebook", Icon: IconFacebook },
  { label: "LinkedIn", Icon: IconLinkedin },
  { label: "Twitter", Icon: IconTwitter },
  { label: "Instagram", Icon: IconInstagram },
  { label: "YouTube", Icon: IconYoutube },
];

const companyLinks = ["About", "Blog", "Why Accredian"];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-14">
        {/* Top: logo + enquire */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo />
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-ink transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-end">
            <EnquireButton size="lg">Enquire Now</EnquireButton>
            <span className="text-sm text-ink-soft">Speak with our Advisor</span>
          </div>
        </div>

        <hr className="my-10 border-slate-200" />

        {/* Columns */}
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-base font-bold text-ink">Accredian</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-ink-soft transition-colors hover:text-brand-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-ink">Contact Us</h3>
            <p className="mt-4 text-ink-soft">
              Email us:{" "}
              <a href="mailto:enterprise@accredian.com" className="text-brand-600 hover:underline">
                enterprise@accredian.com
              </a>
            </p>
            <p className="mt-3 max-w-md text-ink-soft">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
              Haryana
            </p>
          </div>
        </div>

        <hr className="my-10 border-slate-200" />

        <p className="text-center text-sm text-ink-soft">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
