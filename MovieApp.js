class MovieApi{ 
    movies = [
}
name: "Miracle Heaven",
price: 500,
rented: true,
},
{
    name: "Ijenwa",
    price: 50
    rented: true, 
},
{
    name: "Merlin",
    price: 500,
    rented: true,
},
{
    name: "Legend of the Seeker",
    price: 50
    rented: true,
},
];

getMovies(){
    return this.movies;
}

rentMovies(arg){
    var findObj = this.movies.find((x) => x.name === arg);
    if (!findObj){
        console.log("====================");
        console.log(`== ${arg} Not found in database ===`);
        console.log("=====================");
        return;
    }
}

this.movies = [...this.movies,]{ ...findObj, rented: true}];
   console.log("===== Successfully Rented ====");
}

returnMovie(arg){
    var findObj = this.movies.find((x) => x.name === arg);

    if (!findObj){
        console.log("===================");
           console.log(`== ${arg} Not found in database ==`);

        console.log("===================");
        return;
    }

    this.movies = [...this.movies,
        { ...findObj, rented: false}];
       console.log("===== Successfully Returned==========");
     }
    }
    
     var movApi = new MovieApi();

     console.log(movApi.rentMovies("Merlin"));
     console.log(movApi.returnMovie("Merlin"));
     console.log(movApi.getMovies());


