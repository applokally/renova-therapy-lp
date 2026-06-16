"use client";

import { ReactNode, useEffect, useState } from "react";

const CHECKOUT_START_URL =
  "https://api.americanmagichair.com.br/checkout-start.php";

function buildCheckoutUrl(page: string, ref: string): string {
  const url = new URL(CHECKOUT_START_URL);

  url.searchParams.set("page", page);

  if (ref) {
    url.searchParams.set("ref", ref);
  }

  return url.toString();
}

type AffiliateCheckoutLinkProps = {
  page: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export function AffiliateCheckoutLink({
  page,
  className,
  children,
  ariaLabel,
}: AffiliateCheckoutLinkProps) {
  const [href, setHref] = useState(() => buildCheckoutUrl(page, ""));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlRef = params.get("ref")?.trim() || "";
    const storedRef = window.localStorage.getItem("amh_ref")?.trim() || "";
    const ref = urlRef || storedRef;

    if (urlRef) {
      window.localStorage.setItem("amh_ref", urlRef);
    }

    setHref(buildCheckoutUrl(page, ref));
  }, [page]);

  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}