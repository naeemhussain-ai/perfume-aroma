import logo from "@/assets/logo.png";

const columns = [
  {
    title: "Shop",
    links: ["All Fragrances", "New Arrivals", "Gift Sets", "Travel Size"],
  },
  {
    title: "Collections",
    links: ["Signature Scents", "Modern Classics", "Private Collection", "Discovery"],
  },
  {
    title: "Customer Care",
    links: ["Contact", "FAQ", "Shipping", "Returns"],
  },
  {
    title: "About",
    links: ["Our Story", "Journal", "Privacy", "Terms"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#004855] px-6 pt-20 pb-10 text-white sm:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-14 lg:grid-cols-12">

          {/* Brand column */}
          <div className="lg:col-span-5">
            <a href="#top">
              <img
                src={logo}
                alt="Casa de Aroma"
                className="h-28 w-auto object-contain"
              />
            </a>
            <p className="mt-6 text-sm leading-relaxed text-white/65">
              support@casadearoma.com
              <br />
              Houston, TX
            </p>
            <div className="mt-8 flex gap-6">
              {["Instagram", "Facebook", "Twitter", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#top"
                  className="label-xs text-white/60 transition-colors hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-4 lg:col-span-7">
            {columns.map((c) => (
              <div key={c.title}>
                <h3 className="label-xs text-white/50">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-6">
          <p className="label-xs text-white/50">
            &copy; 2026 Casa de Aroma
          </p>
          <p className="label-xs text-white/50">
            Secure &amp; Encrypted &middot; Free Shipping $50+ &middot; 30-Day Returns
          </p>
        </div>
      </div>
    </footer>
  );
}
