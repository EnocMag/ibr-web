import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CvWgNyhx.mjs';
import { $ as $$BaseLayout, a as $$NavBar, b as $$Image } from '../chunks/NavBar_F6PT-vhf.mjs';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const bible = new Proxy({"src":"/ibr-web/_astro/bible.l6zZcDwf.webp","width":4592,"height":3448,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/enoc/workspace/ibr/ibr-web/src/assets/bible.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/enoc/workspace/ibr/ibr-web/src/assets/bible.webp");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Iglesia Bautista Reformada", "description": "Esta es al descripci\xF3n de mi p\xE1gina principal", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "NavBar", $$NavBar, { "data-astro-cid-j7pv25f6": true })}${maybeRenderHead()}<div class="slider-container" data-astro-cid-j7pv25f6><div class="container-img-bible" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Image", $$Image, { "src": bible, "alt": "Imagen de la Biblia", "class": "bible", "width": 1e3, "height": 400, "data-astro-cid-j7pv25f6": true })}<!-- Filter --><div class="filter" data-astro-cid-j7pv25f6></div><!-- Título del slider --><div class="title-slider" data-astro-cid-j7pv25f6><p data-astro-cid-j7pv25f6>Bienvenido a la</p><h1 data-astro-cid-j7pv25f6>Iglesia Bautista Reformada</h1><a href="/nosotros" class="button" data-astro-cid-j7pv25f6>Explorar más</a></div></div></div><section class="section-content" data-astro-cid-j7pv25f6><div class="content-wrapper" data-astro-cid-j7pv25f6><h2 data-astro-cid-j7pv25f6>Comprometidos con la verdad biblica</h2><p data-astro-cid-j7pv25f6>La Iglesia Bautista Reformada es una iglesia cristiana que se basa en la enseñanza de la Biblia y la doctrina reformada. Su objetivo es glorificar a Dios y hacer discípulos de Jesucristo a través de la predicación del evangelio, la enseñanza de la Palabra de Dios y el servicio a la comunidad.</p><p data-astro-cid-j7pv25f6>La iglesia se caracteriza por su compromiso con la verdad bíblica, la adoración centrada en Dios y la vida comunitaria. Los miembros de la iglesia son alentados a crecer en su fe y a vivir de acuerdo con los principios bíblicos en todas las áreas de sus vidas.</p></div></section><div id="ubicacion" class="map-ibr" data-astro-cid-j7pv25f6><h2 data-astro-cid-j7pv25f6>Encuentranos en</h2><p data-astro-cid-j7pv25f6>Calle: León Sur #82. Colonia Centro, entre Abasolo y Mina</p><iframe title="Localización Iglesia Bautista Reformada" class="map-google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1911049989912!2d-104.89712492186342!3d21.508603561691103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427370062153127%3A0x73f0515d86f04ad7!2sIglesia%20Bautista%20Reformada!5e0!3m2!1ses-419!2smx!4v1748386541358!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-j7pv25f6></iframe></div>` })}`;
}, "/home/enoc/workspace/ibr/ibr-web/src/pages/index.astro", void 0);

const $$file = "/home/enoc/workspace/ibr/ibr-web/src/pages/index.astro";
const $$url = "/ibr-web";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
