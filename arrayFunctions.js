var student = [
{firstName: 'Cam', lastName: 'Newton'},
{firstName: 'Tal', lastName: 'Ginn'},
{firstName: 'Greg', lastName: 'Oslen'}
]

var fullNames = student(function(student) {
    return student.firstName + ' ' + student.lastName;

})

fullNames === ["Cam Newton", "Tal Gin", "Greg Oslen"]

var superHeroes = [
    [" batman", "Bruce Wayne"],
    ["spiderman", "Peter Parker"]
    ["The Flash", " Banry Allen"]
]

var secretIdentity = 0;

secretIdentity = superHeroes.map(function(revelArray){
    return revealarray.join(" " + "is" + " ")
})

console.log(secretIdentity);



 var players = [
     {firstName: 'Cam', lastName:'Newton', position: 'QB', touchdowns: 32 },
     {firstName: 'Derek', lastName:'Anderson', position: 'QB', touchdowns: 0 },
     {firstName: 'Jonathanan', lastName:'stewart', position: 'RB', touchdowns: 12 },
     {firstName: 'Mike', lastName:'Talbot', position: 'RB', touchdowns: 8 },
     {firstName: 'Fozzy', lastName:'Whitaker',position: 'RB', touchdowns: 3 },
     {firstName: 'Ted', lastName:'Ginn', position: 'WR', touchdowns: 9 },
     {firstName; 'Devin', lastName:'Funchess', position: 'WR', touchdowns: 2 },
     
 ];

 const e - players.find(function(player)    {
        return player.firstName == 'mike';
 }) ;

 const f = players.filter (function (rbs) {
        return rbs.position == 'rb'
 });

 const g players.map(function (sur) {
        return sur.lastName
 };

 const h = players.filter (function (topRB) {
     return topRB.touchdowns > 5 && topRB.positions == 'RB'
 });

 const i = players.filter (function(areB)   {
     return areB.position == 'RB'
 }).reduce (function (sum, curr) )  {
     return sum + curr.touchdowns
 }, 0);

 console.log(e);
 console.log(f);
 console.log(g);
 console.log(h);
 console.log(i);
