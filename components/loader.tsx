import Image from "next/image";

export const Loader = () => {
    return (
        <div className="flex items-center justify-center h-full gap-y-4 flex-col">
            <div className="w-10 h-10 relative animate-spin">
                <Image
                    src="/logo.png"
                    fill
                    alt="Logo"
                />
            </div>
            <p className="text-sm text-muted-foreground">Generating...</p>
        </div>
    );
};