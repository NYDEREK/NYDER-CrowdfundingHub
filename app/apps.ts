export type DownloadApp = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  macDownload: string;
  windowsDownload: string;
};

// To add another crowdfunding app, copy one object and replace its details.
export const apps: DownloadApp[] = [
  {
    id: "airlab",
    name: "AirLab",
    description: "Create custom airless balls and export models ready for 3D printing.",
    image: "/assets/airlab/airlab-wide.png",
    imageAlt: "Colorful airless balls created with AirLab",
    macDownload: "/downloads/airlab/AirLab_0.1.0_aarch64.dmg",
    windowsDownload: "/downloads/airlab/AirLab_0.1.0_x64-setup.exe",
  },
  {
    id: "framelab",
    name: "Frame Lab",
    description: "Design custom 3D-printed sunglasses and export your own frame.",
    image: "/assets/framelab/frame-lab-banner.png",
    imageAlt: "Custom sunglasses designed with Frame Lab",
    macDownload: "/downloads/framelab/FrameLab_0.1.0_aarch64.dmg",
    windowsDownload: "/downloads/framelab/FrameLab_0.1.0_x64-setup.exe",
  },
];
