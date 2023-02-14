// import * as THREE from 'three';
// import metaversefile from 'metaversefile';
// const {useApp, useNpcManager, useCleanup} = metaversefile;

export default ctx => {
  const {
    useApp,
    useNpcManager,
    useCleanup,
  } = ctx;
  const app = useApp();
  const npcManager = useNpcManager();

  const srcUrl = ${this.srcUrl};

  app.npc = null;
  ctx.waitUntil((async () => {
    const npc = await npcManager.addNpcApp(app, srcUrl);
    app.npc = npc;
  })());

  useCleanup(() => {
    npcManager.removeNpcApp(app);
  });

  return app;
};
export const contentId = ${this.contentId};
export const name = ${this.name};
export const description = ${this.description};
export const type = 'npc';
export const components = ${this.components};