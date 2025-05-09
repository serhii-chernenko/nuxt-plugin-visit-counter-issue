
export default defineNitroPlugin((nitro) => {
  const storage = useStorage();

  nitro.hooks.hook('request', async () => {
    const visitCount = (await storage.getItem('visit')) as number;

    await storage.setItem('visit', (visitCount || 0) + 1);
  });
});
