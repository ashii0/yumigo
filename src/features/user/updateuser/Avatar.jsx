function Avatar({ setAvatar, isUpdating }) {
  return (
    <div className="space-y-1">
      <label className="px-2 font-bold" htmlFor="avatar">
        Avatar Image
      </label>

      <input
        type="file"
        id="avatar"
        accept="image/*"
        onChange={(e) => setAvatar(e.target.files[0])}
        disabled={isUpdating}
        className="file:px-5 file:py-3 file:border file:border-akaccent-600/35 file:text-akaccent-600 file:shadow-md file:shadow-akaccent-600 file:mx-5 "
      />
    </div>
  );
}

export default Avatar;
