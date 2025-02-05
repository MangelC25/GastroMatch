import SearchBox from "../../Header/Search";

export default function HomeSection() {
  return (
    <section id="HomeSection">
      <div id="PersonaContainer">
        <img src="./src/assets/img/PersonDelivery.png" alt="person" id="img1" />
      </div>
      <div id="HomeContainer">
        <h1>Bienvenido a <span id="foodSpan">Food Fleet</span>, tu aliado en cada antojo </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit morbi, risus ornare eleifend laoreet phasellus penatibus. Iaculis nullam nostra turpis neque mus feugiat id sollicitudin ornare vivamus, fames facilisi dictum egestas dignissim porta lacus duis habitasse. Ridiculus malesuada id augue himenaeos quis egestas sapien dapibus massa etiam magna ac, fusce ad natoque imperdiet fringilla venenatis aliquet facilisi sagittis semper.</p>
        <SearchBox/>
        <button>Encontrar Comida</button>
      </div>
    </section>
  );
}
