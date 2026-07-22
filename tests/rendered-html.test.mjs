import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import net from "node:net";
import { after, before, test } from "node:test";

const projectDirectory = fileURLToPath(new URL("..", import.meta.url));
const nextCli = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);

let server;
let baseUrl;
let serverOutput = "";

async function availablePort() {
  return new Promise((resolve, reject) => {
    const socket = net.createServer();
    socket.unref();
    socket.once("error", reject);
    socket.listen(0, "127.0.0.1", () => {
      const address = socket.address();
      const port = typeof address === "object" && address ? address.port : null;
      socket.close((error) => (error ? reject(error) : resolve(port)));
    });
  });
}

async function waitForServer(url) {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`O servidor terminou antes de iniciar.\n${serverOutput}`);
    }

    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // O servidor ainda está a iniciar.
    }

    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  throw new Error(`Tempo excedido ao iniciar o website.\n${serverOutput}`);
}

before(
  async () => {
    const port = await availablePort();
    baseUrl = `http://127.0.0.1:${port}`;
    server = spawn(
      process.execPath,
      [nextCli, "start", "-H", "127.0.0.1", "-p", String(port)],
      {
        cwd: projectDirectory,
        env: { ...process.env, NODE_ENV: "production" },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );

    server.stdout.on("data", (chunk) => {
      serverOutput += chunk.toString();
    });
    server.stderr.on("data", (chunk) => {
      serverOutput += chunk.toString();
    });

    await waitForServer(baseUrl);
  },
  { timeout: 35_000 },
);

after(() => {
  server?.kill();
});

async function render(pathname = "/") {
  return fetch(`${baseUrl}${pathname}`, {
    headers: { accept: "text/html" },
  });
}

test("apresenta a página oficial do VILLA", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="pt-PT"/i);
  assert.match(
    html,
    /<title>VILLA Fitness Clinic \| Treino Personalizado em Vila Verde<\/title>/i,
  );
  assert.match(html, /Treino pensado/);
  assert.match(html, /Pedir preços e informações/);
  assert.match(html, /O Espaço/);
  assert.match(html, /href="\/servicos#pilates"/);
  assert.match(html, /espaco-conforto/);
  assert.match(html, /Rua do Município, 122/);
  assert.match(html, /\+351 917 616 847/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(
    html,
    /codex-preview|react-loading-skeleton|Your site is taking shape/i,
  );
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