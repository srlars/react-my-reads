# MyReads: A Book Lending App

## Usage

```bash
npm install
npm start
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `get(bookId)`

- Returns a Promise which resolves to a JSON object containing a single book object with the `id` passed as `bookId`.

### `getAll()`

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`

- query: `<String>`
- maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
- The search from BooksAPI is limited to a particular set of search terms. You can find these search terms in [`SEARCH_TERMS.md`](SEARCH_TERMS.md).
  However, the `BooksAPI.search` method DOES search by title or author.

## Screenshot

**Screenshot of App**
![Image of Default Page](https://github.com/srlars/react-my-reads/blob/master/screenshots/screenshot_1.png)
