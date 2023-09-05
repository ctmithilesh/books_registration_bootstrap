
const title = document.getElementById("title");

const author = document.getElementById("author");

const year = document.getElementById("year");

const bookList = document.getElementById("book-list");

const btn = document.querySelector(".btn");



btn.addEventListener("click", function (e) {

    e.preventDefault();



    if (title.value == "" && author.value == "" && year.value == "") {

        alert("Fill The Form");

    } else {

        const newRow = document.createElement("tr");



        // Creating new Title

        const newTitle = document.createElement("td");

        newTitle.innerHTML = title.value;

        newRow.appendChild(newTitle);



        // Creating new Author

        const newAuthor = document.createElement("td");

        newAuthor.innerHTML = author.value;

        newRow.append(newAuthor);



        // Creating new Year

        const newYear = document.createElement("td");

        newYear.innerHTML = year.value;

        newRow.appendChild(newYear);



        bookList.appendChild(newRow);

    }

});
