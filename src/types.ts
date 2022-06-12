export interface Image {
  src: string;
  alt: string;
}

export interface DownloadableItem {
  title: string;
  description: string;
  downloadLink: string;
  images: Image[];
}
