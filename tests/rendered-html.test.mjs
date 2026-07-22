import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("apresenta a página oficial do VILLA", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="pt-PT"/i);
  assert.match(html, /<title>VILLA Fitness Clinic \| Treino Personalizado em Vila Verde<\/title>/i);
  assert.match(html, /Treino pensado/);
  assert.match(html, /Pedir preços e informações/);
  assert.match(html, /O Espaço/);
  assert.match(html, /href="\/servicos#pilates"/);
  assert.match(html, /espaco-conforto/);
  assert.match(html, /Rua do Município, 122/);
  assert.match(html, /\+351 917 616 847/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("apresenta todas as páginas principais", async () => {
  const pages = [
    ["/servicos", /Acompanhamento/],
    ["/espaco", /Deixar o ruído/],
    ["/contactos", /O próximo passo/],
  ];

  for (const [pathname, expected] of pages) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), expected);
  }
});
