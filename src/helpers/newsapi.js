import { NEWSAPI_KEY } from "@env";

export const topHeadlinesQuery = "https://newsapi.org/v2/top-headlines";
export const everthingQuery = "https://newsapi.org/v2/everything";

const possibleCountryCodes = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];

export const fetchTopHeadlines = async (category = "general", countryCode) => {
  let country;
  if (possibleCountryCodes.includes(countryCode.trim().toLowerCase())) {
    country = countryCode.trim().toLowerCase();
  } else {
    country = "gb";
  }

  let articles = await fetch(
    `${topHeadlinesQuery}?country=${country}&category=${category}&pageSize=100`,
    {
      headers: {
        "X-API-KEY": "af2613011082478fbd7d3b198cea4cf1",
      },
    }
  );

  let result = await articles.json();
  articles = null;
  return result.articles;
};

export const fetchEverything = async (query) => {
  let articles = await fetch(`${everthingQuery}?q=${query}&pageSize=100`, {
    headers: {
      "X-API-KEY": "af2613011082478fbd7d3b198cea4cf1",
    },
  });

  let result = await articles.json();
  articles = null;
  return result.articles;
};
