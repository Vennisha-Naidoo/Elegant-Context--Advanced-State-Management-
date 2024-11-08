export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">
        {/* The React children prop is used to display the elements between the Shop wrapper, in the App component */}
        { children }
      </ul>
    </section>
  );
}
