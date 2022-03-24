
class character {
    firstName;
    animaltype;
    color;

    constructor(firstName, animaltype, color) {
        this.firstName = firstName;
        this.animaltype = animaltype;
        this.color = color;

    }}


people = [
    new character(  'John', 'Doe', 'Chef'),
    new character ( 'Jane',  'Smith',  'Programmer'),
    new character ( 'Matilda',  'Swanson', 'Meme Connoisseur'),
    new character ( 'Steve',  'Richards', 'CEO'),
    new character ('Spongebob',  'Squarepants',  'Fry Cook'),
];
writePeople = (people) => {
    let myHtml = '<table><thead><tr>th>First Name</th><th>animaltype</th><th>Color</th></tr></tr></thead><tbody>';
         for (let character of people) {
    myHtml +='<tr><td>${character.firstName}</td><td>${character.animaltype} </td><td>${character.color} </td></tr>'
    myHtml += '</tbody></table> '
        document.getElementById( "target").innerHTML = myHtml;
    let load = () => {
        let request = new XMLHttpRequest();
        request.onload = () =>{
        console.log(this.writePeople (JSON.parse(request.response)))
        request.onerror = () => {
            console.log(request.response);
            request.open("GET", '../resources/employee-data.json');
            request.send();
        }}}}}
            // this.writePeople(this.people);
