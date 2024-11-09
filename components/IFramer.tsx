// components/IFramer.tsx

'use client'

import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

type Props = {
    src: string;
};

const IFramer: React.FC<Props> = ({ src }) => {
    const [isLoading, setIsLoading] = useState(true);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handleFullScreen = () => {
        if (iframeRef.current) {
            if (iframeRef.current.requestFullscreen) {
                iframeRef.current.requestFullscreen();
            } else if ((iframeRef.current as any).webkitRequestFullscreen) { // Safari
                (iframeRef.current as any).webkitRequestFullscreen();
            } else if ((iframeRef.current as any).msRequestFullscreen) { // IE11
                (iframeRef.current as any).msRequestFullscreen();
            }
        }
    }

    return (
        <div className="w-full">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <LoaderCircle className="animate-spin"></LoaderCircle>
                    </div>
                )}
                <iframe
                    ref={iframeRef}
                    src={src}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    onLoad={() => setIsLoading(false)}
                ></iframe>
            </div>
            <div className="mt-4 flex justify-center">
                <Button
                    size="lg"
                    onClick={handleFullScreen}
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                    Full Screen
                </Button>
            </div>
        </div>
    );
}

export default IFramer;