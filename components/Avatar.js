function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      className={`h-10 transition duration-150 transform rounded-full cursor-pointer hover:scale-110 ${className}`}
      src="https://avatars.githubusercontent.com/u/85189857?s=64&v=4"
      alt="profile pic"
    />
  );
}

export default Avatar;
