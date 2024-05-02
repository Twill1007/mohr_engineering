export function Video() {
  return (
    <video
      width="1000px"
      height="600px"
      controls
      preload="none"
    >
      <source
        src="/MohrEng_All5_HD.mp4"
        type="video/mp4"
      />
      <track />
    </video>
  );
}
