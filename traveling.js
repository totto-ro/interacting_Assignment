let tigger = { 
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
        }
}; 
let pooh = { 
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Oh bother");
        }
};
let piglet = { 
    character: "Piglet",
    greet: function(){
        console.log("Oh d-d-d-d-dear! I wasn't expecting company");
        }
};        
let bees = {
    character: "Bees",
    greet: function(){
        console.log("Hi, there!");
        }
};
let owl = { 
    character: "Owl",
    greet: function(){
        console.log("Nice to see you!");
        }
};
let crisRobin = { 
    character: "Christopher Robin",
    greet: function(){
        console.log("Hello!");
        }
};
let rabbit = { 
    character: "Rabbit",
    greet: function(){
        console.log("Good to see you!");
        }
};
let gopher = { 
    character: "Gopher",
    greet: function(){
        console.log("Good Morning!");
        }
};
let kanga = { 
    character: "Kanga",
    greet: function(){
        console.log("Greetings!");
        }
};
let eeyore = { 
    character: "Eeyore",
    greet: function(){
        console.log("Hi! How are you?");
        }
};
let heffalumps = { 
    character: "Heffalumps",
    greet: function(){
        console.log("Lovely to see you!");
        }
};

tigger.north = pooh;
tigger.north.west = piglet;   
tigger.north.east = bees;  

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = crisRobin;


piglet.east = tigger;  
piglet.north = owl;
piglet.east = pooh;

bees.west = tigger; 
bees.north = rabbit;
bees.west = pooh;

owl.south = piglet;
owl.east = crisRobin;


crisRobin.west = owl;
crisRobin.east = rabbit;
crisRobin.north = kanga;
crisRobin.south = pooh;

rabbit.west = crisRobin;
rabbit.east = gopher;
rabbit.south = bees;

gopher.west = rabbit;

kanga.north = eeyore;
kanga.south = crisRobin;

eeyore.east = heffalumps;
eeyore.south = kanga;

heffalumps.west = eeyore;


let player = {
    location: tigger
}

tigger.greet();

function move( direction ){
    if( direction in player.location ){
        player.location = player.location[ direction ];
        console.log( "You are now at " + player.location.character + "'s house." );
        player.location.greet();
        }
        else{
            console.log( "You may not go that way!" );
        }

}