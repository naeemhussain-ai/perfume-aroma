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
    <footer className="border-t border-border px-6 pt-20 pb-10 sm:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="max-w-sm font-display text-4xl leading-tight">
              Authentic luxury fragrance,
              <span className="italic text-sage"> delivered worldwide.</span>
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              support@casadearoma.com
              <br />
              Houston, TX
            </p>
            <div className="mt-8 flex gap-6">
              {["Instagram", "Facebook", "Twitter", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#top"
                  className="label-xs link-underline text-muted-foreground hover:text-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-4 lg:col-span-7">
            {columns.map((c) => (
              <div key={c.title}>
                <h3 className="label-xs text-muted-foreground">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="link-underline text-sm text-foreground/80 hover:text-foreground"
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

        <p
          aria-hidden="true"
          className="mt-20 font-display text-[15vw] leading-[0.8] tracking-tight text-ink/[0.07] select-none"
        >
          Casa de Aroma
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="label-xs text-muted-foreground">
            © 2026 Casa de Aroma
          </p>
          <p className="label-xs text-muted-foreground">
            Secure & Encrypted · Free Shipping $50+ · 30-Day Returns
          </p>
        </div>
      </div>
    </footer>
  );
}
