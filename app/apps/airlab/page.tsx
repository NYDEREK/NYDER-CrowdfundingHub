import type { Metadata } from "next";
import { DownloadLanding } from "../../components/DownloadLanding";

export const metadata: Metadata = {
  title: "Download AirLab — NYDER",
  description: "Download AirLab for macOS or Windows.",
};

export default function AirLabPage() {
  return (
    <DownloadLanding
      appName="AirLab"
      category="Custom airless ball generator"
      image="/assets/airlab/airlab-wide.png"
      imageAlt="Colorful custom airless balls designed in AirLab"
      macHref="/downloads/airlab/AirLab_0.1.0_aarch64.dmg"
      windowsHref="/downloads/airlab/AirLab_0.1.0_x64-setup.exe"
      theme="airlab"
    />
  );
}
