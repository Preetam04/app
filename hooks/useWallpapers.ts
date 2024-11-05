export interface Wallpaper {
  url: string;
  name: string;
}

interface FullWallpaper extends Wallpaper {
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.liked);
}

export function useLibraryWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.library);
}

export function useWallpapers(): FullWallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/image/lossless/response/ox0mZTKmTB-wAwHk8INbkw",
      name: "Heritage",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/7vMFNEAIRVOGYKeV0C5esg",
      name: "Wallpaper 1",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Ju2E1r40Qs6PblRp0PqBDA",
      name: "Wallpaper 2",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/9-FBZ_8iT--ZSy0qjcLRhA",
      name: "Wallpaper 3",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/8m_7kXizSTye3vGktHEn-Q",
      name: "Wallpaper 4",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/7jj5GeyPQuqyQwUfcjD-3A",
      name: "Wallpaper 5",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/CBLb3gOyRS698WDVcf5oQg",
      name: "Wallpaper 6",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/grtS8AsZRGyLm3VJ2SHS7g",
      name: "Heritage",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/0reS7n7eRfClLKHIEiWJUw",
      name: "Late night",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/O0l3cIsdSJm7CRjGqrb5-Q",
      name: "Motivation",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/6n67jVOxTRW0-xEqMpLw9A",
      name: "Night sky",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/IfLz4vd4Tfy5fnBlMN0cLA",
      name: "Sunrise",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Hma-KogESI-h9o8oyO1YKg",
      name: "Shoes",
      liked: false,
      suggested: false,
      library: true,
    },
  ];
}
