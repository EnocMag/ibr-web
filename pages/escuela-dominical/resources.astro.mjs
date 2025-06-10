import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_CvWgNyhx.mjs';
import { $ as $$BaseLayout, a as $$NavBar } from '../../chunks/NavBar_F6PT-vhf.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://enocmag.github.io/ibr-web");
const $$Resource = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resource;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="resource-container" data-astro-cid-3a6hqjxs> <img class="img-res"${addAttribute(data.image, "src")}${addAttribute(data.title, "alt")} data-astro-cid-3a6hqjxs> <section class="section-content" data-astro-cid-3a6hqjxs> <div class="content-wrapper" data-astro-cid-3a6hqjxs> <h2 data-astro-cid-3a6hqjxs>${data.title}</h2> <p data-astro-cid-3a6hqjxs> ${data.description} </p> <a class="download-btn"${addAttribute(data.href, "href")} download target="_blank" rel="noopener" data-astro-cid-3a6hqjxs>Descarga PDF gratis</a> </div> </section> </div>`;
}, "/home/enoc/workspace/ibr/ibr-web/src/components/Resource.astro", void 0);

const Ress = [
	{
		title: "Confesión Bautista de Fe de 1689",
		href: "/Download/CBFL1689.pdf",
		description: "La Confesión de Fe Bautista de 1689, también conocida como la Segunda Confesión Bautista de Londres, es una declaración doctrinal escrita por pastores bautistas reformados en Inglaterra. Su propósito era mostrar que compartían muchas creencias fundamentales con otras iglesias protestantes reformadas, especialmente los presbiterianos y congregacionalistas, pero con diferencias clave, especialmente en cuanto al bautismo.",
		image: "../src/assets/cbf1689.jpg"
	},
	{
		title: "Catesismo Bautista (Edición lectura)",
		href: "https://drive.google.com/file/d/1hqUOSYdCYt7kcIlsZLiFZ-vv7hGdylNk/view?usp=drive_link",
		description: "El Catecismo Bautista, edición 1693, es una joya de la enseñanza cristiana que ha servido por siglos como guía clara, bíblica y profunda para entender y vivir la fe cristiana. Adaptado del Catecismo Menor de Westminster, este catecismo refleja fielmente las doctrinas contenidas en la Confesión Bautista de Fe de Londres de 1689, el estándar doctrinal de las iglesias bautistas reformadas.",
		image: "../src/assets/CatesismoBautista.jpg"
	},
	{
		title: "Catesismo Menor de Westminster",
		href: "/Download/CMW.pdf",
		description: "El Catecismo Menor de Westminster es un documento doctrinal elaborado en 1647 por la Asamblea de Westminster, convocada por el Parlamento inglés. Fue diseñado para enseñar los principios básicos del cristianismo reformado de una manera clara y sistemática, especialmente dirigido a los niños y personas nuevas en la fe. Su formato es de preguntas y respuestas, lo que facilita la memorización y el aprendizaje.",
		image: "../src/assets/CatMenWE.jpg"
	},
	{
		title: "La carrera de la fe",
		href: "/Download/La Carrera de la Fe - R. C. Sproul.pdf",
		description: "En nuestra iglesia, valoramos profundamente el acto del bautismo como una expresión pública de fe y compromiso con Jesucristo. Para acompañarte en este camino, utilizamos el libro La carrera de la fe, una guía clara y accesible que explora el Credo de los Apóstoles, también conocido como el símbolo apostólico. Este credo, que resume las verdades fundamentales del evangelio, ha sido confesado por cristianos a lo largo de los siglos. A través de sus capítulos, este recurso te ayudará a comprender mejor en qué crees, por qué lo crees, y cómo vivir de acuerdo con esa fe. Ya sea que estés dando tus primeros pasos en la vida cristiana o profundizando en tu caminar con Dios, este libro será una herramienta valiosa en tu preparación para el bautismo.",
		image: "../src/assets/LaCarreraDeLaFe.jpg"
	}
];

const $$Resources = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "IBR Escuela Dominical Recursos", "description": "Esta es al descripci\xF3n de la p\xE1gina escuela dominical", "data-astro-cid-5bf2hxon": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "NavBar", $$NavBar, { "data-astro-cid-5bf2hxon": true })}${maybeRenderHead()}<div class="title-container" data-astro-cid-5bf2hxon><h1 data-astro-cid-5bf2hxon>Recursos</h1></div><section class="section-content" data-astro-cid-5bf2hxon><div class="content-wrapper" data-astro-cid-5bf2hxon><p data-astro-cid-5bf2hxon>Es de nuestro agrado facilitarle los recursos necesarios para nuestros estudios de la Palabra en la escuela dominical, y proporcionarle las herramientas para un aprendizaje bíblico sistemático y doctrinalmente profundo, por medio de credos y confesiones históricamente sostenidos.</p></div></section><div class="resources-container" data-astro-cid-5bf2hxon>${Ress.map((resource) => renderTemplate`${renderComponent($$result2, "Resource", $$Resource, { "data": resource, "data-astro-cid-5bf2hxon": true })}`)}</div>` })}`;
}, "/home/enoc/workspace/ibr/ibr-web/src/pages/escuela-dominical/resources.astro", void 0);

const $$file = "/home/enoc/workspace/ibr/ibr-web/src/pages/escuela-dominical/resources.astro";
const $$url = "/ibr-web/escuela-dominical/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Resources,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
