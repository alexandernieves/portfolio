export const isVideo = (fileUrl: string): boolean => {
  return /\.(mp4|webm|ogg|mov|avi|flv|wmv|mkv)$/i.test(fileUrl);
};
