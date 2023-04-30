import { useQuery } from "react-query";

import axios from "axios";

const getProducts = async () => {
  const url = `https://hornb2b.com/horn/products-api/?items_per_page=20&company_id=264&page=1&lang_code=en`;
  const { data } = await axios.get(url);
  return data;
}

export function useGetProduct () {
  return useQuery("repoData", () =>
  fetch(
    "https://api.github.com/repos/tannerlinsley/react-query"
  ).then((res) => res.json())
);
}