const myUrl = new URL("https://example.com/products?id=101&category=phone");

console.log("Full URL:", myUrl.href);
console.log("Protocol:", myUrl.protocol);
console.log("Hostname:", myUrl.hostname);
console.log("Path:", myUrl.pathname);
console.log("Search:", myUrl.search);

console.log("Product ID:", myUrl.searchParams.get("id"));

console.log("Category:", myUrl.searchParams.get("category"));
