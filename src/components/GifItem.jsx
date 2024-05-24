import { PropTypes } from "prop-types";
export const GifItem = ({ title, url, id, remove }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <button onClick={() => remove(id)}>Eliminar</button>
    </div>
  );
};
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
