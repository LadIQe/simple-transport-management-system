# Simple Transportation Management App

### Current state

The App has two branches:
- main — base app without much styling, wanted to keep the appointed time
- styled — base app with additional styling

### FE

- Vue 3, Pinia, Typescript, Toast, Axios
- No UI framework
- Ugly

Simple App with simple layout. Priority was functionality over aesthetic.
Has a simple interceptor to show toasts to user (if any error occurs).

Has two routes, home (list + create a new order) and detail. List item 
is a simple router-link.

Details has simple router ID parameter check, if it's not a number, it will
show a message to the user. Fetching data has loader representation.

### BE

- Django, SQLite3

Due to no much of skills with python and Django, it's as simple as possible.
Has three REST Endpoints (create order, get a list, get detail).

Every item in the list has as little data as possible.
