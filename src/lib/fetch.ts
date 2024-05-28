// Default JSON fetch wrapper
export const fetcher = (input: URL | RequestInfo, init?: RequestInit | undefined) =>
    fetch(input, init).then(res => res.json());
