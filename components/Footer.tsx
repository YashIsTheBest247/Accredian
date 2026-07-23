import { EnquireButton } from "@/components/enquiry/EnquireButton";
import {
  IconFacebook,
  IconLinkedin,
  IconTwitter,
  IconInstagram,
  IconYoutube,
} from "@/components/icons";

const socials = [
  { label: "Facebook", Icon: IconFacebook, href: "https://www.facebook.com/accredianlearn" },
  { label: "LinkedIn", Icon: IconLinkedin, href: "https://www.linkedin.com/school/accredianedu/" },
  { label: "Twitter", Icon: IconTwitter, href: "https://x.com/accredianedu" },
  { label: "Instagram", Icon: IconInstagram, href: "https://www.instagram.com/accredian_edu" },
  { label: "YouTube", Icon: IconYoutube, href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" },
];

const companyLinks = ["About", "Blog", "Why Accredian"];

export function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="container-page py-14">
        {/* Top: logo + socials + enquire */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span className="inline-flex flex-col leading-none">
              <span className="text-3xl font-extrabold lowercase tracking-tight text-white">
                accredian
              </span>
              <span className="mt-1 text-[0.68rem] font-medium tracking-[0.14em] text-white/60">
                credentials that matter
              </span>
            </span>

            <div className="mt-6 flex gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Accredian on ${label}`}
                  className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:text-brand-400"
                >
                  <Icon className="h-7 w-7" />
                </a>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-start gap-2 lg:hidden">
              <EnquireButton size="lg">Enquire Now</EnquireButton>
              <span className="text-sm text-white/80">Speak with our Advisor</span>
            </div>
          </div>

          <div className="hidden flex-col items-end gap-2 lg:flex">
            <EnquireButton size="lg">Enquire Now</EnquireButton>
            <span className="text-sm text-white/70">Speak with our Advisor</span>
          </div>
        </div>

        <hr className="my-10 border-white/15" />

        {/* Columns */}
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-white">Accredian</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <p className="mt-4 text-white/80">
              Email us:{" "}
              <a
                href="mailto:enterprise@accredian.com"
                className="text-brand-400 hover:underline"
              >
                enterprise@accredian.com
              </a>
            </p>
            <p className="mt-3 max-w-md text-white/80">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
              Haryana
            </p>
          </div>
        </div>

        <hr className="my-10 border-white/15" />

        <p className="text-center text-sm text-white/80">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
