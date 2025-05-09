
export default defineEventHandler(async () => {
  const storage = useStorage();

  const count = await storage.getItem('visit');

  return count || 0;
});
