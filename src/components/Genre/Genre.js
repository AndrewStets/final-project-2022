import css from './genre.module.css';

function Genre({genre}) {

    const {name} = genre;

  return (
    <div className={css.btn}>
        <button>{name}</button>
    </div>
  );
}

export {Genre};