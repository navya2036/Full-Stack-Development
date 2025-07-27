const needle = require('needle');
const title = 'Data Science';
const url = `http://openlibrary.org/search.json?title=${encodeURIComponent(title)}`;

needle.get(url, (err, res) => {
    if (err) {
        console.error("Error fetching data:", err);
        return;
    }

    const books = res.body.docs.slice(0, 5);

    console.log(`Top 5 books for title: "${title}"\n`);
    books.forEach((book, i) => {
        console.log(`Title  : ${book.title}`);
        console.log(`Author : ${book.author_name?.join(', ') || 'N/A'}`);
        console.log('---------------------------');
    });
});
