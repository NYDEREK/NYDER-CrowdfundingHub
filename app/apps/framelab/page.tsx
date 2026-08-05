import type { Metadata } from "next";
import { DownloadLanding } from "../../components/DownloadLanding";

export const metadata: Metadata = {
  title: "Download Frame Lab — NYDER",
  description: "Download Frame Lab for macOS or Windows.",
};

export default function FrameLabPage() {
  return (
    <DownloadLanding
      appName="Frame Lab"
      category="Custom sunglasses generator"
      image="/assets/framelab/frame-lab-banner.png"
      imageAlt="Frame Lab custom sunglasses generator"
      macHref="/downloads/framelab/FrameLab_0.1.0_aarch64.dmg"
      windowsHref="/downloads/framelab/FrameLab_0.1.0_x64-setup.exe"
      theme="framelab"
    />
  );
}
