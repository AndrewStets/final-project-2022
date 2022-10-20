import css from './Star.module.css';

const Star = ({ marked, starId }) => {
    return (
        <span data-star-id={starId} className={css.star} role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
    );
};

export {
    Star
}