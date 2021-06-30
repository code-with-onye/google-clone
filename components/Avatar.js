function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      className={`h-10 transition duration-150 transform rounded-full cursor-pointer hover:scale-110 ${className}`}
      src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUxODYzMjQzNTc5NTk4Mjk3/barron-trump_gettyimages-877137998.jpg"
      alt="profile pic"
    />
  );
}

export default Avatar;
