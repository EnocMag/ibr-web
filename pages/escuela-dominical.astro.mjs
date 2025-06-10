import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CvWgNyhx.mjs';
import { $ as $$BaseLayout, a as $$NavBar } from '../chunks/NavBar_F6PT-vhf.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "IBR Escuela Dominical", "description": "Esta es al descripci\xF3n de la p\xE1gina escuela dominical", "data-astro-cid-2rwempl3": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "NavBar", $$NavBar, { "data-astro-cid-2rwempl3": true })}${maybeRenderHead()}<div class="title-container" data-astro-cid-2rwempl3><h1 data-astro-cid-2rwempl3>Escuela Dominical</h1></div><section class="section-content" data-astro-cid-2rwempl3><div class="content-wrapper" data-astro-cid-2rwempl3><p data-astro-cid-2rwempl3>En nuestra iglesia otorgamos un alto valor a la escuela dominical, considerándola una herramienta importante para la enseñanza bíblica sistemática y la formación doctrinal de toda la congregación.</p></div></section>` })}`;
}, "/home/enoc/workspace/ibr/ibr-web/src/pages/escuela-dominical/index.astro", void 0);

const $$file = "/home/enoc/workspace/ibr/ibr-web/src/pages/escuela-dominical/index.astro";
const $$url = "/ibr-web/escuela-dominical";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
