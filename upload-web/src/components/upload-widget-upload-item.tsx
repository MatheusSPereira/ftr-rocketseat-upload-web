import { Download, ImageUp, Link2, RefreshCcw, X } from "lucide-react";
import { Button } from "./ui/button";
import * as Progress from "@radix-ui/react-progress";
import { motion } from "motion/react";
import type { Upload } from "../store/uploads";
import { formatBytes } from "../utils/format-bytes";

interface UploadWidgetUploadItemProps {
    upload: Upload;
}
export function UploadWidgetUploadItem({ upload }: UploadWidgetUploadItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-3 rounded-lg flex flex-col gap-3 shadow-shape-content bg-white/2 relative overflow-hidden"
        >
            <div className="flex flex-col gap-1">
                <span className="text-xs font-medium flex items-center gap-1">
                    <ImageUp strokeWidth={1.5} className="size-3 text-zinc-400" />
                    <span>{upload.name}</span>
                </span>

                <span className="text-xxs text-zinc-400 flex gap-1.5 items-center">
                    <span className="line-through">{formatBytes(upload.file.size)}</span>
                    <span className="size-1 rounded-full bg-zinc-700" />
                    <span>
                        300KB
                        <span className="text-green-400 ml-1">-94%</span>
                    </span>
                    <span className="size-1 rounded-full bg-zinc-700" />
                    <span>45%</span>
                </span>
            </div>

            <Progress.Root className="h-1 bg-zinc-700 rounded-full overflow-hidden">
                <Progress.Indicator className="bg-indigo-500 h-full" style={{ width: "45%" }} />
            </Progress.Root>

            <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                <Button size="icon-sm">
                    <Download strokeWidth={1.5} className="size-4" />
                    <span className="sr-only">Download compressed image</span>
                </Button>

                <Button size="icon-sm">
                    <Link2 strokeWidth={1.5} className="size-4" />
                    <span className="sr-only">Copy remote URL</span>
                </Button>

                <Button size="icon-sm">
                    <RefreshCcw strokeWidth={1.5} className="size-4" />
                    <span className="sr-only">Retry upload</span>
                </Button>

                <Button size="icon-sm">
                    <X strokeWidth={1.5} className="size-4" />
                    <span className="sr-only">Cancel upload</span>
                </Button>
            </div>
        </motion.div>
    )
}