import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CvWgNyhx.mjs';
import { $ as $$BaseLayout, a as $$NavBar, b as $$Image } from '../chunks/NavBar_F6PT-vhf.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const ibrWorship = new Proxy({"src":"/ibr-web/_astro/ibr-worship.Qj9x2VlH.jpg","width":1145,"height":539,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/enoc/workspace/ibr/ibr-web/src/assets/ibr-worship.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/enoc/workspace/ibr/ibr-web/src/assets/ibr-worship.jpg");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "IBR Nosotros", "description": "Esta es al descripci\xF3n de la p\xE1gina Nosotros", "data-astro-cid-52eljrxp": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "NavBar", $$NavBar, { "data-astro-cid-52eljrxp": true })}${maybeRenderHead()}<div class="slider-container" data-astro-cid-52eljrxp><div class="container-img-slider" data-astro-cid-52eljrxp>${renderComponent($$result2, "Image", $$Image, { "src": ibrWorship, "alt": "Imagen de la Biblia", "class": "nosotros-slider", "width": 1e3, "height": 400, "data-astro-cid-52eljrxp": true })}</div></div><div class="section-content" data-astro-cid-52eljrxp><div class="title" data-astro-cid-52eljrxp><h1 data-astro-cid-52eljrxp>Nosotros</h1></div><div class="content-wrapper" data-astro-cid-52eljrxp><p data-astro-cid-52eljrxp>En nuestra iglesia local, desde sus inicios, hemos estado convencidos (a pesar de los errores que puedan haber surgido en el camino) de que lo más crucial para nuestro crecimiento en la fe y el conocimiento de Dios es la predicación fiel y central de Su Palabra. Estamos convencidos de que ella es todo suficiente para la salvación y santificación de todo aquel que cree, para la gloria de Dios y nuestro deleite.</p><p data-astro-cid-52eljrxp>Nuestra iglesia no busca vivir aislada de la historia de la fe, sino que se edifica sobre los cimientos sólidos que otros cristianos fieles a la Palabra de Dios han dejado a lo largo de los siglos. Es por esta razón que nos adherimos a la Segunda Confesión Bautista de Londres de 1689, reconociendo la importancia de los principios doctrinales que allí se expresan.</p><p data-astro-cid-52eljrxp>De igual manera, no pretendemos aislarnos de los tiempos en los que por la voluntad de Dios vivimos, ni de la cultura que por la misma voluntad pertenecemos. Por ello pretendemos y pedimos sabiduría para que como iglesia podamos dar respuestas fieles a la Palabra de Dios y a la historia de la iglesia en nuestro propio contexto.</p></div></div>` })}`;
}, "/home/enoc/workspace/ibr/ibr-web/src/pages/nosotros/index.astro", void 0);

const $$file = "/home/enoc/workspace/ibr/ibr-web/src/pages/nosotros/index.astro";
const $$url = "/ibr-web/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
