export interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string | null };
  types: { slot: number; type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

export async function getPokemon(query: string): Promise<Pokemon | null> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(query)}/`);

  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`PokeAPI returned ${response.status}`);

  return response.json();
}
