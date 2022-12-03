import shoots from "$lib/stores/shoots";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) =>
{
  const id = parseInt(params.shootId)
  const shoot = get(shoots)[id]

  return{
    shoot,
    id

  }
}