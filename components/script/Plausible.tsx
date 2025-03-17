import { getDomain, isDevelopment } from "@/lib/utils";
import Script from "next/script";

const Plausible: React.FC = () => {

    if (isDevelopment()) return null;

    return (
        <Script
            id="plausible-analytics"
            strategy="afterInteractive"
            data-domain={getDomain()}
            src="https://app.pageview.events/js/script.js"
        />
    )
};

export default Plausible;