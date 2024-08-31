import './CloseImage.css'; // Import the updated CSS file

export function CloseImage(props) {
  return (
    <section className="close_image">
      <img src={props.src} alt="" />
    </section>
  );
}
