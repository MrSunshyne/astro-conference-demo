import { Directus } from "@directus/sdk";

export const getDirectusClient = async () => {
  const directus = new Directus('https://directus.frontend.mu');
  return directus;
};

const directus = await getDirectusClient();

// Speakers
async function loadSpeakersUncached() {
  const speaker = await directus.items("Person").readByQuery({
    fields: ["*.*.*"],
  });

  return speaker;
}

export const loadSpeakers = await loadSpeakersUncached();