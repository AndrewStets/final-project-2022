function MoviesListCard({movie}) {
  const {title,backdrop_path,overview} = movie;

  return (
    <div>
      <div>Title: {title}</div>
      <div>Backdrop_path: {backdrop_path}</div>
      <div>Overview: {overview}</div>
        <hr/>
    </div>
  );
}

export {MoviesListCard};